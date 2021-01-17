// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.6.11;

import "@summa-tx/memview-sol/contracts/TypedMemView.sol";
import "./Common.sol";
import "./Merkle.sol";

abstract contract Replica is Common {
    uint32 public immutable ownSLIP44;
    uint256 public optimisticSeconds;

    bytes32 current;
    bytes32 pending;
    uint256 confirmAt;

    event DoubleUpdate();

    constructor(
        uint32 _originSLIP44,
        uint32 _ownSLIP44,
        address _updater,
        uint256 _optimisticSeconds,
        bytes32 _start
    ) Common(_originSLIP44, _updater) {
        ownSLIP44 = _ownSLIP44;
        optimisticSeconds = _optimisticSeconds;
        current = _start;
    }

    function fail() internal override {
        _setFailed();
    }

    /// Hook for tasks
    function _beforeConfirm() internal virtual;

    /// Hook for tasks
    function _beforeUpdate() internal virtual;

    function update(
        bytes32 _newRoot,
        bytes32 _oldRoot,
        bytes memory _signature
    ) external notFailed {
        require(current == _oldRoot, "Not current update");
        require(Common.checkSig(_newRoot, _oldRoot, _signature), "Bad sig");

        _beforeUpdate();

        confirmAt = block.timestamp + optimisticSeconds;
        pending = _newRoot;
    }

    function confirm() external notFailed {
        require(confirmAt != 0, "No pending");
        require(block.timestamp >= confirmAt, "Not yet");

        _beforeConfirm();

        current = pending;
        delete pending;
        delete confirmAt;
    }
}

contract ProcessingReplica is Replica, HasZeroHashes {
    using MerkleLib for MerkleLib.Tree;
    using TypedMemView for bytes;
    using TypedMemView for bytes29;

    bytes32 previous; // to smooth over witness invalidation
    uint256 lastProcessed;
    mapping(bytes32 => MessageStatus) public messages;
    enum MessageStatus {None, Pending, Processed}

    constructor(
        uint32 _originSLIP44,
        uint32 _ownSLIP44,
        address _updater,
        uint256 _optimisticSeconds,
        bytes32 _start,
        uint256 _lastProcessed
    )
        HasZeroHashes()
        Replica(_originSLIP44, _ownSLIP44, _updater, _optimisticSeconds, _start)
    {
        lastProcessed = _lastProcessed;
    }

    function _beforeConfirm() internal override {
        previous = current;
    }

    function _beforeUpdate() internal override {}

    function process(bytes calldata _message) public {
        bytes29 _m = _message.ref(0);

        uint32 _destination = uint32(_m.indexUint(36, 4));
        uint32 _sequence = uint32(_m.indexUint(72, 4));
        require(_destination == ownSLIP44, "other destination");
        require(_sequence == lastProcessed + 1, "out of sequence");
        require(
            messages[keccak256(_message)] == MessageStatus.Pending,
            "not pending"
        );
        lastProcessed = _sequence;
        messages[_m.keccak()] = MessageStatus.Processed;

        // recipient address starts at the 52nd byte. 4 + 36 + 4 + 12
        address recipient = _m.indexAddress(52);
        // TODO: assembly this to avoid the clone?
        bytes memory payload = _m.slice(76, _m.len() - 76, 0).clone();

        // results intentionally ignored
        recipient.call(payload);
    }

    function prove(
        bytes32 leaf,
        bytes32[32] calldata proof,
        uint256 index
    ) public returns (bool) {
        bytes32 actual = MerkleLib.branchRoot(leaf, proof, index, zero_hashes);

        if (actual == current || actual == previous) {
            messages[leaf] = MessageStatus.Pending;
            return true;
        }
        return false;
    }

    function proveAndProcess(
        bytes32 leaf,
        bytes32[32] calldata proof,
        uint256 index,
        bytes calldata message
    ) external {
        require(prove(leaf, proof, index), "!prove");
        process(message);
    }
}
