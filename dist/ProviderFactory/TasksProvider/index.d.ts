import { Web3ProviderExtras } from "../web3.provider";
import { TasksContractEventType, TasksContractFunctions } from "./sw-contract-functions";
declare const Web3TasksProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<TasksContractEventType>> | undefined) => Promise<TasksContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3TasksProvider, TasksContractEventType, TasksContractFunctions };
