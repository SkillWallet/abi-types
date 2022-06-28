import { JSONSchema4 } from "json-schema";
import { JsonFragment, JsonFragmentType } from "./abis.model";

const types: any = {
  address: "string",
  bool: "boolean",
  bytes32: "string",
  bytes4: "string",
  uint256: "number",
  uint16: "number",
  uint8: "number",
  string: "string",
  "address[]": "string[]",
  "string[]": "string[]",
  "uint256[]": "number[]",
};

const generateArguments = (config: ReadonlyArray<JsonFragmentType>) => {
  return config
    .map((type, index) => {
      if (!type.name) {
        type.name = `argument_${index}`;
      }
      return type;
    })
    .map(({ name, type, components }) => {
      if (components) {
        return `${name}:${generateTupleArguments(components)}`;
      }
      return `${name}:${types[type as any] || "string"}`;
    })
    .join(",");
};

const generateTupleArguments = (config: ReadonlyArray<JsonFragmentType>) => {
  return config
    .map((type, index) => {
      if (!type.name) {
        type.name = `argument_${index}`;
      }
      return type;
    })
    .map(({ type }) => types[type as any] || "string")
    .join(",");
};

const generateTupleArgumentsWithTypes = (
  config: ReadonlyArray<JsonFragmentType>
) => {
  return config
    .map((type, index) => {
      if (!type.name) {
        type.name = `argument_${index}`;
      }
      return type;
    })
    .map(({ type, name }) => `${name}: ${types[type as any] || "string"}`)
    .join("\n");
};

const getReturnTypes = (
  config: ReadonlyArray<JsonFragmentType>,
  stateMutability: string,
  eventType: string
) => {
  let names: string;
  /*
    if there is only 1 argument and it has no name than we assume that 
    the response is of primitive type 
    Example:
    Key: Promise<boolean>; 
  */
  if (
    (config.length === 1 && !config[0].name) ||
    (config.length === 1 && config[0].type === "tuple")
  ) {
    const [{ type, components }] = config;
    if (components) {
      names = generateTupleArgumentsWithTypes(components);
      return [names, `[${generateTupleArguments(components)}]`];
    } else {
      return [config[0].name, `${types[type as string]}`];
    }
  }

  /*
    All methods that do changes on the blockchain have stateMutability !== view 
    therefore they return wait() alongside anything else
  */
  const args = generateArguments(config);

  if (stateMutability !== "view") {
    if (config.length > 1) {
      return [null, `{${args}, wait: () => Promise<${eventType}>}`];
    }

    return [null, `{wait: () => Promise<${eventType}>}`];
  }

  if (args.length) {
    return [null, `{${args}}`];
  }

  return [null, `void`];
};

const generateMainFunctions = (
  mainFunctions: JsonFragment[],
  eventType: string
) => {
  const main = mainFunctions.reduce((prev, curr) => {
    let args = generateArguments(
      curr.inputs as ReadonlyArray<JsonFragmentType>
    );

    if (args?.length) {
      args = `${args}, overrides?: CallOverrides`;
    } else {
      args = `overrides?: CallOverrides`;
    }

    const [names, types] = getReturnTypes(
      curr.outputs as ReadonlyArray<JsonFragmentType>,
      curr.stateMutability as string,
      eventType
    );

    return {
      ...prev,
      [curr.name as string]: {
        description: `${names ? "Response type names are: \n\n" + names : ""}`,
        instanceOf: "Function",
        tsType: `(${args}) => Promise<${types}>`,
      },
    };
  }, {});
  return main;
};

const generageEventTypes = (eventsType: string) => {
  return {
    events: {
      type: "array",
      title: `SWEvent`,
      items: {
        type: "object",
        properties: {
          event: {
            $ref: `#/definitions/${eventsType}`,
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

export const SWTypeFactory = (
  abi: JsonFragment[],
  typeNamePreffix: string
): JSONSchema4 => {
  const { functions, functionNames, eventNames } = abi.reduce(
    (prev, curr: JsonFragment) => {
      if (curr.type === "function") {
        (prev.functions as JsonFragment[]).push(curr);
        (prev.functionNames as string[]).push(curr.name as string);
      }
      if (curr.type === "event") {
        (prev.events as JsonFragment[]).push(curr);
        (prev.eventNames as string[]).push(curr.name as string);
      }
      return prev;
    },
    {
      functions: [],
      functionNames: [],
      events: [],
      eventNames: [],
    }
  );

  return {
    definitions: {
      [`${typeNamePreffix}ContractEventType`]: {
        title: `${typeNamePreffix}ContractEventType`,
        enum: eventNames,
        tsEnumNames: eventNames,
        type: "string",
      },
    },
    items: [
      {
        title: `${typeNamePreffix}ContractFunctions`,
        type: "object",
        properties: generateMainFunctions(
          functions,
          `${typeNamePreffix}ContractEvents`
        ),
        required: functionNames,
        additionalProperties: false,
      },
      {
        title: `${typeNamePreffix}ContractEvents`,
        type: "object",
        properties: generageEventTypes(`${typeNamePreffix}ContractEventType`),
        required: ["events"],
        additionalProperties: false,
      },
    ],
  } as JSONSchema4;
};
