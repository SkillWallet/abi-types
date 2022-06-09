import { CommunityExtensionABI } from "../../abis/CommunityExtension.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  CommunityExtensionContractEventType,
  CommunityExtensionContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3CommunityExtensionProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<CommunityExtensionContractEventType>>
) => {
  return Web3ContractProvider<
    CommunityExtensionContractEventType,
    CommunityExtensionContractFunctions
  >(
    addressOrName,
    CommunityExtensionABI,
    extras as Web3ProviderExtras<CommunityExtensionContractEventType>
  );
};

export {
  Web3CommunityExtensionProvider,
  CommunityExtensionContractEventType,
  CommunityExtensionContractFunctions,
};
