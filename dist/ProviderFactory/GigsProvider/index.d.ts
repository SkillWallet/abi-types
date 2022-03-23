import { Web3ProviderExtras } from "../web3.provider";
import { GigsContractEventType, GigsContractFunctions } from "./sw-contract-functions";
declare const Web3GigsProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<GigsContractEventType>> | undefined) => Promise<GigsContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3GigsProvider, GigsContractEventType, GigsContractFunctions };
