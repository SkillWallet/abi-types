import { Web3ProviderExtras } from "../web3.provider";
import { InteractionsContractEventType, InteractionsContractFunctions } from "./sw-contract-functions";
declare const Web3InteractionsProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<InteractionsContractEventType>> | undefined) => Promise<InteractionsContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3InteractionsProvider, InteractionsContractEventType, InteractionsContractFunctions };
