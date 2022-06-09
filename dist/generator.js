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
const { dedent } = require("tslint/lib/utils");
const index_1 = require("./abis/index");
const type_factory_1 = require("./type-factory");
function generateTypes(path, abi, preffix) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = `${preffix}ContractFunctions`;
        fs_1.writeFileSync(path, yield json_schema_to_typescript_1.compile(type_factory_1.SWTypeFactory(abi, preffix), name, {
            enableConstEnums: false,
        }));
    });
}
exports.generateTypes = generateTypes;
const all = [
    {
        path: `src/ProviderFactory/CheckpointsProvider/sw-contract-functions.ts`,
        abi: index_1.CheckpointsABI,
        preffix: "Checkpoints",
    },
    {
        path: `src/ProviderFactory/CommunityRegistryProvider/sw-contract-functions.ts`,
        abi: index_1.SkillWalletABI,
        preffix: "CommunityRegistry",
    },
    {
        path: `src/ProviderFactory/CompetitionsProvider/sw-contract-functions.ts`,
        abi: index_1.CompetitionsABI,
        preffix: "Competitions",
    },
    {
        path: `src/ProviderFactory/DITOCommunityProvider/sw-contract-functions.ts`,
        abi: index_1.DITOCommunityABI,
        preffix: "DITOCommunity",
    },
    {
        path: `src/ProviderFactory/GigsProvider/sw-contract-functions.ts`,
        abi: index_1.GigsABI,
        preffix: "Gigs",
    },
    {
        path: `src/ProviderFactory/OlympicsProvider/sw-contract-functions.ts`,
        abi: index_1.OlympicsABI,
        preffix: "Olympics",
    },
    {
        path: `src/ProviderFactory/PartnersAgreementProvider/sw-contract-functions.ts`,
        abi: index_1.PartnersAgreementABI,
        preffix: "PartnersAgreement",
    },
    {
        path: `src/ProviderFactory/CommunityRegistryProvider/sw-contract-functions.ts`,
        abi: index_1.CommunityRegistryABI,
        preffix: "CommunityRegistry",
    },
    {
        path: `src/ProviderFactory/PartnersRegistryProvider/sw-contract-functions.ts`,
        abi: index_1.PartnersRegistryABI,
        preffix: "PartnersRegistry",
    },
    {
        path: `src/ProviderFactory/SkillWalletProvider/sw-contract-functions.ts`,
        abi: index_1.SkillWalletABI,
        preffix: "SkillWallet",
    },
    {
        path: `src/ProviderFactory/SkillWalletCommunityProvider/sw-contract-functions.ts`,
        abi: index_1.SkillWalletCommunityABI,
        preffix: "SkillWalletCommunity",
    },
    {
        path: `src/ProviderFactory/CommunityExtensionProvider/sw-contract-functions.ts`,
        abi: index_1.CommunityExtensionABI,
        preffix: "CommunityExtension",
    },
    {
        path: `src/ProviderFactory/ActivitiesProvider/sw-contract-functions.ts`,
        abi: index_1.ActivitiesABI,
        preffix: "Activities",
    },
];
const generate = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < all.length; i += 1) {
        const { path, abi, preffix } = all[i];
        try {
            fs_1.unlinkSync(path);
        }
        catch (err) {
            console.error(err);
        }
        yield generateTypes(path, abi, preffix);
        try {
            yield updateTsFile(path);
        }
        catch (err) {
            console.error(err);
        }
    }
});
generate();
const updateTsFile = (dirPath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileData = fs_1.readFileSync(dirPath);
        const fileAsStr = fileData.toString("utf8");
        fs_1.writeFileSync(dirPath, dedent `import { CallOverrides } from "ethers";
      ${fileAsStr}`, { encoding: "utf8" });
    }
    catch (err) {
        console.log(err);
        // handle error here
    }
});
//# sourceMappingURL=generator.js.map