import { OlympicsABI } from "../../abis/Olympics.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  OlympicsContractEventType,
  OlympicsContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3OlympicsProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<OlympicsContractEventType>>
) => {
  return Web3ContractProvider<
    OlympicsContractEventType,
    OlympicsContractFunctions
  >(
    addressOrName,
    OlympicsABI,
    extras as Web3ProviderExtras<OlympicsContractEventType>
  );
};

export {
  Web3OlympicsProvider,
  OlympicsContractEventType,
  OlympicsContractFunctions,
};
