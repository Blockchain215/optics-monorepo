/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpdaterManager,
  UpdaterManagerInterface,
} from "../UpdaterManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "home",
        type: "address",
      },
    ],
    name: "NewHome",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterAddress",
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
        internalType: "address payable",
        name: "_reporter",
        type: "address",
      },
    ],
    name: "slashUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
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
  "0x608060405260405161091d38038061091d8339818101604052602081101561002657600080fd5b505160006100326100a1565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100a5565b3390565b610869806100b46000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100f25780639d54f41914610123578063df034cd014610156578063f2fde38b1461015e5761007d565b80635b3c2cbf146100825780636ef0f37f146100b7578063715018a6146100ea575b600080fd5b6100b56004803603602081101561009857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610191565b005b6100b5600480360360208110156100cd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661021a565b6100b56103af565b6100fa6104c6565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b56004803603602081101561013957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104e2565b6100fa610646565b6100b56004803603602081101561017457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610662565b60025473ffffffffffffffffffffffffffffffffffffffff16331461021757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f21686f6d65000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b50565b610222610803565b73ffffffffffffffffffffffffffffffffffffffff166102406104c6565b73ffffffffffffffffffffffffffffffffffffffff16146102c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6102cb81610807565b61033657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f21636f6e747261637420686f6d65000000000000000000000000000000000000604482015290519081900360640190fd5b6002805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fa6c230e5615262e310dcb42eaf014e813e5d8580abf5b00d2186ca8e9833de219181900360200190a150565b6103b7610803565b73ffffffffffffffffffffffffffffffffffffffff166103d56104c6565b73ffffffffffffffffffffffffffffffffffffffff161461045757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6104ea610803565b73ffffffffffffffffffffffffffffffffffffffff166105086104c6565b73ffffffffffffffffffffffffffffffffffffffff161461058a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217909255600254604080517f9d54f419000000000000000000000000000000000000000000000000000000008152600481019390935251921691639d54f4199160248082019260009290919082900301818387803b15801561062b57600080fd5b505af115801561063f573d6000803e3d6000fd5b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1690565b61066a610803565b73ffffffffffffffffffffffffffffffffffffffff166106886104c6565b73ffffffffffffffffffffffffffffffffffffffff161461070a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061080e6026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b3b15159056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a264697066735822122031bb9536b0aa1adba497f56f445a8059613ce40c33e40c724020b3d49e3dfaa764736f6c63430007060033";

export class UpdaterManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _updaterAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpdaterManager> {
    return super.deploy(
      _updaterAddress,
      overrides || {}
    ) as Promise<UpdaterManager>;
  }
  getDeployTransaction(
    _updaterAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_updaterAddress, overrides || {});
  }
  attach(address: string): UpdaterManager {
    return super.attach(address) as UpdaterManager;
  }
  connect(signer: Signer): UpdaterManager__factory {
    return super.connect(signer) as UpdaterManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpdaterManagerInterface {
    return new utils.Interface(_abi) as UpdaterManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpdaterManager {
    return new Contract(address, _abi, signerOrProvider) as UpdaterManager;
  }
}
