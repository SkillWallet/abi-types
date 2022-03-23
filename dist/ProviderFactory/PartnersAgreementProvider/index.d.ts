import { Web3ProviderExtras } from "../web3.provider";
import { PartnersAgreementContractEventType, PartnersAgreementContractFunctions } from "./sw-contract-functions";
declare const Web3PartnersAgreementProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<PartnersAgreementContractEventType>> | undefined) => Promise<PartnersAgreementContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3PartnersAgreementProvider, PartnersAgreementContractEventType, PartnersAgreementContractFunctions, };
