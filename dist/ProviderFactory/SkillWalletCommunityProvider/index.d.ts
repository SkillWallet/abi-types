import { Web3ProviderExtras } from "../web3.provider";
import { SkillWalletCommunityContractEventType, SkillWalletCommunityContractFunctions } from "./sw-contract-functions";
declare const Web3SkillWalletCommunityProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<SkillWalletCommunityContractEventType>> | undefined) => Promise<SkillWalletCommunityContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3SkillWalletCommunityProvider, SkillWalletCommunityContractEventType, SkillWalletCommunityContractFunctions, };
