//! Optics. OPTimistic Interchain Communication
//!

#![forbid(unsafe_code)]
#![warn(missing_docs)]
#![warn(unused_extern_crates)]

/// Accumulator management
pub mod accumulator;

/// Model instantatiations of the on-chain structures
pub mod models;

use ethers_core::{
    types::{Address, Signature, H256},
    utils::hash_message,
};
use ethers_signers::Signer;
use sha3::{Digest, Keccak256};

/// Error types for Optics
#[derive(Debug, thiserror::Error)]
pub enum OpticsError {
    /// Signature Error pasthrough
    #[error(transparent)]
    SignatureError(#[from] ethers_core::types::SignatureError),
    /// Update does not build off the current root
    #[error("Update has wrong current root. Expected: {expected}. Got: {actual}.")]
    WrongCurrentRoot {
        /// The provided root
        actual: H256,
        /// The current root
        expected: H256,
    },
    /// Update specifies a new root that is not in the queue. This is an
    /// improper update and is slashable
    #[error("Update has unknown new root: {0}")]
    UnknownNewRoot(H256),
}

/// Simple trait for types with a canonical encoding
pub trait Encode {
    /// Write the canonical encoding to the writer
    fn write_to<W>(&self, writer: &mut W) -> std::io::Result<usize>
    where
        W: std::io::Write;
}

impl Encode for Signature {
    fn write_to<W>(&self, writer: &mut W) -> std::io::Result<usize>
    where
        W: std::io::Write,
    {
        writer.write_all(&self.to_vec())?;
        Ok(65)
    }
}

fn domain_hash(origin_slip44_id: u32) -> H256 {
    H256::from_slice(
        Keccak256::new()
            .chain(origin_slip44_id.to_be_bytes())
            .chain("OPTICS".as_bytes())
            .finalize()
            .as_slice(),
    )
}

/// An Optics message between chains
#[derive(Debug, Clone)]
pub struct Message {
    origin: u32,      // 4   SLIP-44 ID
    sender: H256,     // 32  Address in origin convention
    destination: u32, // 4   SLIP-44 ID
    recipient: H256,  // 32  Address in destination convention
    sequence: u32,    // 4   Count of all previous messages to destination
    body: Vec<u8>,    // 0+  Message contents
}

impl Encode for Message {
    fn write_to<W>(&self, writer: &mut W) -> std::io::Result<usize>
    where
        W: std::io::Write,
    {
        writer.write_all(&self.origin.to_be_bytes())?;
        writer.write_all(self.sender.as_ref())?;
        writer.write_all(&self.destination.to_be_bytes())?;
        writer.write_all(self.recipient.as_ref())?;
        writer.write_all(&self.sequence.to_be_bytes())?;
        Ok(36 + 36 + 4 + self.body.len())
    }
}

/// An Optics update message
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub struct Update {
    /// The origin chain
    pub origin_chain: u32,
    /// The previous root
    pub previous_root: H256,
    /// The new root
    pub new_root: H256,
}

impl Encode for Update {
    fn write_to<W>(&self, writer: &mut W) -> std::io::Result<usize>
    where
        W: std::io::Write,
    {
        writer.write_all(&self.origin_chain.to_be_bytes())?;
        writer.write_all(self.previous_root.as_ref())?;
        writer.write_all(self.new_root.as_ref())?;
        Ok(4 + 32 + 32)
    }
}

impl Update {
    fn signing_hash(&self) -> H256 {
        // sign:
        // domain(origin) || previous_root || new_root
        H256::from_slice(
            Keccak256::new()
                .chain(domain_hash(self.origin_chain))
                .chain(self.previous_root)
                .chain(self.new_root)
                .finalize()
                .as_slice(),
        )
    }

    fn prepended_hash(&self) -> H256 {
        hash_message(self.signing_hash())
    }

    /// Sign an update using the specified signer
    pub async fn sign_with<S>(self, signer: &S) -> Result<SignedUpdate, S::Error>
    where
        S: Signer,
    {
        let signature = signer.sign_message(self.signing_hash()).await?;
        Ok(SignedUpdate {
            update: self,
            signature,
        })
    }
}

/// A Signed Optics Update
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct SignedUpdate {
    /// The update
    pub update: Update,
    /// The signature
    pub signature: Signature,
}

impl Encode for SignedUpdate {
    fn write_to<W>(&self, writer: &mut W) -> std::io::Result<usize>
    where
        W: std::io::Write,
    {
        let mut written = 0;
        written += self.update.write_to(writer)?;
        written += self.signature.write_to(writer)?;
        Ok(written)
    }
}

impl SignedUpdate {
    /// Recover the Ethereum address of the signer
    pub fn recover(&self) -> Result<Address, OpticsError> {
        dbg!(self.update.prepended_hash());
        Ok(self.signature.recover(self.update.prepended_hash())?)
    }

    /// Check whether a message was signed by a specific address
    pub fn verify(&self, signer: Address) -> Result<(), OpticsError> {
        Ok(self
            .signature
            .verify(self.update.prepended_hash(), signer)?)
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn it_sign() {
        let t = async {
            let signer: ethers_signers::LocalWallet =
                "1111111111111111111111111111111111111111111111111111111111111111"
                    .parse()
                    .unwrap();
            let message = Update {
                origin_chain: 5,
                new_root: H256::repeat_byte(1),
                previous_root: H256::repeat_byte(2),
            };

            let signed = message.sign_with(&signer).await.expect("!sign_with");
            signed.verify(signer.address()).expect("!verify");
        };
        tokio::runtime::Builder::new_current_thread()
            .enable_all()
            .build()
            .unwrap()
            .block_on(t)
    }
}