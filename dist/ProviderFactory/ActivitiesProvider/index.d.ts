import { Web3ProviderExtras } from "../web3.provider";
import { ActivitiesContractEventType, ActivitiesContractFunctions } from "./sw-contract-functions";
declare const Web3ActivitiesProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<ActivitiesContractEventType>> | undefined) => Promise<ActivitiesContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3ActivitiesProvider, ActivitiesContractEventType, ActivitiesContractFunctions, };
