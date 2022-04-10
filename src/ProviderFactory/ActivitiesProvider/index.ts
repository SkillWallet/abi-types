import { ActivitiesABI } from "../../abis/Activities.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  ActivitiesContractEventType,
  ActivitiesContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3ActivitiesProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<ActivitiesContractEventType>>
) => {
  return Web3ContractProvider<
    ActivitiesContractEventType,
    ActivitiesContractFunctions
  >(
    addressOrName,
    ActivitiesABI,
    extras as Web3ProviderExtras<ActivitiesContractEventType>
  );
};

export {
  Web3ActivitiesProvider,
  ActivitiesContractEventType,
  ActivitiesContractFunctions,
};
