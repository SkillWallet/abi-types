import { CommunityRegistryABI } from "../../abis/CommunityRegistry.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  CommunityRegistryContractEventType,
  CommunityRegistryContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3CommunityRegistryProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<CommunityRegistryContractEventType>>
) => {
  return Web3ContractProvider<
    CommunityRegistryContractEventType,
    CommunityRegistryContractFunctions
  >(
    addressOrName,
    CommunityRegistryABI,
    extras as Web3ProviderExtras<CommunityRegistryContractEventType>
  );
};

export {
  Web3CommunityRegistryProvider,
  CommunityRegistryContractEventType,
  CommunityRegistryContractFunctions,
};
