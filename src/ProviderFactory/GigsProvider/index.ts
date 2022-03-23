import { GigsABI } from "../../abis/Gigs.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  GigsContractEventType,
  GigsContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3GigsProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<GigsContractEventType>>
) => {
  return Web3ContractProvider<GigsContractEventType, GigsContractFunctions>(
    addressOrName,
    GigsABI,
    extras as Web3ProviderExtras<GigsContractEventType>
  );
};

export { Web3GigsProvider, GigsContractEventType, GigsContractFunctions };
