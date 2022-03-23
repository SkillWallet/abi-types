import { Web3ProviderExtras } from "../web3.provider";
import { CompetitionsContractEventType, CompetitionsContractFunctions } from "./sw-contract-functions";
declare const Web3CompetitionsProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<CompetitionsContractEventType>> | undefined) => Promise<CompetitionsContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3CompetitionsProvider, CompetitionsContractEventType, CompetitionsContractFunctions, };
