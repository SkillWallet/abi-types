import { PartnersAgreementABI } from "../../abis/PartnersAgreement.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  PartnersAgreementContractEventType,
  PartnersAgreementContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3PartnersAgreementProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<PartnersAgreementContractEventType>>
) => {
  return Web3ContractProvider<
    PartnersAgreementContractEventType,
    PartnersAgreementContractFunctions
  >(
    addressOrName,
    PartnersAgreementABI,
    extras as Web3ProviderExtras<PartnersAgreementContractEventType>
  );
};

export {
  Web3PartnersAgreementProvider,
  PartnersAgreementContractEventType,
  PartnersAgreementContractFunctions,
};
