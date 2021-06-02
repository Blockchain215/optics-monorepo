/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestMessage, TestMessageInterface } from "../TestMessage";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "body",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
    name: "destination",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
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
    name: "leaf",
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
    name: "origin",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
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
    name: "recipient",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "recipientAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
    name: "sender",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "sequence",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611605806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c97c703a1161005b578063c97c703a14610350578063cb3eb0e11461046b578063d7a7a72c14610511578063f45387ba146105b757610088565b806319b2107b1461008d5780636dc3c4f71461014c578063985a5c3114610204578063c81aa9c8146102aa575b600080fd5b610133600480360360208110156100a357600080fd5b8101906020810181356401000000008111156100be57600080fd5b8201836020820111156100d057600080fd5b803590602001918460018302840111640100000000831117156100f257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610686945050505050565b6040805163ffffffff9092168252519081900360200190f35b6101f26004803603602081101561016257600080fd5b81019060208101813564010000000081111561017d57600080fd5b82018360208201111561018f57600080fd5b803590602001918460018302840111640100000000831117156101b157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106c4945050505050565b60408051918252519081900360200190f35b6101f26004803603602081101561021a57600080fd5b81019060208101813564010000000081111561023557600080fd5b82018360208201111561024757600080fd5b8035906020019184600183028401116401000000008311171561026957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106fa945050505050565b610133600480360360208110156102c057600080fd5b8101906020810181356401000000008111156102db57600080fd5b8201836020820111156102ed57600080fd5b8035906020019184600183028401116401000000008311171561030f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610730945050505050565b6103f66004803603602081101561036657600080fd5b81019060208101813564010000000081111561038157600080fd5b82018360208201111561039357600080fd5b803590602001918460018302840111640100000000831117156103b557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610766945050505050565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610430578181015183820152602001610418565b50505050905090810190601f16801561045d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101336004803603602081101561048157600080fd5b81019060208101813564010000000081111561049c57600080fd5b8201836020820111156104ae57600080fd5b803590602001918460018302840111640100000000831117156104d057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506107c7945050505050565b6101f26004803603602081101561052757600080fd5b81019060208101813564010000000081111561054257600080fd5b82018360208201111561055457600080fd5b8035906020019184600183028401116401000000008311171561057657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506107fd945050505050565b61065d600480360360208110156105cd57600080fd5b8101906020810181356401000000008111156105e857600080fd5b8201836020820111156105fa57600080fd5b8035906020019184600183028401116401000000008311171561061c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610833945050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60006106bc6106958383610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000001661088f565b90505b919050565b60006106bc6106d38383610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000166108c0565b60006106bc6107098383610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000166108f1565b60006106bc61073f8383610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016610922565b60606106bc6107a0610779846000610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016610953565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000166109c4565b60006106bc6107d68383610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016610a08565b60006106bc61080c8383610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016610a38565b60006106bc6108428383610869565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016610a80565b81516000906020840161088464ffffffffff85168284610a93565b925050505b92915050565b60006106bc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660246004610af4565b60006106bc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660046020610b15565b60006106bc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c6020610b15565b60006106bc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004610af4565b60006106bc604c806109867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616610cc0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff91909116036000610cd4565b60606000806109d284610cc0565b6bffffffffffffffffffffffff16905060405191508192506109f78483602001610d66565b508181016020016040529052919050565b60006106bc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004610af4565b60006106bc610a4683610a08565b610a4f846108c0565b610a588561088f565b610a6186610922565b610a6a876108f1565b610a7b610a7689610953565b6109c4565b610e9c565b60006106bc610a8e836108f1565b610ebf565b600080610aa08484610ec2565b9050604051811115610ab0575060005b80610ade577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610aed565b610ae9858585610f34565b9150505b9392505050565b60008160200360080260ff16610b0b858585610b15565b901c949350505050565b600060ff8216610b2757506000610aed565b610b3084610cc0565b6bffffffffffffffffffffffff16610b4b8460ff8516610ec2565b1115610c2a57610b8c610b5d85610f47565b6bffffffffffffffffffffffff16610b7486610cc0565b6bffffffffffffffffffffffff16858560ff16610f5b565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bef578181015183820152602001610bd7565b50505050905090810190601f168015610c1c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff161115610c87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a81526020018061150e603a913960400191505060405180910390fd5b600882026000610c9686610f47565b6bffffffffffffffffffffffff1690506000610cb1836110b6565b91909501511695945050505050565b60181c6bffffffffffffffffffffffff1690565b600080610ce086610f47565b6bffffffffffffffffffffffff169050610cf9866110ff565b610d0d85610d078489610ec2565b90610ec2565b1115610d3c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610d5e565b610d468186610ec2565b9050610d5a8364ffffffffff168286610a93565b9150505b949350505050565b6000610d7183611129565b610dc6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806115486028913960400191505060405180910390fd5b610dcf8361113b565b610e24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180611570602b913960400191505060405180910390fd5b6000610e2f84610cc0565b6bffffffffffffffffffffffff1690506000610e4a85610f47565b6bffffffffffffffffffffffff1690506000604051905084811115610e6f5760206060fd5b8285848460045afa50610e92610e8487611178565b64ffffffffff168685610f34565b9695505050505050565b6000610eac87878787878761117e565b8051906020012090509695505050505050565b90565b8181018281101561088957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60781c6bffffffffffffffffffffffff1690565b60606000610f6886611254565b9150506000610f7686611254565b9150506000610f8486611254565b9150506000610f9286611254565b91505083838383604051602001808061159b603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a82015260500160216114ed82397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b600061110a82610cc0565b61111383610f47565b016bffffffffffffffffffffffff169050919050565b600061113482611328565b1592915050565b600061114682611178565b64ffffffffff1664ffffffffff1415611161575060006106bf565b600061116c836110ff565b60405110199392505050565b60d81c90565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b6020831061120f57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016111d2565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b600080601f5b600f8160ff1611156112bc5760ff600882021684901c61127981611350565b61ffff16841793508160ff1660101461129457601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161125a565b50600f5b60ff8160ff1610156113225760ff600882021684901c6112df81611350565b61ffff16831792508160ff166000146112fa57601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016112c0565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b600061136260048360ff16901c611380565b60ff161760081b62ffff001661137782611380565b60ff1617919050565b600060f08083179060ff8216141561139c5760309150506106bf565b8060ff1660f114156113b25760319150506106bf565b8060ff1660f214156113c85760329150506106bf565b8060ff1660f314156113de5760339150506106bf565b8060ff1660f414156113f45760349150506106bf565b8060ff1660f5141561140a5760359150506106bf565b8060ff1660f614156114205760369150506106bf565b8060ff1660f714156114365760379150506106bf565b8060ff1660f8141561144c5760389150506106bf565b8060ff1660f914156114625760399150506106bf565b8060ff1660fa14156114785760619150506106bf565b8060ff1660fb141561148e5760629150506106bf565b8060ff1660fc14156114a45760639150506106bf565b8060ff1660fd14156114ba5760649150506106bf565b8060ff1660fe14156114d05760659150506106bf565b8060ff1660ff14156114e65760669150506106bf565b5091905056fe2e20417474656d7074656420746f20696e646578206174206f666673657420307854797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a264697066735822122038f5c566677b31d505f562ba8e1c073f1511c6d0603807467390c57f6b3d7f9b64736f6c63430007060033";

export class TestMessage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestMessage> {
    return super.deploy(overrides || {}) as Promise<TestMessage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestMessage {
    return super.attach(address) as TestMessage;
  }
  connect(signer: Signer): TestMessage__factory {
    return super.connect(signer) as TestMessage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestMessageInterface {
    return new utils.Interface(_abi) as TestMessageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestMessage {
    return new Contract(address, _abi, signerOrProvider) as TestMessage;
  }
}
