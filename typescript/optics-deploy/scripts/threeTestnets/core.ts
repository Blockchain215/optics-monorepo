import { deployNChains } from '../../src/core';
import * as alfajores from '../../config/testnets/alfajores';
import * as kovan from '../../config/testnets/kovan';
import * as rinkeby from '../../config/testnets/rinkeby';
import { CoreDeploy } from '../../src/core/CoreDeploy';
import { deployEnvironment } from '../../src/chain';

let environment = deployEnvironment();

let alfajoresConfig =
  environment === 'staging' ? alfajores.stagingConfig : alfajores.devConfig;
let kovanConfig =
  environment === 'staging' ? kovan.stagingConfig : kovan.devConfig;
let rinkebyConfig =
  environment === 'staging' ? rinkeby.stagingConfig : rinkeby.devConfig;

const alfajoresDeploy = new CoreDeploy(alfajores.chain, alfajoresConfig);
const kovanDeploy = new CoreDeploy(kovan.chain, kovanConfig);
const rinkebyDeploy = new CoreDeploy(rinkeby.chain, rinkebyConfig);

deployNChains([kovanDeploy, alfajoresDeploy, rinkebyDeploy]);
