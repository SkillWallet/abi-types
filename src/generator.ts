import { readFile, readFileSync, unlinkSync, writeFileSync } from "fs";
import { compile } from "json-schema-to-typescript";
import { JsonFragment } from "./abis.model";
import { getAbiFileNames } from "./read-abi-names";
const { dedent } = require("tslint/lib/utils");
import { SWTypeFactory } from "./type-factory";

export async function generateTypes(
  path: string,
  abi: JsonFragment[],
  preffix: string
) {
  const name = `${preffix}ContractFunctions`;
  writeFileSync(
    path,
    await compile(SWTypeFactory(abi, preffix), name, {
      enableConstEnums: false,
    })
  );
}

getAbiFileNames().then(async (names: any) => {
  for (const name in names) {
    const path = `src/ProviderFactory/${name}Provider/sw-contract-functions.ts`;
    try {
      unlinkSync(path);
    } catch (err) {
      // console.error(err);
    }
    try {
      const abiImport = await import(`././abis/index`);
      const abi = abiImport[`${name}ABI`];
      await generateTypes(path, abi, name);
      await updateTsFile(path);
    } catch (err) {
      console.error(err);
    }
  }
});


const updateTsFile = async (dirPath) => {
  try {
    const fileData = readFileSync(dirPath);
    const fileAsStr = fileData.toString("utf8");

    writeFileSync(
      dirPath,
      dedent`import { CallOverrides } from "ethers";
      ${fileAsStr}`,
      { encoding: "utf8" }
    );
  } catch (err) {
    // console.log(err);
  }
};