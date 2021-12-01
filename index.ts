import { writeFileSync } from 'fs';
import { compile } from 'json-schema-to-typescript';
import { communityAbi, skillWalletAbi } from './abis';
import { SwTypeFactory } from './type-factory';

async function generate() {
  // writeFileSync('sw-dito-contract-functions.d.ts', await compile(SwTypeFactory(communityAbi, 'SWDito'), 'SWDitoContractFunctions'));
  writeFileSync('sw-contract-functions.d.ts', await compile(SwTypeFactory([...skillWalletAbi, ...communityAbi], 'SW'), 'SWContractFunctions'));
}

generate();
