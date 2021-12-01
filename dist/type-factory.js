"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types = {
    address: "string",
    bool: "boolean",
    bytes32: "string",
    bytes4: "string",
    uint256: "number",
    uint16: "number",
    string: "string",
    "address[]": "string[]",
    "string[]": "string[]",
    "uint256[]": "number[]",
};
const generateArguments = (config) => {
    return config
        .filter(({ name }) => !!name)
        .map(({ name, type }) => {
        return `${name}:${types[type] || "string"}`;
    })
        .join(",");
};
const getReturnTypes = (config, stateMutability) => {
    /*
      if there is only 1 argument and it has no name than we assume that
      the response is of primitive type
      Example:
      Key: Promise<boolean>;
    */
    if (config.length === 1 && !config[0].name) {
        const [{ type }] = config;
        return `${types[type]}`;
    }
    /*
      All methods that do changes on the blockchain have stateMutability !== view
      therefore they return wait() alongside anything else
    */
    const args = generateArguments(config);
    if (stateMutability !== "view") {
        if (config.length > 1) {
            return `{${args}, wait: () => Promise<SWContractEvents>}`;
        }
        return `{wait: () => Promise<SWContractEvents>}`;
    }
    if (args.length) {
        return `{${args}}`;
    }
    return `void`;
};
const generateMainFunctions = (mainFunctions) => {
    return mainFunctions.reduce((prev, curr) => {
        return Object.assign(Object.assign({}, prev), { [curr.name]: {
                instanceOf: "Function",
                tsType: `(${generateArguments(curr.inputs)}) => Promise<${getReturnTypes(curr.outputs, curr.stateMutability)}>`,
            } });
    }, {});
};
const generageEventTypes = () => {
    return {
        events: {
            type: "array",
            title: `SWEvent`,
            items: {
                type: "object",
                properties: {
                    event: {
                        $ref: `#/definitions/SWContractEventType`,
                    },
                    args: {
                        tsType: "any",
                    },
                },
                required: ["event", "args"],
                additionalProperties: false,
            },
        },
    };
};
exports.SWTypeFactory = (abi) => {
    const { functions, functionNames, eventNames } = abi.reduce((prev, curr) => {
        if (curr.type === "function") {
            prev.functions.push(curr);
            prev.functionNames.push(curr.name);
        }
        if (curr.type === "event") {
            prev.events.push(curr);
            prev.eventNames.push(curr.name);
        }
        return prev;
    }, {
        functions: [],
        functionNames: [],
        events: [],
        eventNames: [],
    });
    return {
        definitions: {
            [`SWContractEventType`]: {
                title: `SWContractEventType`,
                enum: eventNames,
                tsEnumNames: eventNames,
                type: "string",
            },
        },
        items: [
            {
                title: `SWContractFunctions`,
                type: "object",
                properties: generateMainFunctions(functions),
                required: functionNames,
                additionalProperties: false,
            },
            {
                title: `SWContractEvents`,
                type: "object",
                properties: generageEventTypes(),
                required: ["events"],
                additionalProperties: false,
            },
        ],
    };
};
//# sourceMappingURL=type-factory.js.map