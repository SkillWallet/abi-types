import { Web3ProviderExtras } from "../web3.provider";
import { DITOCommunityContractEventType, DITOCommunityContractFunctions } from "./sw-contract-functions";
declare const Web3DITOCommunityProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<DITOCommunityContractEventType>> | undefined) => Promise<DITOCommunityContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3DITOCommunityProvider, DITOCommunityContractEventType, DITOCommunityContractFunctions, };
