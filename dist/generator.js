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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const json_schema_to_typescript_1 = require("json-schema-to-typescript");
const read_abi_names_1 = require("./read-abi-names");
const { dedent } = require("tslint/lib/utils");
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
read_abi_names_1.getAbiFileNames().then((names) => __awaiter(void 0, void 0, void 0, function* () {
    for (const name in names) {
        const path = `src/ProviderFactory/${name}Provider/sw-contract-functions.ts`;
        try {
            fs_1.unlinkSync(path);
        }
        catch (err) {
            // console.error(err);
        }
        try {
            const abiImport = yield Promise.resolve().then(() => __importStar(require(`././abis/index`)));
            const abi = abiImport[`${name}ABI`];
            yield generateTypes(path, abi, name);
            yield updateTsFile(path);
        }
        catch (err) {
            console.error(err);
        }
    }
}));
const updateTsFile = (dirPath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileData = fs_1.readFileSync(dirPath);
        const fileAsStr = fileData.toString("utf8");
        fs_1.writeFileSync(dirPath, dedent `import { CallOverrides } from "ethers";
      ${fileAsStr}`, { encoding: "utf8" });
    }
    catch (err) {
        // console.log(err);
    }
});
//# sourceMappingURL=generator.js.map