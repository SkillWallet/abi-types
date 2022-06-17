import { AutIDABI } from "../../abis/AutID.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  AutIDContractEventType,
  AutIDContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3AutIDProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<AutIDContractEventType>>
) => {
  return Web3ContractProvider<AutIDContractEventType, AutIDContractFunctions>(
    addressOrName,
    AutIDABI,
    extras as Web3ProviderExtras<AutIDContractEventType>
  );
};

export { Web3AutIDProvider, AutIDContractEventType, AutIDContractFunctions };
