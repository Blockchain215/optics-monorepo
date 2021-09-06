/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ReplicaInterface extends ethers.utils.Interface {
  functions: {
    "PROCESS_GAS()": FunctionFragment;
    "RESERVE_GAS()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "acceptableRoot(bytes32)": FunctionFragment;
    "committedRoot()": FunctionFragment;
    "confirmAt(bytes32)": FunctionFragment;
    "doubleUpdate(bytes32,bytes32[2],bytes,bytes)": FunctionFragment;
    "homeDomainHash()": FunctionFragment;
    "initialize(uint32,address,bytes32,uint256)": FunctionFragment;
    "localDomain()": FunctionFragment;
    "messages(bytes32)": FunctionFragment;
    "optimisticSeconds()": FunctionFragment;
    "process(bytes)": FunctionFragment;
    "prove(bytes32,bytes32[32],uint256)": FunctionFragment;
    "proveAndProcess(bytes,bytes32[32],uint256)": FunctionFragment;
    "remoteDomain()": FunctionFragment;
    "state()": FunctionFragment;
    "update(bytes32,bytes32,bytes)": FunctionFragment;
    "updater()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "PROCESS_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RESERVE_GAS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptableRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "committedRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "confirmAt",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "doubleUpdate",
    values: [BytesLike, [BytesLike, BytesLike], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "homeDomainHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "messages", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "optimisticSeconds",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "process", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "prove",
    values: [
      BytesLike,
      [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proveAndProcess",
    values: [
      BytesLike,
      [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "remoteDomain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "updater", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "PROCESS_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RESERVE_GAS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptableRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "committedRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "confirmAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doubleUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "homeDomainHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messages", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "optimisticSeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proveAndProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remoteDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;

  events: {
    "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)": EventFragment;
    "ProcessError(bytes32,uint32,address,bytes)": EventFragment;
    "ProcessSuccess(bytes32)": EventFragment;
    "Update(uint32,bytes32,bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DoubleUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProcessError"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProcessSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Update"): EventFragment;
}

export class Replica extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ReplicaInterface;

  functions: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    VERSION(overrides?: CallOverrides): Promise<[number]>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    committedRoot(overrides?: CallOverrides): Promise<[string]>;

    confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _committedRoot: BytesLike,
      _optimisticSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    messages(arg0: BytesLike, overrides?: CallOverrides): Promise<[number]>;

    optimisticSeconds(overrides?: CallOverrides): Promise<[BigNumber]>;

    process(
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remoteDomain(overrides?: CallOverrides): Promise<[number]>;

    state(overrides?: CallOverrides): Promise<[number]>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updater(overrides?: CallOverrides): Promise<[string]>;
  };

  PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

  VERSION(overrides?: CallOverrides): Promise<number>;

  acceptableRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  committedRoot(overrides?: CallOverrides): Promise<string>;

  confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  doubleUpdate(
    _oldRoot: BytesLike,
    _newRoot: [BytesLike, BytesLike],
    _signature: BytesLike,
    _signature2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  homeDomainHash(overrides?: CallOverrides): Promise<string>;

  initialize(
    _remoteDomain: BigNumberish,
    _updater: string,
    _committedRoot: BytesLike,
    _optimisticSeconds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  messages(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

  optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

  process(
    _message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  prove(
    _leaf: BytesLike,
    _proof: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ],
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proveAndProcess(
    _message: BytesLike,
    _proof: [
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ],
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remoteDomain(overrides?: CallOverrides): Promise<number>;

  state(overrides?: CallOverrides): Promise<number>;

  update(
    _oldRoot: BytesLike,
    _newRoot: BytesLike,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updater(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<number>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    committedRoot(overrides?: CallOverrides): Promise<string>;

    confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    homeDomainHash(overrides?: CallOverrides): Promise<string>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _committedRoot: BytesLike,
      _optimisticSeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    messages(arg0: BytesLike, overrides?: CallOverrides): Promise<number>;

    optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    process(_message: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    remoteDomain(overrides?: CallOverrides): Promise<number>;

    state(overrides?: CallOverrides): Promise<number>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updater(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    DoubleUpdate(
      oldRoot?: null,
      newRoot?: null,
      signature?: null,
      signature2?: null
    ): TypedEventFilter<
      [string, [string, string], string, string],
      {
        oldRoot: string;
        newRoot: [string, string];
        signature: string;
        signature2: string;
      }
    >;

    ProcessError(
      messageHash?: BytesLike | null,
      nonce?: BigNumberish | null,
      recipient?: string | null,
      returnData?: null
    ): TypedEventFilter<
      [string, number, string, string],
      {
        messageHash: string;
        nonce: number;
        recipient: string;
        returnData: string;
      }
    >;

    ProcessSuccess(
      messageHash?: BytesLike | null
    ): TypedEventFilter<[string], { messageHash: string }>;

    Update(
      homeDomain?: BigNumberish | null,
      oldRoot?: BytesLike | null,
      newRoot?: BytesLike | null,
      signature?: null
    ): TypedEventFilter<
      [number, string, string, string],
      {
        homeDomain: number;
        oldRoot: string;
        newRoot: string;
        signature: string;
      }
    >;
  };

  estimateGas: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    committedRoot(overrides?: CallOverrides): Promise<BigNumber>;

    confirmAt(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _committedRoot: BytesLike,
      _optimisticSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    messages(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    optimisticSeconds(overrides?: CallOverrides): Promise<BigNumber>;

    process(
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remoteDomain(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updater(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PROCESS_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RESERVE_GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptableRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    committedRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    confirmAt(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _remoteDomain: BigNumberish,
      _updater: string,
      _committedRoot: BytesLike,
      _optimisticSeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    optimisticSeconds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    process(
      _message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    prove(
      _leaf: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proveAndProcess(
      _message: BytesLike,
      _proof: [
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BytesLike
      ],
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remoteDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
