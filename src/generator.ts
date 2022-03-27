import { writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import { JsonFragment } from "./abis.model";
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
} from "./abis/index";
import { Web3SkillWalletProvider } from "./ProviderFactory";

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
];

const generate = async () => {
  for (let i = 0; i < all.length; i += 1) {
    const { path, abi, preffix } = all[i];
    await generateTypes(path, abi, preffix);
  }
};

generate();