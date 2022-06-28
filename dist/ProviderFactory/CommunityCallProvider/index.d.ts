import { Web3ProviderExtras } from "../web3.provider";
import { CommunityCallContractEventType, CommunityCallContractFunctions } from "./sw-contract-functions";
declare const Web3CommunityCallProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<CommunityCallContractEventType>> | undefined) => Promise<CommunityCallContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3CommunityCallProvider, CommunityCallContractEventType, CommunityCallContractFunctions };
