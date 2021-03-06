import { BigNumber, BytesLike, Signer } from 'ethers';
import {
  UpgradeBeaconController,
  UpgradeBeaconController__factory,
} from '@optics-xyz/ts-interface/dist/optics-core';
import {
  BridgeRouter,
  BridgeToken,
  BridgeToken__factory,
  MockCore,
  MockCore__factory,
  MockWeth,
  MockWeth__factory,
} from '@optics-xyz/ts-interface/dist/optics-xapps';
import { ContractVerificationInput } from '../deploy';
import { BridgeContracts } from './BridgeContracts';
import * as process from '.';
import { Chain } from '../chain';

import { TokenIdentifier } from '@optics-xyz/multi-provider/dist/optics/tokens';
import { CoreConfig } from '../core/CoreDeploy';

function toBytes32(address: string): string {
  return '0x' + '00'.repeat(12) + address.slice(2);
}

export async function getTestChain(
  ethers: any,
  domain: number,
  updater: string,
  watchers: string[],
  recoveryManager?: string,
): Promise<[Chain, CoreConfig]> {
  const [, , , , , , , deployer] = await ethers.getSigners();
  return [
    {
      name: 'hh',
      provider: ethers.provider,
      deployer,
      gasPrice: BigNumber.from(20000000000),
      gasLimit: BigNumber.from(6_000_000),
      confirmations: 0,
      domain,
      config: {
        domain,
        name: 'hh',
        rpc: 'NA',
      },
    },
    {
      environment: 'dev',
      recoveryTimelock: 1,
      recoveryManager: recoveryManager || ethers.constants.AddressZero,
      updater,
      optimisticSeconds: 3,
      watchers,
      processGas: 850_000,
      reserveGas: 15_000,
    },
  ];
}

// A BridgeRouter deployed with a mock Core suite.
//
// Intended usage: instatiate in hardhat tests with `deploy`. Interact with
// the Bridge contracts as normal. Dispatch messages to the bridge using
// router's `handle` function. The test signer is pre-authorized. Messages the
// router dispatches will be logged in the `Enqueue` event on the `MockCore`
// contract.
export default class TestBridgeDeploy {
  signer: Signer;
  ubc: UpgradeBeaconController;
  mockCore: MockCore;
  mockWeth: MockWeth;
  contracts: BridgeContracts;
  verificationInput: ContractVerificationInput[];
  localDomain: number;
  chain: Chain;
  test: boolean = true;

  constructor(
    signer: Signer,
    ubc: UpgradeBeaconController,
    mockCore: MockCore,
    mockWeth: MockWeth,
    contracts: BridgeContracts,
    domain: number,
    chain: Chain,
    callerKnowsWhatTheyAreDoing: boolean = false,
  ) {
    if (!callerKnowsWhatTheyAreDoing) {
      throw new Error("Don't instantiate via new.");
    }
    this.signer = signer;
    this.ubc = ubc;
    this.mockCore = mockCore;
    this.mockWeth = mockWeth;
    this.contracts = contracts;
    this.verificationInput = [];
    this.localDomain = domain;
    this.config.weth = mockWeth.address;
    this.chain = chain;
  }

  static async deploy(ethers: any, signer: Signer): Promise<TestBridgeDeploy> {
    const mockCore = await new MockCore__factory(signer).deploy();
    const mockWeth = await new MockWeth__factory(signer).deploy();
    const ubc = await new UpgradeBeaconController__factory(signer).deploy();
    const contracts = new BridgeContracts();
    const domain = await mockCore.localDomain();
    const [chain] = await getTestChain(ethers, domain, '', []);
    chain.deployer = signer;

    let deploy = new TestBridgeDeploy(
      signer,
      ubc,
      mockCore,
      mockWeth,
      contracts,
      domain,
      chain,
      true,
    );

    await process.deployTokenUpgradeBeacon(deploy);
    await process.deployBridgeRouter(deploy);
    await process.deployEthHelper(deploy);

    // enroll the signer as a remote BridgeRouter
    // so the test BridgeRouter will accept messages
    // directly from the signer
    await contracts.bridgeRouter?.proxy.enrollRemoteRouter(
      1,
      toBytes32(await signer.getAddress()),
    );

    return deploy;
  }

  get ubcAddress(): string {
    return this.ubc.address;
  }

  get deployer(): Signer {
    return this.chain.deployer;
  }

  get coreContractAddresses() {
    return {
      xAppConnectionManager: this.mockCore.address,
      home: { proxy: this.mockCore.address },
      governance: { proxy: this.mockCore.address },
    };
  }

  get coreDeployPath() {
    return '';
  }
  get overrides() {
    return {};
  }
  get config() {
    return { weth: this.mockWeth.address };
  }

  get bridgeRouter(): BridgeRouter | undefined {
    return this.contracts.bridgeRouter?.proxy;
  }

  get remoteDomain(): number {
    return 1;
  }

  get testToken(): string {
    return `0x${'11'.repeat(32)}`;
  }

  get testTokenId(): TokenIdentifier {
    return {
      domain: this.remoteDomain,
      id: this.testToken,
    };
  }

  async getTestRepresentation(): Promise<BridgeToken | undefined> {
    return await this.getRepresentation(this.remoteDomain, this.testToken);
  }

  async getRepresentation(
    domain: number,
    canonicalTokenAddress: BytesLike,
  ): Promise<BridgeToken | undefined> {
    const reprAddr = await this.bridgeRouter![
      'getLocalAddress(uint32,bytes32)'
    ](domain, canonicalTokenAddress);

    if (domain === 0) {
      return undefined;
    }

    return BridgeToken__factory.connect(reprAddr, this.signer);
  }
}
