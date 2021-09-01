/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { QueueManager, QueueManagerInterface } from "../QueueManager";

const _abi = [
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610210806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632bef289214610046578063ab91c7b014610077578063f6d1610214610091575b600080fd5b6100636004803603602081101561005c57600080fd5b5035610099565b604080519115158252519081900360200190f35b61007f6100ac565b60408051918252519081900360200190f35b61007f6100bd565b60006100a66001836100c9565b92915050565b60006100b86001610143565b905090565b60006100b86001610183565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1681116101395760008181526001850160205260409020548314156101315760019150506100a6565b6001016100e1565b5060009392505050565b80546000906fffffffffffffffffffffffffffffffff70010000000000000000000000000000000082048116911661017b82826101c0565b949350505050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b60019103016fffffffffffffffffffffffffffffffff169056fea2646970667358221220044b7b7eca382e7d7fcf517c45db96593bb4c366e105e8d85614e211a241c8f864736f6c63430007060033";

export class QueueManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<QueueManager> {
    return super.deploy(overrides || {}) as Promise<QueueManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): QueueManager {
    return super.attach(address) as QueueManager;
  }
  connect(signer: Signer): QueueManager__factory {
    return super.connect(signer) as QueueManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QueueManagerInterface {
    return new utils.Interface(_abi) as QueueManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QueueManager {
    return new Contract(address, _abi, signerOrProvider) as QueueManager;
  }
}
