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
const fs_1 = require("fs");
const json_schema_to_typescript_1 = require("json-schema-to-typescript");
const index_1 = require("./abis/index");
const type_factory_1 = require("./type-factory");
function generate() {
    return __awaiter(this, void 0, void 0, function* () {
        fs_1.writeFileSync(`src/sw-contract-functions.ts`, yield json_schema_to_typescript_1.compile(type_factory_1.SWTypeFactory([
            ...index_1.DITOCommunityABI,
            ...index_1.SkillWalletABI,
            ...index_1.PartnersAgreementABI,
            ...index_1.PartnersRegistryABI,
            ...index_1.CommunityRegistryABI,
            ...index_1.GigsABI,
            ...index_1.OlympicsABI,
        ]), "SWContractFunctions", {
            enableConstEnums: false,
        }));
    });
}
generate();
//# sourceMappingURL=generator.js.map