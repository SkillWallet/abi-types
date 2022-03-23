import { Web3ProviderExtras } from "../web3.provider";
import { PartnersRegistryContractEventType, PartnersRegistryContractFunctions } from "./sw-contract-functions";
declare const Web3PartnersRegistryProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<PartnersRegistryContractEventType>> | undefined) => Promise<PartnersRegistryContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3PartnersRegistryProvider, PartnersRegistryContractEventType, PartnersRegistryContractFunctions, };
