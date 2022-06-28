import { Web3ProviderExtras } from "../web3.provider";
import { PollsContractEventType, PollsContractFunctions } from "./sw-contract-functions";
declare const Web3PollsProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<PollsContractEventType>> | undefined) => Promise<PollsContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3PollsProvider, PollsContractEventType, PollsContractFunctions };
