import { Web3ProviderExtras } from "../web3.provider";
import { SkillWalletContractEventType, SkillWalletContractFunctions } from "./sw-contract-functions";
declare const Web3SkillWalletProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<SkillWalletContractEventType>> | undefined) => Promise<SkillWalletContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3SkillWalletProvider, SkillWalletContractEventType, SkillWalletContractFunctions, };
