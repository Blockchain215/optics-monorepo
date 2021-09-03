/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestReplica, TestReplicaInterface } from "../TestReplica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "ProcessError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
    ],
    name: "ProcessSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "acceptableRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
    ],
    name: "setCommittedRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setFailed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "setMessagePending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
    ],
    name: "setRemoteDomain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "testBranchRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "testHomeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "testProcess",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051612d2b380380612d2b8339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff16612cc261006960003980610cdc5280610d145250612cc26000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c8063928bc4b2116100f9578063b31c01fb11610097578063c19d93fb11610071578063c19d93fb146107a5578063d88beda2146107ad578063df034cd0146107b5578063e7e7a7b7146107e6576101b9565b8063b31c01fb14610645578063b61c19e8146106f7578063b80777ea1461079d576101b9565b80639868a273116100d35780639868a273146105ae5780639d54f419146105d8578063a33a31131461060b578063a3f81d6814610628576101b9565b8063928bc4b21461045a578063961681dc1461050057806396ae1a8914610508576101b9565b806345630b1a116101665780636188af0e116101405780636188af0e1461036657806367a6771d1461041457806371bfb7b81461041c5780638d3638f414610439576101b9565b806345630b1a146103335780635146366e1461033b57806351d7bcd714610343576101b9565b80632bbd59ca116101975780632bbd59ca146102af578063371d3071146102ed578063399926681461032b576101b9565b8063146901db146101be57806319d9d21a146101c857806325e3beda14610295575b600080fd5b6101c6610831565b005b6101c6600480360360a08110156101de57600080fd5b813591602081019181019060808101606082013564010000000081111561020457600080fd5b82018360208201111561021657600080fd5b8035906020019184600183028401116401000000008311171561023857600080fd5b91939092909160208101903564010000000081111561025657600080fd5b82018360208201111561026857600080fd5b8035906020019184600183028401116401000000008311171561028a57600080fd5b50909250905061083b565b61029d610a9a565b60408051918252519081900360200190f35b6102cc600480360360208110156102c557600080fd5b5035610aa0565b604051808260028111156102dc57fe5b815260200191505060405180910390f35b610317600480360361044081101561030457600080fd5b5080359060208101906104200135610ab5565b604080519115158252519081900360200190f35b61029d610bd5565b61029d610bdb565b61029d610bf5565b6101c66004803603602081101561035957600080fd5b503563ffffffff16610bff565b6101c6600480360361044081101561037d57600080fd5b81019060208101813564010000000081111561039857600080fd5b8201836020820111156103aa57600080fd5b803590602001918460018302840111640100000000831117156103cc57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955092935050506104008201359050610c36565b61029d610cc2565b61029d6004803603602081101561043257600080fd5b5035610cc8565b610441610cda565b6040805163ffffffff9092168252519081900360200190f35b6103176004803603602081101561047057600080fd5b81019060208101813564010000000081111561048b57600080fd5b82018360208201111561049d57600080fd5b803590602001918460018302840111640100000000831117156104bf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610cfe945050505050565b6104416113b0565b6103176004803603602081101561051e57600080fd5b81019060208101813564010000000081111561053957600080fd5b82018360208201111561054b57600080fd5b8035906020019184600183028401116401000000008311171561056d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506113bc945050505050565b61029d60048036036104408110156105c557600080fd5b50803590602081019061042001356113cd565b6101c6600480360360208110156105ee57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661140b565b6101c66004803603602081101561062157600080fd5b5035611458565b6103176004803603602081101561063e57600080fd5b503561146f565b6101c66004803603606081101561065b57600080fd5b81359160208101359181019060608101604082013564010000000081111561068257600080fd5b82018360208201111561069457600080fd5b803590602001918460018302840111640100000000831117156106b657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611498945050505050565b6101c66004803603602081101561070d57600080fd5b81019060208101813564010000000081111561072857600080fd5b82018360208201111561073a57600080fd5b8035906020019184600183028401116401000000008311171561075c57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506116e8945050505050565b61029d611772565b6102cc611776565b61029d611799565b6107bd6117a0565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101c6600480360360808110156107fc57600080fd5b5063ffffffff8135169073ffffffffffffffffffffffffffffffffffffffff60208201351690604081013590606001356117c2565b610839611959565b565b6002600054760100000000000000000000000000000000000000000000900460ff16600281111561086857fe5b14156108d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f8601819004810282018101909252848152610917918891883591889088908190840183828082843760009201919091525061199c92505050565b8015610966575061096686866001602002013584848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061199c92505050565b801561097757508435602086013514155b15610a9257610984610831565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b613a9881565b60356020526000908152604090205460ff1681565b60008060008581526035602052604090205460ff166002811115610ad557fe5b14610b4157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e6500000000000000000000000000604482015290519081900360640190fd5b6000610b77858560208060200260405190810160405280929190826020800280828437600092019190915250879150611a349050565b9050610b828161146f565b15610bc8575050600083815260356020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155610bce565b60009150505b9392505050565b60325481565b603154600090610bf09063ffffffff16611adf565b905090565b6000610bf0610bdb565b603180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff92909216919091179055565b610c4883805190602001208383610ab5565b610cb357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f76650000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610cbc83610cfe565b50505050565b60015481565b60346020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080610d0b8382611b54565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610d5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611b78565b63ffffffff1614610dd157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e0000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610dfe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611ba9565b9050600160008281526035602052604090205460ff166002811115610e1f57fe5b14610e8b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f2170726f76656e00000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60335460ff16600114610eff57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f217265656e7472616e7400000000000000000000000000000000000000000000604482015290519081900360640190fd5b603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00908116909155600082815260356020526040902080549091166002179055620d32e85a1015610fb657604080517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048083019190915260248201527f2167617300000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610fe37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611be8565b9050606073ffffffffffffffffffffffffffffffffffffffff8216620cf85061102d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611bfb565b6110587fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611c2b565b6110ad6110867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611c5c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016611ccd565b604051602401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156110ff5781810151838201526020016110e7565b50505050905090810190601f16801561112c5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f56d5d47500000000000000000000000000000000000000000000000000000000178152905182519297509550859450925090508083835b602083106111f457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016111b7565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038160008787f1925050503d8060008114611257576040519150601f19603f3d011682016040523d82523d6000602084013e61125c565b606091505b50909550905084156112985760405183907fdc8a2c27342659cbe87c6c49e4515c64faa8c97ba6a2f260cbf33d84d7bd832090600090a261137b565b73ffffffffffffffffffffffffffffffffffffffff82166112da7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611d11565b63ffffffff16847fdffcee52db78cb2d1f525b8d7edd630ea062884e733aa26c201d7ce1843eccab846040518080602001828103825283818151815260200191508051906020019080838360005b83811015611340578181015183820152602001611328565b50505050905090810190601f16801561136d5780820380516001836020036101000a031916815260200191505b509250505060405180910390a45b5050603380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055509092915050565b60315463ffffffff1681565b60006113c782610cfe565b92915050565b6000611403848460208060200260405190810160405280929190826020800280828437600092019190915250869150611a349050565b949350505050565b6000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b600181815560009182526034602052604090912055565b6000818152603460205260408120548061148d576000915050611493565b42101590505b919050565b6002600054760100000000000000000000000000000000000000000000900460ff1660028111156114c557fe5b141561153257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b60015483146115a257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742063757272656e74207570646174650000000000000000000000000000604482015290519081900360640190fd5b6115ad83838361199c565b61161857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b611620610839565b6032546000838152603460209081526040808320429094019093556001859055603154835182815285518184015285518795899563ffffffff909416947f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b29489949384938401928601918190849084905b838110156116a9578181015183820152602001611691565b50505050905090810190601f1680156116d65780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505050565b60006116f48282611b54565b90506001603560006117277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611ba9565b8152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600281111561176957fe5b02179055505050565b4290565b600054760100000000000000000000000000000000000000000000900460ff1681565b620cf85081565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b600054610100900460ff16806117db57506117db611d42565b806117e9575060005460ff16155b61183e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612b7b602e913960400191505060405180910390fd5b600054610100900460ff161580156118a457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6118ad84611d53565b6033805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009091168117909155603180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff88161790558381556000848152603460205260409020556032829055801561195257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050505050565b600080547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760200000000000000000000000000000000000000000000179055565b6000806119a7610bdb565b85856040516020018084815260200183815260200182815260200193505050506040516020818303038152906040528051906020012090506119e881611ee8565b60005490915062010000900473ffffffffffffffffffffffffffffffffffffffff16611a148285611f39565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b8260005b6020811015611ad757600183821c166000858360208110611a5557fe5b602002015190508160011415611a9b5780846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350611acd565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b5050600101611a38565b509392505050565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b815160009060208401611b6f64ffffffffff85168284611fd3565b95945050505050565b60006113c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004612029565b600080611bb58361204a565b6bffffffffffffffffffffffff1690506000611bd08461205e565b6bffffffffffffffffffffffff169091209392505050565b60006113c7611bf683612072565b6120a3565b60006113c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004612029565b60006113c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600460206120a6565b60006113c7604c80611c8f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861661205e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff91909116036000612251565b6060600080611cdb8461205e565b6bffffffffffffffffffffffff1690506040519150819250611d0084836020016122d7565b508181016020016040529052919050565b60006113c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660246004612029565b6000611d4d30612403565b15905090565b600054610100900460ff1680611d6c5750611d6c611d42565b80611d7a575060005460ff16155b611dcf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612b7b602e913960400191505060405180910390fd5b600054610100900460ff16158015611e3557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff851602177fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff167601000000000000000000000000000000000000000000001790558015611ee457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b60008151604114611fab57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a611fc986828585612409565b9695505050505050565b600080611fe084846125f7565b9050604051811115611ff0575060005b8061201e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610bce565b611b6f858585612669565b60008160200360080260ff166120408585856120a6565b901c949350505050565b60781c6bffffffffffffffffffffffff1690565b60181c6bffffffffffffffffffffffff1690565b60006113c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c60206120a6565b90565b600060ff82166120b857506000610bce565b6120c18461205e565b6bffffffffffffffffffffffff166120dc8460ff85166125f7565b11156121bb5761211d6120ee8561204a565b6bffffffffffffffffffffffff166121058661205e565b6bffffffffffffffffffffffff16858560ff1661267c565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612180578181015183820152602001612168565b50505050905090810190601f1680156121ad5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff161115612218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612bcb603a913960400191505060405180910390fd5b6008820260006122278661204a565b6bffffffffffffffffffffffff1690506000612242836127d7565b91909501511695945050505050565b60008061225d8661204a565b6bffffffffffffffffffffffff16905061227686612820565b61228a8561228484896125f7565b906125f7565b11156122b9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611403565b6122c381866125f7565b9050611fc98364ffffffffff168286611fd3565b60006122e28361284a565b612337576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612c056028913960400191505060405180910390fd5b6123408361285c565b612395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612c2d602b913960400191505060405180910390fd5b60006123a08461205e565b6bffffffffffffffffffffffff16905060006123bb8561204a565b6bffffffffffffffffffffffff16905060006040519050848111156123e05760206060fd5b8285848460045afa50611fc96123f587612899565b64ffffffffff168685612669565b3b151590565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115612484576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b386022913960400191505060405180910390fd5b8360ff16601b148061249957508360ff16601c145b6124ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612ba96022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561254a573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611b6f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b818101828110156113c757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b606060006126898661289f565b91505060006126978661289f565b91505060006126a58661289f565b91505060006126b38661289f565b915050838383836040516020018080612c58603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612b5a82397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b600061282b8261205e565b6128348361204a565b016bffffffffffffffffffffffff169050919050565b600061285582612973565b1592915050565b600061286782612899565b64ffffffffff1664ffffffffff141561288257506000611493565b600061288d83612820565b60405110199392505050565b60d81c90565b600080601f5b600f8160ff1611156129075760ff600882021684901c6128c48161299b565b61ffff16841793508160ff166010146128df57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016128a5565b50600f5b60ff8160ff16101561296d5760ff600882021684901c61292a8161299b565b61ffff16831792508160ff1660001461294557601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161290b565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b60006129ad60048360ff16901c6129cb565b60ff161760081b62ffff00166129c2826129cb565b60ff1617919050565b600060f08083179060ff821614156129e7576030915050611493565b8060ff1660f114156129fd576031915050611493565b8060ff1660f21415612a13576032915050611493565b8060ff1660f31415612a29576033915050611493565b8060ff1660f41415612a3f576034915050611493565b8060ff1660f51415612a55576035915050611493565b8060ff1660f61415612a6b576036915050611493565b8060ff1660f71415612a81576037915050611493565b8060ff1660f81415612a97576038915050611493565b8060ff1660f91415612aad576039915050611493565b8060ff1660fa1415612ac3576061915050611493565b8060ff1660fb1415612ad9576062915050611493565b8060ff1660fc1415612aef576063915050611493565b8060ff1660fd1415612b05576064915050611493565b8060ff1660fe1415612b1b576065915050611493565b8060ff1660ff1415612b31576066915050611493565b5091905056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c75652e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c756554797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220d0624b387a241e5afd75281a92339def30810cbc4c556cf6cfda84c56463378e64736f6c63430007060033";

export class TestReplica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestReplica> {
    return super.deploy(_localDomain, overrides || {}) as Promise<TestReplica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): TestReplica {
    return super.attach(address) as TestReplica;
  }
  connect(signer: Signer): TestReplica__factory {
    return super.connect(signer) as TestReplica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestReplicaInterface {
    return new utils.Interface(_abi) as TestReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestReplica {
    return new Contract(address, _abi, signerOrProvider) as TestReplica;
  }
}
