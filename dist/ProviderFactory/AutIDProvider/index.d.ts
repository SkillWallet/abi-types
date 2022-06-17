import { Web3ProviderExtras } from "../web3.provider";
import { AutIDContractEventType, AutIDContractFunctions } from "./sw-contract-functions";
declare const Web3AutIDProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<AutIDContractEventType>> | undefined) => Promise<AutIDContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3AutIDProvider, AutIDContractEventType, AutIDContractFunctions };
