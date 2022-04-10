import { readFile, readFileSync, unlinkSync, writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import { JsonFragment } from "./abis.model";
const { dedent } = require("tslint/lib/utils");
import {
  DITOCommunityABI,
  SkillWalletABI,
  CheckpointsABI,
  CompetitionsABI,
  PartnersAgreementABI,
  PartnersRegistryABI,
  CommunityRegistryABI,
  GigsABI,
  OlympicsABI,
  ActivitiesABI,
  SkillWalletCommunityABI,
} from "./abis/index";

import { SWTypeFactory } from "./type-factory";

export async function generateTypes(
  path: string,
  abi: JsonFragment[],
  preffix: string
) {
  const name = `${preffix}ContractFunctions`;
  writeFileSync(
    path,
    await compile(SWTypeFactory(abi, preffix), name, {
      enableConstEnums: false,
    })
  );
}

const all = [
  {
    path: `src/ProviderFactory/CheckpointsProvider/sw-contract-functions.ts`,
    abi: CheckpointsABI,
    preffix: "Checkpoints",
  },
  {
    path: `src/ProviderFactory/CommunityRegistryProvider/sw-contract-functions.ts`,
    abi: SkillWalletABI,
    preffix: "CommunityRegistry",
  },
  {
    path: `src/ProviderFactory/CompetitionsProvider/sw-contract-functions.ts`,
    abi: CompetitionsABI,
    preffix: "Competitions",
  },
  {
    path: `src/ProviderFactory/DITOCommunityProvider/sw-contract-functions.ts`,
    abi: DITOCommunityABI,
    preffix: "DITOCommunity",
  },
  {
    path: `src/ProviderFactory/GigsProvider/sw-contract-functions.ts`,
    abi: GigsABI,
    preffix: "Gigs",
  },
  {
    path: `src/ProviderFactory/OlympicsProvider/sw-contract-functions.ts`,
    abi: OlympicsABI,
    preffix: "Olympics",
  },
  {
    path: `src/ProviderFactory/PartnersAgreementProvider/sw-contract-functions.ts`,
    abi: PartnersAgreementABI,
    preffix: "PartnersAgreement",
  },
  {
    path: `src/ProviderFactory/CommunityRegistryProvider/sw-contract-functions.ts`,
    abi: CommunityRegistryABI,
    preffix: "CommunityRegistry",
  },
  {
    path: `src/ProviderFactory/PartnersRegistryProvider/sw-contract-functions.ts`,
    abi: PartnersRegistryABI,
    preffix: "PartnersRegistry",
  },
  {
    path: `src/ProviderFactory/SkillWalletProvider/sw-contract-functions.ts`,
    abi: SkillWalletABI,
    preffix: "SkillWallet",
  },
  {
    path: `src/ProviderFactory/SkillWalletCommunityProvider/sw-contract-functions.ts`,
    abi: SkillWalletCommunityABI,
    preffix: "SkillWalletCommunity",
  },
  {
    path: `src/ProviderFactory/ActivitiesProvider/sw-contract-functions.ts`,
    abi: ActivitiesABI,
    preffix: "Activities",
  },
];

const generate = async () => {
  for (let i = 0; i < all.length; i += 1) {
    const { path, abi, preffix } = all[i];
    try {
      unlinkSync(path);
    } catch (err) {
      console.error(err);
    }
    await generateTypes(path, abi, preffix);
    try {
      await updateTsFile(path);
    } catch (err) {
      console.error(err);
    }
  }
};

generate();

const updateTsFile = async (dirPath) => {
  try {
    const fileData = readFileSync(dirPath);
    const fileAsStr = fileData.toString("utf8");

    writeFileSync(
      dirPath,
      dedent`import { CallOverrides } from "ethers";
      ${fileAsStr}`,
      { encoding: "utf8" }
    );
  } catch (err) {
    console.log(err);
    // handle error here
  }
};
