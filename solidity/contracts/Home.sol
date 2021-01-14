// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

import "@openzeppelin/contracts/cryptography/ECDSA.sol";

import "./Merkle.sol";
import "./Queue.sol";

contract Home is MerkleTreeManager, QueueManager {
    using QueueLib for QueueLib.Queue;
    using MerkleLib for MerkleLib.Tree;

    enum States {WAITING, FAILED}

    uint256 constant BOND_SIZE = 50 ether;

    States public state;
    uint32 public immutable originSLIP44;
    bytes32 public immutable DOMAIN_HASH;
    address public updater;

    event ImproperUpdate();
    event DoubleUpdate(
        bytes32[2] _oldRoot,
        bytes32[2] _newRoot,
        bytes _signature,
        bytes _signature2
    );
    event Update(
        bytes32 indexed _oldRoot,
        bytes32 indexed _newRoot,
        bytes signature
    );

    modifier notFailed() {
        require(state == States.WAITING);
        _;
    }

    constructor(uint32 _originSLIP44, address _updater)
        payable
        MerkleTreeManager()
        QueueManager()
    {
        require(msg.value >= BOND_SIZE, "insufficient bond");
        DOMAIN_HASH = keccak256(abi.encodePacked(_originSLIP44, "OPTICS"));
        updater = _updater;
        originSLIP44 = _originSLIP44;
        state = States.WAITING;
    }

    // TODO
    function fail() internal {
        state = States.FAILED;
        msg.sender.transfer(address(this).balance / 2);
    }

    function checkSig(
        bytes32 _newRoot,
        bytes32 _oldRoot,
        bytes memory _signature
    ) internal view returns (bool) {
        bytes32 _digest =
            keccak256(abi.encodePacked(DOMAIN_HASH, _oldRoot, _newRoot));
        _digest = ECDSA.toEthSignedMessageHash(_digest);
        return ECDSA.recover(_digest, _signature) == updater;
    }

    function enqueue(
        uint32 destination,
        bytes32 recipient,
        bytes memory body
    ) external notFailed {
        bytes32 _digest =
            keccak256(
                abi.encodePacked(
                    originSLIP44,
                    bytes32(uint256(uint160(msg.sender))),
                    destination,
                    recipient,
                    body
                )
            );

        tree.insert(_digest);
        queue.enqueue(root());
    }

    function update(
        bytes32 _newRoot,
        bytes32 _oldRoot,
        bytes memory _signature
    ) external notFailed {
        if (improperUpdate(_newRoot, _oldRoot, _signature)) return;
        while (true) {
            bytes32 next = queue.dequeue();
            if (next == _newRoot) break;
        }
        emit Update(_oldRoot, _newRoot, _signature);
    }

    function doubleUpdate(
        bytes32[2] calldata _newRoot,
        bytes32[2] calldata _oldRoot,
        bytes calldata _signature,
        bytes calldata _signature2
    ) external notFailed {
        if (
            checkSig(_newRoot[0], _oldRoot[0], _signature) &&
            checkSig(_newRoot[1], _oldRoot[1], _signature2) &&
            (_newRoot[0] != _newRoot[1] || _oldRoot[0] != _oldRoot[1])
        ) {
            fail();
            emit DoubleUpdate(_oldRoot, _newRoot, _signature, _signature2);
        }
    }

    function improperUpdate(
        bytes32 _newRoot,
        bytes32 _oldRoot,
        bytes memory _signature
    ) public notFailed returns (bool) {
        require(checkSig(_newRoot, _oldRoot, _signature), "bad sig");
        if (!queue.contains(_newRoot)) {
            fail();
            emit ImproperUpdate();
            return true;
        }
        return false;
    }
}
