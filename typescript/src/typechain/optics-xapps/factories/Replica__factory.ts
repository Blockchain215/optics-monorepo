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
import type { Replica, ReplicaInterface } from "../Replica";

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
        indexed: false,
        internalType: "bytes",
        name: "error",
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
    inputs: [],
    name: "canConfirm",
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
    name: "confirm",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_current",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_nextToProcess",
        type: "uint32",
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
    name: "nextPending",
    outputs: [
      {
        internalType: "bytes32",
        name: "_pending",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_confirmAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextToProcess",
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
    inputs: [],
    name: "previous",
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
  "0x60a060405234801561001057600080fd5b5060405161300c38038061300c8339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff16612fa361006960003980610d425280610da95250612fa36000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80637c2b2e71116100ee578063b31c01fb11610097578063c19d93fb11610071578063c19d93fb1461062c578063d88beda214610634578063df034cd01461063c578063f6d161021461066d576101a3565b8063b31c01fb14610504578063ba739a62146105b6578063bf30a55d146105d7576101a3565b8063961681dc116100c8578063961681dc146104ec5780639fa6a6e3146104f4578063ab91c7b0146104fc576101a3565b80637c2b2e71146104365780638d3638f41461043e578063928bc4b214610446576101a3565b806339992668116101505780636188af0e1161012a5780636188af0e146103635780637022b58e1461041157806371bfb7b814610419576101a3565b8063399926681461033257806345630b1a1461033a578063456d067214610342576101a3565b80632bbd59ca116101815780632bbd59ca146102ad5780632bef2892146102eb578063371d307114610308576101a3565b806314cfabb3146101a857806319d9d21a146101c457806325e3beda14610293575b600080fd5b6101b0610675565b604080519115158252519081900360200190f35b610291600480360360a08110156101da57600080fd5b813591602081019181019060808101606082013564010000000081111561020057600080fd5b82018360208201111561021257600080fd5b8035906020019184600183028401116401000000008311171561023457600080fd5b91939092909160208101903564010000000081111561025257600080fd5b82018360208201111561026457600080fd5b8035906020019184600183028401116401000000008311171561028657600080fd5b5090925090506106b0565b005b61029b61090f565b60408051918252519081900360200190f35b6102ca600480360360208110156102c357600080fd5b5035610915565b604051808260028111156102da57fe5b815260200191505060405180910390f35b6101b06004803603602081101561030157600080fd5b503561092a565b6101b0600480360361044081101561031f57600080fd5b508035906020810190610420013561093f565b61029b610a67565b61029b610a6d565b61034a610a82565b6040805163ffffffff9092168252519081900360200190f35b610291600480360361044081101561037a57600080fd5b81019060208101813564010000000081111561039557600080fd5b8201836020820111156103a757600080fd5b803590602001918460018302840111640100000000831117156103c957600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955092935050506104008201359050610a8e565b610291610b1a565b61029b6004803603602081101561042f57600080fd5b5035610d28565b61029b610d3a565b61034a610d40565b6101b06004803603602081101561045c57600080fd5b81019060208101813564010000000081111561047757600080fd5b82018360208201111561048957600080fd5b803590602001918460018302840111640100000000831117156104ab57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d64945050505050565b61034a611334565b61029b611340565b61029b611346565b6102916004803603606081101561051a57600080fd5b81359160208101359181019060608101604082013564010000000081111561054157600080fd5b82018360208201111561055357600080fd5b8035906020019184600183028401116401000000008311171561057557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611352945050505050565b6105be611638565b6040805192835260208301919091528051918290030190f35b610291600480360360a08110156105ed57600080fd5b5063ffffffff813581169173ffffffffffffffffffffffffffffffffffffffff602082013516916040820135916060810135916080909101351661166d565b6102ca611802565b61029b611825565b61064461182c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61029b61184e565b6000610681600261185a565b158015906106ab575060086000610698600261189a565b8152602001908152602001600020544210155b905090565b6002600054760100000000000000000000000000000000000000000000900460ff1660028111156106dd57fe5b141561074a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261078c918891883591889088908190840183828082843760009201919091525061193b92505050565b80156107db57506107db86866001602002013584848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061193b92505050565b80156107ec57508435602086013514155b15610907576107f96119d3565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b61271081565b60096020526000908152604090205460ff1681565b60006109376002836119dd565b90505b919050565b60008060008581526009602052604090205460ff16600281111561095f57fe5b146109cb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e6500000000000000000000000000604482015290519081900360640190fd5b6000610a01858560208060200260405190810160405280929190826020800280828437600092019190915250879150611a599050565b9050600154811480610a14575060075481145b15610a5a575050600083815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155610a60565b60009150505b9392505050565b60055481565b6004546000906106ab9063ffffffff16611b04565b60065463ffffffff1681565b610aa08380519060200120838361093f565b610b0b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f76650000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610b1483610d64565b50505050565b6002600054760100000000000000000000000000000000000000000000900460ff166002811115610b4757fe5b1415610bb457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610bbe600261185a565b610c2957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f2070656e64696e6700000000000000000000000000000000000000000000604482015290519081900360640190fd5b60004281610c37600261185a565b90505b600081118015610c66575060086000610c53600261189a565b8152602001908152602001600020548210155b15610cad57610c756002611b79565b60008181526008602052604081205592507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610c3a565b82610d1957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f6e6f742074696d65000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610d21611cb2565b5050600155565b60086020526000908152604090205481565b60075481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080610d718382611cba565b90506000610da07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611cde565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610df47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611d0f565b63ffffffff1614610e6657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e0000000000000000000000000000000000000000604482015290519081900360640190fd5b60065463ffffffff828116911614610edf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f2173657175656e63650000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6001845160208087019190912060009081526009909152604090205460ff166002811115610f0957fe5b14610f7557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f2170656e64696e67000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600260096000610fa67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611d40565b8152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610fe857fe5b02179055506207c8305a101561106157604080517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048083019190915260248201527f2167617300000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600061108e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611d7f565b905073ffffffffffffffffffffffffffffffffffffffff81166356d5d4756207a1206110db7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611d92565b6111067fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611dc2565b61115b6111347fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611df3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016611e64565b6040518563ffffffff1660e01b8152600401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111b95781810151838201526020016111a1565b50505050905090810190601f1680156111e65780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b15801561120757600080fd5b5087f193505050508015611219575060015b6112f0573d808015611247576040519150601f19603f3d011682016040523d82523d6000602084013e61124c565b606091505b50600094507f3c688a5f4cd6e38b537641d2b38bdf1f52e7da4d083c5c3b16a0847c1c7c642d816040518080602001828103825283818151815260200191508051906020019080838360005b838110156112b0578181015183820152602001611298565b50505050905090810190601f1680156112dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390a1506112f5565b600193505b50600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001660019290920163ffffffff1691909117905550919050565b60045463ffffffff1681565b60015481565b60006106ab600261185a565b6002600054760100000000000000000000000000000000000000000000900460ff16600281111561137f57fe5b14156113ec57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b60006113f8600261185a565b111561147a576114086002611ea8565b831461147557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420656e64206f6620717565756500000000000000000000000000000000604482015290519081900360640190fd5b6114ea565b82600154146114ea57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742063757272656e74207570646174650000000000000000000000000000604482015290519081900360640190fd5b6114f583838361193b565b61156057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f6261642073696700000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6115686119db565b600554600083815260086020526040902042909101905561158a600283611ee5565b5060045460408051602080825284518183015284518694889463ffffffff909116937f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2938893919283929083019185019080838360005b838110156115f95781810151838201526020016115e1565b50505050905090810190601f1680156116265780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505050565b600080611645600261185a565b1561166957611654600261189a565b60008181526008602052604090205490925090505b9091565b600054610100900460ff16806116865750611686611f52565b80611694575060005460ff16155b6116e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e5c602e913960400191505060405180910390fd5b600054610100900460ff1615801561174f57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff88161790556117896002611f63565b60018490556005839055600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff84161790556117cc85611fa8565b801561090757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050505050565b600054760100000000000000000000000000000000000000000000900460ff1681565b6207a12081565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60006106ab6002611ea8565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611892828261213d565b949350505050565b60006118a582612157565b1561191157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5080546fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b600080611946610a6d565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061198781612186565b60005490915062010000900473ffffffffffffffffffffffffffffffffffffffff166119b382856121d7565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b6119db612271565b565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111611a4d576000818152600185016020526040902054831415611a45576001915050611a53565b6001016119f5565b50600090505b92915050565b8260005b6020811015611afc57600183821c166000858360208110611a7a57fe5b602002015190508160011415611ac05780846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350611af2565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b5050600101611a5d565b509392505050565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611bb1828261213d565b611c1c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611c6d576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b600154600755565b815160009060208401611cd564ffffffffff851682846122b4565b95945050505050565b60006109377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166024600461230a565b60006109377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166028600461230a565b600080611d4c8361232b565b6bffffffffffffffffffffffff1690506000611d678461233f565b6bffffffffffffffffffffffff169091209392505050565b6000610937611d8d83612353565b612384565b60006109377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831682600461230a565b60006109377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660046020612387565b6000610937604c80611e267fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861661233f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff91909116036000612532565b6060600080611e728461233f565b6bffffffffffffffffffffffff1690506040519150819250611e9784836020016125b8565b508181016020016040529052919050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b81546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009283900482166001019182169092029190911783558115611a53576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b6000611f5d306126e4565b15905090565b80546fffffffffffffffffffffffffffffffff16611fa55780547fffffffffffffffffffffffffffffffff000000000000000000000000000000001660011781555b50565b600054610100900460ff1680611fc15750611fc1611f52565b80611fcf575060005460ff16155b612024576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e5c602e913960400191505060405180910390fd5b600054610100900460ff1615801561208a57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff851602177fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760100000000000000000000000000000000000000000000179055801561213957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b60019103016fffffffffffffffffffffffffffffffff1690565b546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000909204161090565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461224957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a612267868285856126ea565b9695505050505050565b600080547fffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffff16760200000000000000000000000000000000000000000000179055565b6000806122c184846128d8565b90506040518111156122d1575060005b806122ff577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610a60565b611cd585858561294a565b60008160200360080260ff16612321858585612387565b901c949350505050565b60781c6bffffffffffffffffffffffff1690565b60181c6bffffffffffffffffffffffff1690565b60006109377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c6020612387565b90565b600060ff821661239957506000610a60565b6123a28461233f565b6bffffffffffffffffffffffff166123bd8460ff85166128d8565b111561249c576123fe6123cf8561232b565b6bffffffffffffffffffffffff166123e68661233f565b6bffffffffffffffffffffffff16858560ff1661295d565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612461578181015183820152602001612449565b50505050905090810190601f16801561248e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff1611156124f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612eac603a913960400191505060405180910390fd5b6008820260006125088661232b565b6bffffffffffffffffffffffff169050600061252383612ab8565b91909501511695945050505050565b60008061253e8661232b565b6bffffffffffffffffffffffff16905061255786612b01565b61256b8561256584896128d8565b906128d8565b111561259a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611892565b6125a481866128d8565b90506122678364ffffffffff1682866122b4565b60006125c383612b2b565b612618576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612ee66028913960400191505060405180910390fd5b61262183612b3d565b612676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180612f0e602b913960400191505060405180910390fd5b60006126818461233f565b6bffffffffffffffffffffffff169050600061269c8561232b565b6bffffffffffffffffffffffff16905060006040519050848111156126c15760206060fd5b8285848460045afa506122676126d687612b7a565b64ffffffffff16868561294a565b3b151590565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115612765576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612e196022913960400191505060405180910390fd5b8360ff16601b148061277a57508360ff16601c145b6127cf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612e8a6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561282b573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611cd557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b81810182811015611a5357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b6060600061296a86612b80565b915050600061297886612b80565b915050600061298686612b80565b915050600061299486612b80565b915050838383836040516020018080612f39603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612e3b82397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6000612b0c8261233f565b612b158361232b565b016bffffffffffffffffffffffff169050919050565b6000612b3682612c54565b1592915050565b6000612b4882612b7a565b64ffffffffff1664ffffffffff1415612b635750600061093a565b6000612b6e83612b01565b60405110199392505050565b60d81c90565b600080601f5b600f8160ff161115612be85760ff600882021684901c612ba581612c7c565b61ffff16841793508160ff16601014612bc057601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612b86565b50600f5b60ff8160ff161015612c4e5760ff600882021684901c612c0b81612c7c565b61ffff16831792508160ff16600014612c2657601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612bec565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b6000612c8e60048360ff16901c612cac565b60ff161760081b62ffff0016612ca382612cac565b60ff1617919050565b600060f08083179060ff82161415612cc857603091505061093a565b8060ff1660f11415612cde57603191505061093a565b8060ff1660f21415612cf457603291505061093a565b8060ff1660f31415612d0a57603391505061093a565b8060ff1660f41415612d2057603491505061093a565b8060ff1660f51415612d3657603591505061093a565b8060ff1660f61415612d4c57603691505061093a565b8060ff1660f71415612d6257603791505061093a565b8060ff1660f81415612d7857603891505061093a565b8060ff1660f91415612d8e57603991505061093a565b8060ff1660fa1415612da457606191505061093a565b8060ff1660fb1415612dba57606291505061093a565b8060ff1660fc1415612dd057606391505061093a565b8060ff1660fd1415612de657606491505061093a565b8060ff1660fe1415612dfc57606591505061093a565b8060ff1660ff1415612e1257606691505061093a565b5091905056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c75652e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c756554797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220b8b08213d436aa9beb722b5388731f0c457f91e86a5c165cf23b0886ea0f010564736f6c63430007060033";

export class Replica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}
