import { ethers } from 'ethers';
import { core } from '@optics-xyz/ts-interface';
import { Contracts } from '../../contracts';
import { ReplicaInfo } from '../domains/domain';

type Address = string;

type InternalReplica = {
  domain: number;
  contract: core.Replica;
};

interface Core {
  id: number;
  home: Address;
  replicas: ReplicaInfo[];
}

export class CoreContracts extends Contracts {
  readonly domain;
  home: core.Home;
  replicas: Map<number, InternalReplica>;

  constructor(
    domain: number,
    home: Address,
    replicas: ReplicaInfo[],
    signer?: ethers.Signer,
  ) {
    super(domain, home, replicas, signer);
    this.domain = domain;
    this.home = new core.Home__factory(signer).attach(home);

    this.replicas = new Map();
    replicas.forEach((replica) => {
      this.replicas.set(replica.domain, {
        contract: new core.Replica__factory(signer).attach(replica.address),
        domain: replica.domain,
      });
    });
  }

  connect(providerOrSigner: ethers.providers.Provider | ethers.Signer): void {
    this.home = this.home.connect(providerOrSigner);

    Array.from(this.replicas.values()).forEach((replica: InternalReplica) => {
      replica.contract = replica.contract.connect(providerOrSigner);
    });
  }

  toObject(): Core {
    const replicas: ReplicaInfo[] = Array.from(this.replicas.values()).map(
      (replica) => {
        return {
          domain: replica.domain,
          address: replica.contract.address,
        };
      },
    );

    return {
      id: this.domain,
      home: this.home.address,
      replicas: replicas,
    };
  }

  static fromObject(data: Core, signer?: ethers.Signer): CoreContracts {
    const { id, home, replicas } = data;
    if (!id || !home || !replicas) {
      throw new Error('Missing key');
    }
    return new CoreContracts(id, home, replicas, signer);
  }
}
