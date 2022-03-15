import { writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import {
  DITOCommunityABI,
  SkillWalletABI,
  PartnersAgreementABI,
  PartnersRegistryABI,
  CommunityRegistryABI,
  GigsABI,
  OlympicsABI,
} from "./abis/index";
import { SWTypeFactory } from "./type-factory";

async function generate() {
  writeFileSync(
    `src/sw-contract-functions.ts`,
    await compile(
      SWTypeFactory([
        ...DITOCommunityABI,
        ...SkillWalletABI,
        ...PartnersAgreementABI,
        ...PartnersRegistryABI,
        ...CommunityRegistryABI,
        ...GigsABI,
        ...OlympicsABI,
      ]),
      "SWContractFunctions",
      {
        enableConstEnums: false,
      }
    )
  );
}

generate();
