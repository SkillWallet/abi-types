import { Web3ProviderExtras } from "../web3.provider";
import { CommunityExtensionContractEventType, CommunityExtensionContractFunctions } from "./sw-contract-functions";
declare const Web3CommunityExtensionProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<CommunityExtensionContractEventType>> | undefined) => Promise<CommunityExtensionContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3CommunityExtensionProvider, CommunityExtensionContractEventType, CommunityExtensionContractFunctions, };
