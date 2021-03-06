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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TokenRegistryInterface extends ethers.utils.Interface {
  functions: {
    "canonicalToRepresentation(bytes32)": FunctionFragment;
    "getCanonicalAddress(address)": FunctionFragment;
    "getLocalAddress(uint32,bytes32)": FunctionFragment;
    "representationToCanonical(address)": FunctionFragment;
    "tokenBeacon()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "canonicalToRepresentation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCanonicalAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLocalAddress",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "representationToCanonical",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBeacon",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "canonicalToRepresentation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCanonicalAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLocalAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "representationToCanonical",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBeacon",
    data: BytesLike
  ): Result;

  events: {
    "TokenDeployed(uint32,bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokenDeployed"): EventFragment;
}

export class TokenRegistry extends BaseContract {
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

  interface: TokenRegistryInterface;

  functions: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCanonicalAddress(
      _local: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { _domain: number; _id: string }>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { _token: string }>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _token: string }>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { domain: number; id: string }>;

    tokenBeacon(overrides?: CallOverrides): Promise<[string]>;
  };

  canonicalToRepresentation(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getCanonicalAddress(
    _local: string,
    overrides?: CallOverrides
  ): Promise<[number, string] & { _domain: number; _id: string }>;

  "getLocalAddress(uint32,bytes32)"(
    _domain: BigNumberish,
    _id: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getLocalAddress(uint32,address)"(
    _domain: BigNumberish,
    _id: string,
    overrides?: CallOverrides
  ): Promise<string>;

  representationToCanonical(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[number, string] & { domain: number; id: string }>;

  tokenBeacon(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getCanonicalAddress(
      _local: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { _domain: number; _id: string }>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<string>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number, string] & { domain: number; id: string }>;

    tokenBeacon(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    TokenDeployed(
      domain?: BigNumberish | null,
      id?: BytesLike | null,
      representation?: string | null
    ): TypedEventFilter<
      [number, string, string],
      { domain: number; id: string; representation: string }
    >;
  };

  estimateGas: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCanonicalAddress(
      _local: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenBeacon(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    canonicalToRepresentation(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCanonicalAddress(
      _local: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLocalAddress(uint32,bytes32)"(
      _domain: BigNumberish,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLocalAddress(uint32,address)"(
      _domain: BigNumberish,
      _id: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    representationToCanonical(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenBeacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
