import { PartnersRegistryABI } from "../../abis/PartnersRegistry.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  PartnersRegistryContractEventType,
  PartnersRegistryContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3PartnersRegistryProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<PartnersRegistryContractEventType>>
) => {
  return Web3ContractProvider<
    PartnersRegistryContractEventType,
    PartnersRegistryContractFunctions
  >(
    addressOrName,
    PartnersRegistryABI,
    extras as Web3ProviderExtras<PartnersRegistryContractEventType>
  );
};

export {
  Web3PartnersRegistryProvider,
  PartnersRegistryContractEventType,
  PartnersRegistryContractFunctions,
};
