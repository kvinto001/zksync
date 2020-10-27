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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface VerifierInterface extends ethers.utils.Interface {
  functions: {
    "initialize(bytes)": FunctionFragment;
    "isBlockSizeSupported(uint32)": FunctionFragment;
    "upgrade(bytes)": FunctionFragment;
    "verifyBlockProof(uint256[],bytes32,uint32)": FunctionFragment;
    "verifyExitProof(bytes32,uint32,address,uint16,uint128,uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlockSizeSupported",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "verifyBlockProof",
    values: [BigNumberish[], BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyExitProof",
    values: [
      BytesLike,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isBlockSizeSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyBlockProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyExitProof",
    data: BytesLike
  ): Result;

  events: {};
}

export class Verifier extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VerifierInterface;

  functions: {
    initialize(
      arg0: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isBlockSizeSupported(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isBlockSizeSupported(uint32)"(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    verifyBlockProof(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "verifyBlockProof(uint256[],bytes32,uint32)"(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    verifyExitProof(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "verifyExitProof(bytes32,uint32,address,uint16,uint128,uint256[])"(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  initialize(
    arg0: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(bytes)"(
    arg0: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isBlockSizeSupported(
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isBlockSizeSupported(uint32)"(
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  upgrade(
    upgradeParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgrade(bytes)"(
    upgradeParameters: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  verifyBlockProof(
    _proof: BigNumberish[],
    _commitment: BytesLike,
    _chunks: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyBlockProof(uint256[],bytes32,uint32)"(
    _proof: BigNumberish[],
    _commitment: BytesLike,
    _chunks: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyExitProof(
    _rootHash: BytesLike,
    _accountId: BigNumberish,
    _owner: string,
    _tokenId: BigNumberish,
    _amount: BigNumberish,
    _proof: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyExitProof(bytes32,uint32,address,uint16,uint128,uint256[])"(
    _rootHash: BytesLike,
    _accountId: BigNumberish,
    _owner: string,
    _tokenId: BigNumberish,
    _amount: BigNumberish,
    _proof: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    initialize(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    "initialize(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    isBlockSizeSupported(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isBlockSizeSupported(uint32)"(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyBlockProof(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyBlockProof(uint256[],bytes32,uint32)"(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyExitProof(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyExitProof(bytes32,uint32,address,uint16,uint128,uint256[])"(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    initialize(arg0: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "initialize(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isBlockSizeSupported(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isBlockSizeSupported(uint32)"(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    verifyBlockProof(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyBlockProof(uint256[],bytes32,uint32)"(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyExitProof(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyExitProof(bytes32,uint32,address,uint16,uint128,uint256[])"(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      arg0: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(bytes)"(
      arg0: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isBlockSizeSupported(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBlockSizeSupported(uint32)"(
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgrade(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgrade(bytes)"(
      upgradeParameters: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    verifyBlockProof(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyBlockProof(uint256[],bytes32,uint32)"(
      _proof: BigNumberish[],
      _commitment: BytesLike,
      _chunks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyExitProof(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyExitProof(bytes32,uint32,address,uint16,uint128,uint256[])"(
      _rootHash: BytesLike,
      _accountId: BigNumberish,
      _owner: string,
      _tokenId: BigNumberish,
      _amount: BigNumberish,
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
