"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_abi_names_1 = require("./read-abi-names");
read_abi_names_1.getAbiFileNames().then((names) => {
    read_abi_names_1.createProviderFactoryDirs(names);
});
//# sourceMappingURL=gen-provider-dirs.js.map