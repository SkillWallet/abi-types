
import { CommunityCallABI } from "../../abis/CommunityCall.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  CommunityCallContractEventType,
  CommunityCallContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3CommunityCallProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<CommunityCallContractEventType>>
) => {
  return Web3ContractProvider<CommunityCallContractEventType, CommunityCallContractFunctions>(
    addressOrName,
    CommunityCallABI,
    extras as Web3ProviderExtras<CommunityCallContractEventType>
  );
};

export { Web3CommunityCallProvider, CommunityCallContractEventType, CommunityCallContractFunctions };
