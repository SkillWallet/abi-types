
import { TasksABI } from "../../abis/Tasks.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  TasksContractEventType,
  TasksContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3TasksProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<TasksContractEventType>>
) => {
  return Web3ContractProvider<TasksContractEventType, TasksContractFunctions>(
    addressOrName,
    TasksABI,
    extras as Web3ProviderExtras<TasksContractEventType>
  );
};

export { Web3TasksProvider, TasksContractEventType, TasksContractFunctions };
