import { Web3ProviderExtras } from "../web3.provider";
import { OlympicsContractEventType, OlympicsContractFunctions } from "./sw-contract-functions";
declare const Web3OlympicsProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<OlympicsContractEventType>> | undefined) => Promise<OlympicsContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3OlympicsProvider, OlympicsContractEventType, OlympicsContractFunctions, };
