import { SkillWalletABI } from "../../abis/SkillWallet.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  SkillWalletContractEventType,
  SkillWalletContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3SkillWalletProvider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<SkillWalletContractEventType>>
) => {
  return Web3ContractProvider<
    SkillWalletContractEventType,
    SkillWalletContractFunctions
  >(
    addressOrName,
    SkillWalletABI,
    extras as Web3ProviderExtras<SkillWalletContractEventType>
  );
};

export {
  Web3SkillWalletProvider,
  SkillWalletContractEventType,
  SkillWalletContractFunctions,
};
