
import { InteractionsABI } from "../../abis/Interactions.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  InteractionsContractEventType,
  InteractionsContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3InteractionsProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<InteractionsContractEventType>>
) => {
  return Web3ContractProvider<InteractionsContractEventType, InteractionsContractFunctions>(
    addressOrName,
    InteractionsABI,
    extras as Web3ProviderExtras<InteractionsContractEventType>
  );
};

export { Web3InteractionsProvider, InteractionsContractEventType, InteractionsContractFunctions };
