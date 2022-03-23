import { Web3ProviderExtras } from "../web3.provider";
import { CommunityRegistryContractEventType, CommunityRegistryContractFunctions } from "./sw-contract-functions";
declare const Web3CommunityRegistryProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<CommunityRegistryContractEventType>> | undefined) => Promise<CommunityRegistryContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3CommunityRegistryProvider, CommunityRegistryContractEventType, CommunityRegistryContractFunctions, };
