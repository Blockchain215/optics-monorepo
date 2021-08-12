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
import type { Home, HomeInterface } from "../Home";

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
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndSequence",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
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
    inputs: [],
    name: "ImproperUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "UpdaterSlashed",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
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
    name: "count",
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
    name: "current",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipient",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_body",
        type: "bytes",
      },
    ],
    name: "enqueue",
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
    name: "improperUpdate",
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
        internalType: "contract IUpdaterManager",
        name: "_updaterManager",
        type: "address",
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
    inputs: [],
    name: "owner",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
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
    name: "queueEnd",
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
    inputs: [],
    name: "queueLength",
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
    name: "root",
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
        name: "",
        type: "uint32",
      },
    ],
    name: "sequences",
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
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
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
    inputs: [],
    name: "suggestUpdate",
    outputs: [
      {
        internalType: "bytes32",
        name: "_current",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
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
  {
    inputs: [],
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161286d38038061286d8339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff166127fa6100736000398061096352806109945280610dce52806111fa52506127fa6000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80639df6c8e1116100e3578063d34686391161008c578063f2fde38b11610066578063f2fde38b14610663578063f6d1610214610696578063fd54b2281461069e57610198565b8063d34686391461059b578063df034cd014610653578063ebf0c7171461065b57610198565b8063b31c01fb116100bd578063b31c01fb1461048d578063c19d93fb1461053f578063c4d66de81461056857610198565b80639df6c8e1146104755780639fa6a6e31461047d578063ab91c7b01461048557610198565b8063522ae002116101455780638e4e30e01161011f5780638e4e30e01461035d5780639776120e1461040f5780639d54f4191461044257610198565b8063522ae0021461031c5780638d3638f4146103245780638da5cb5b1461032c57610198565b80632bef2892116101765780632bef2892146102c257806336e104de146102f357806345630b1a1461031457610198565b806306661abd1461019d57806319d9d21a146101b75780632752e0f414610286575b600080fd5b6101a56106a6565b60408051918252519081900360200190f35b610284600480360360a08110156101cd57600080fd5b81359160208101918101906080810160608201356401000000008111156101f357600080fd5b82018360208201111561020557600080fd5b8035906020019184600183028401116401000000008311171561022757600080fd5b91939092909160208101903564010000000081111561024557600080fd5b82018360208201111561025757600080fd5b8035906020019184600183028401116401000000008311171561027957600080fd5b5090925090506106ac565b005b6102a96004803603602081101561029c57600080fd5b503563ffffffff16610909565b6040805163ffffffff9092168252519081900360200190f35b6102df600480360360208110156102d857600080fd5b5035610921565b604080519115158252519081900360200190f35b6102fb610934565b6040805192835260208301919091528051918290030190f35b6101a561095c565b6101a561098c565b6102a9610992565b6103346109b6565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102df6004803603606081101561037357600080fd5b81359160208101359181019060608101604082013564010000000081111561039a57600080fd5b8201836020820111156103ac57600080fd5b803590602001918460018302840111640100000000831117156103ce57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109d2945050505050565b6102846004803603602081101561042557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610ba5565b6102846004803603602081101561045857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c37565b610334610cc6565b6101a5610ce2565b6101a5610ce8565b610284600480360360608110156104a357600080fd5b8135916020810135918101906060810160408201356401000000008111156104ca57600080fd5b8201836020820111156104dc57600080fd5b803590602001918460018302840111640100000000831117156104fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610cf4945050505050565b610547610e92565b6040518082600281111561055757fe5b815260200191505060405180910390f35b6102846004803603602081101561057e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610eb3565b610284600480360360608110156105b157600080fd5b63ffffffff823516916020810135918101906060810160408201356401000000008111156105de57600080fd5b8201836020820111156105f057600080fd5b8035906020019184600183028401116401000000008311171561061257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110d0945050505050565b610334611352565b6101a561136e565b6102846004803603602081101561067957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661137a565b6101a5611409565b6101a5611415565b60215490565b600260245474010000000000000000000000000000000000000000900460ff1660028111156106d757fe5b141561074457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f8601819004810282018101909252848152610786918891883591889088908190840183828082843760009201919091525061141b92505050565b80156107d557506107d586866001602002013584848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061141b92505050565b80156107e657508435602086013514155b15610901576107f36114ad565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b60266020526000908152604090205463ffffffff1681565b600061092e602283611588565b92915050565b60008061094160226115f8565b156109585760255491506109556022611638565b90505b9091565b60006109877f0000000000000000000000000000000000000000000000000000000000000000611675565b905090565b61080081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60285473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260245474010000000000000000000000000000000000000000900460ff1660028111156109ff57fe5b1415610a6c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610a7784848461141b565b610ae257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f6261642073696700000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6025548414610b5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420612063757272656e7420757064617465000000000000000000000000604482015290519081900360640190fd5b610b5d602284611588565b610b9a57610b696114ad565b6040517fb015f3b3a7a56304206e1e4d15f0dad9b2914691bbe7ab34e407c53b2700a91b90600090a1506001610b9e565b5060005b9392505050565b60285473ffffffffffffffffffffffffffffffffffffffff163314610c2b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f216f776e65720000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610c34816116ea565b50565b60275473ffffffffffffffffffffffffffffffffffffffff163314610cbd57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f21757064617465724d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b610c34816117d7565b60275473ffffffffffffffffffffffffffffffffffffffff1681565b60255481565b600061098760226115f8565b600260245474010000000000000000000000000000000000000000900460ff166002811115610d1f57fe5b1415610d8c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610d978383836109d2565b15610da157610e8d565b6000610dad6022611850565b905082811415610dbd5750610dc3565b50610da1565b8160258190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e52578181015183820152602001610e3a565b50505050905090810190601f168015610e7f5780820380516001836020036101000a031916815260200191505b509250505060405180910390a45b505050565b60245474010000000000000000000000000000000000000000900460ff1681565b600054610100900460ff1680610ecc5750610ecc611989565b80610eda575060005460ff16155b610f2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612775602e913960400191505060405180910390fd5b600054610100900460ff16158015610f9557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610f9e3361199a565b610fa7826116ea565b610fb16022611a28565b602754604080517fdf034cd0000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163df034cd0916004808301926020929190829003018186803b15801561101c57600080fd5b505afa158015611030573d6000803e3d6000fd5b505050506040513d602081101561104657600080fd5b5051905061105381611a6c565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a15080156110cc57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b600260245474010000000000000000000000000000000000000000900460ff1660028111156110fb57fe5b141561116857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610800815111156111da57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f21746f6f20626967000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b63ffffffff808416600090815260266020526040812054909116906112237f00000000000000000000000000000000000000000000000000000000000000003384888888611bf9565b80516020820120909150611238600182611ccf565b61124b61124361136e565b602290611dd7565b50806112578785611e44565b67ffffffffffffffff16600161126b6106a6565b037f1a2a870182b13cdb4a0ec2e16f96df5a0e20b1327d43564f7f0e62992a55bd6c856040518080602001828103825283818151815260200191508051906020019080838360005b838110156112cb5781810151838201526020016112b3565b50505050905090810190601f1680156112f85780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505063ffffffff938416600090815260266020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000016600192909201909416179092555050565b60245473ffffffffffffffffffffffffffffffffffffffff1681565b60006109876001611e5e565b60285473ffffffffffffffffffffffffffffffffffffffff16331461140057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f216f776e65720000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610c348161199a565b60006109876022611638565b60215481565b60008061142661095c565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061146781611e71565b60245490915073ffffffffffffffffffffffffffffffffffffffff1661148d8285611ec2565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b6114b5611f5c565b602754604080517f5b3c2cbf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff90921691635b3c2cbf9160248082019260009290919082900301818387803b15801561152757600080fd5b505af115801561153b573d6000803e3d6000fd5b505060245460405133935073ffffffffffffffffffffffffffffffffffffffff90911691507f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce90600090a3565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111610b9a5760008181526001850160205260409020548314156115f057600191505061092e565b6001016115a0565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166116308282611f9d565b949350505050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b6116f381611fb7565b61175e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015290519081900360640190fd5b6027805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9181900360200190a150565b6024805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166118888282611f9d565b6118f357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611944576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b600061199430611fb7565b15905090565b60285460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3602880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b80546fffffffffffffffffffffffffffffffff16610c345780547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016600117815550565b600054610100900460ff1680611a855750611a85611989565b80611a93575060005460ff16155b611ae8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612775602e913960400191505060405180910390fd5b600054610100900460ff16158015611b4e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b602480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416177fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017905580156110cc57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b60208310611c8a57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101611c4d565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b602082015463ffffffff11611d4557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015290519081900360640190fd5b6020820180546001019081905560005b6020811015611dd4578160011660011415611d815782848260208110611d7757fe5b0155506110cc9050565b838160208110611d8d57fe5b015483604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120925060028281611dc957fe5b049150600101611d55565b50fe5b81546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000928390048216600101918216909202919091178355811561092e576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b63ffffffff1660209190911b67ffffffff00000000161790565b600061092e82611e6c611fbd565b61247e565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b60008151604114611f3457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a611f528682858561253c565b9695505050505050565b602480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674020000000000000000000000000000000000000000179055565b60019103016fffffffffffffffffffffffffffffffff1690565b3b151590565b611fc5612733565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b602081101561253457600182821c1660008683602081106124a557fe5b0154905081600114156124e8578085604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120945061252a565b848684602081106124f557fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094505b5050600101612488565b505092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156125b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127536022913960400191505060405180910390fd5b8360ff16601b14806125cc57508360ff16601c145b612621576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127a36022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561267d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661272a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b604051806104000160405280602090602082028036833750919291505056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565a26469706673582212200540f83deec995e68f6a94b36b61f6e48a0f395bb2881b239645d04687414bd564736f6c63430007060033";

export class Home__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Home> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Home>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Home {
    return super.attach(address) as Home;
  }
  connect(signer: Signer): Home__factory {
    return super.connect(signer) as Home__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HomeInterface {
    return new utils.Interface(_abi) as HomeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Home {
    return new Contract(address, _abi, signerOrProvider) as Home;
  }
}
