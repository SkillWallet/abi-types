import { writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import { communityAbi, skillWalletAbi } from "./abis";
import { SWTypeFactory } from "./type-factory";

async function generate() {
  // writeFileSync('sw-dito-contract-functions.d.ts', await compile(SwTypeFactory(communityAbi, 'SWDito'), 'SWDitoContractFunctions'));
  writeFileSync(
    `src/sw-contract-functions.ts`,
    await compile(
      SWTypeFactory([...skillWalletAbi, ...communityAbi]),
      "SWContractFunctions"
    )
  );
}

generate();
