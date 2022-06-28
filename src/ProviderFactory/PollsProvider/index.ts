
import { PollsABI } from "../../abis/Polls.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  PollsContractEventType,
  PollsContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3PollsProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<PollsContractEventType>>
) => {
  return Web3ContractProvider<PollsContractEventType, PollsContractFunctions>(
    addressOrName,
    PollsABI,
    extras as Web3ProviderExtras<PollsContractEventType>
  );
};

export { Web3PollsProvider, PollsContractEventType, PollsContractFunctions };
