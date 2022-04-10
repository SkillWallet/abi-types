import { SkillWalletCommunityABI } from "../../abis/SkillWalletCommunity.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  SkillWalletCommunityContractEventType,
  SkillWalletCommunityContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3SkillWalletCommunityProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<SkillWalletCommunityContractEventType>>
) => {
  return Web3ContractProvider<
    SkillWalletCommunityContractEventType,
    SkillWalletCommunityContractFunctions
  >(
    addressOrName,
    SkillWalletCommunityABI,
    extras as Web3ProviderExtras<SkillWalletCommunityContractEventType>
  );
};

export {
  Web3SkillWalletCommunityProvider,
  SkillWalletCommunityContractEventType,
  SkillWalletCommunityContractFunctions,
};
