"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkillWalletCommunity_abi_1 = require("../../abis/SkillWalletCommunity.abi");
const web3_provider_1 = require("../web3.provider");
const sw_contract_functions_1 = require("./sw-contract-functions");
exports.SkillWalletCommunityContractEventType = sw_contract_functions_1.SkillWalletCommunityContractEventType;
const Web3SkillWalletCommunityProvider = (addressOrName, extras) => __awaiter(void 0, void 0, void 0, function* () {
    return web3_provider_1.Web3ContractProvider(addressOrName, SkillWalletCommunity_abi_1.SkillWalletCommunityABI, extras);
});
exports.Web3SkillWalletCommunityProvider = Web3SkillWalletCommunityProvider;
//# sourceMappingURL=index.js.map