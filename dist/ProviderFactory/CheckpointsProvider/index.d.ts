import { Web3ProviderExtras } from "../web3.provider";
import { CheckpointsContractEventType, CheckpointsContractFunctions } from "./sw-contract-functions";
declare const Web3CheckpointsProvider: (addressOrName: string, extras?: Partial<Web3ProviderExtras<CheckpointsContractEventType>> | undefined) => Promise<CheckpointsContractFunctions & {
    contract: import("ethers").Contract;
}>;
export { Web3CheckpointsProvider, CheckpointsContractEventType, CheckpointsContractFunctions, };
