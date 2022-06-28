import { getAbiFileNames, createProviderFactoryDirs } from "./read-abi-names";

getAbiFileNames().then((names) => {
  createProviderFactoryDirs(names);
});
