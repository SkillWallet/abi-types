import { CheckpointsABI } from "../../abis/Checkpoints.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  CheckpointsContractEventType,
  CheckpointsContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3CheckpointsProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<CheckpointsContractEventType>>
) => {
  return Web3ContractProvider<
    CheckpointsContractEventType,
    CheckpointsContractFunctions
  >(
    addressOrName,
    CheckpointsABI,
    extras as Web3ProviderExtras<CheckpointsContractEventType>
  );
};

export {
  Web3CheckpointsProvider,
  CheckpointsContractEventType,
  CheckpointsContractFunctions,
};
