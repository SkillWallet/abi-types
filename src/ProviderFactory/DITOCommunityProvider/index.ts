import { DITOCommunityABI } from "../../abis/DITOCommunity.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  DITOCommunityContractEventType,
  DITOCommunityContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3DITOCommunityProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<DITOCommunityContractEventType>>
) => {
  return Web3ContractProvider<
    DITOCommunityContractEventType,
    DITOCommunityContractFunctions
  >(
    addressOrName,
    DITOCommunityABI,
    extras as Web3ProviderExtras<DITOCommunityContractEventType>
  );
};

export {
  Web3DITOCommunityProvider,
  DITOCommunityContractEventType,
  DITOCommunityContractFunctions,
};
