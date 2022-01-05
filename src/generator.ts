import { writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import {
  DitoCommunityAbi,
  SkillWalletAbi,
  PartnersAgreementABI,
  PartnersRegistryABI,
} from "./abis/index";
import { SWTypeFactory } from "./type-factory";

async function generate() {
  // writeFileSync('sw-dito-contract-functions.d.ts', await compile(SwTypeFactory(communityAbi, 'SWDito'), 'SWDitoContractFunctions'));
  writeFileSync(
    `src/sw-contract-functions.ts`,
    await compile(
      SWTypeFactory([
        ...DitoCommunityAbi,
        ...SkillWalletAbi,
        ...PartnersAgreementABI,
        ...PartnersRegistryABI,
      ]),
      "SWContractFunctions",
      {
        enableConstEnums: false,
      }
    )
  );
}

generate();
