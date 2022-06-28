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
const fs = require("fs");
const { dedent } = require("tslint/lib/utils");
exports.getAbiFileNames = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(`src/abis/`, function (err, filenames) {
            if (err) {
                reject(err);
                return;
            }
            const names = {};
            filenames.forEach(function (filename) {
                const [name] = filename.split(".abi");
                if (!name.includes("index")) {
                    names[name] = name;
                }
            });
            resolve(names);
        });
    });
};
const template = (name) => dedent `
import { ${name}ABI } from "../../abis/${name}.abi";
import { Web3ContractProvider, Web3ProviderExtras } from "../web3.provider";

import {
  ${name}ContractEventType,
  ${name}ContractFunctions,
  // @ts-ignore
} from "./sw-contract-functions";

const Web3${name}Provider = async (
  addressOrName: string,
  extras?: Partial<Web3ProviderExtras<${name}ContractEventType>>
) => {
  return Web3ContractProvider<${name}ContractEventType, ${name}ContractFunctions>(
    addressOrName,
    ${name}ABI,
    extras as Web3ProviderExtras<${name}ContractEventType>
  );
};

export { Web3${name}Provider, ${name}ContractEventType, ${name}ContractFunctions };
`;
const updateImport = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dirName = `src//ProviderFactory/index.ts`;
        const fileData = fs.readFileSync(dirName);
        const fileAsStr = fileData.toString("utf8");
        fs.writeFileSync(dirName, dedent `${fileAsStr}export * from "./${name}Provider";`, { encoding: "utf8" });
    }
    catch (err) {
        console.log(err);
    }
});
exports.createProviderFactoryDirs = (names) => {
    for (const name in names) {
        const dirName = `src/ProviderFactory/${name}Provider`;
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
            fs.writeFileSync(`${dirName}/index.ts`, template(name), {
                encoding: "utf8",
            });
            updateImport(name);
        }
    }
};
//# sourceMappingURL=read-abi-names.js.map