import { CompetitionsABI } from "../../abis/Competitions.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  CompetitionsContractEventType,
  CompetitionsContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3CompetitionsProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<CompetitionsContractEventType>>
) => {
  return Web3ContractProvider<
    CompetitionsContractEventType,
    CompetitionsContractFunctions
  >(
    addressOrName,
    CompetitionsABI,
    extras as Web3ProviderExtras<CompetitionsContractEventType>
  );
};

export {
  Web3CompetitionsProvider,
  CompetitionsContractEventType,
  CompetitionsContractFunctions,
};
