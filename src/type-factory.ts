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
    .filter(({ name }) => !!name)
    .map(({ name, type }) => {
      return `${name}:${types[type as any] || "string"}`;
    })
    .join(",");
};

const getReturnTypes = (
  config: ReadonlyArray<JsonFragmentType>,
  stateMutability: string,
  eventType: string
) => {
  /*
    if there is only 1 argument and it has no name than we assume that 
    the response is of primitive type 
    Example:
    Key: Promise<boolean>; 
  */
  if (config.length === 1 && !config[0].name) {
    const [{ type }] = config;
    return `${types[type as string]}`;
  }

  /*
    All methods that do changes on the blockchain have stateMutability !== view 
    therefore they return wait() alongside anything else
  */
  const args = generateArguments(config);

  if (stateMutability !== "view") {
    if (config.length > 1) {
      return `{${args}, wait: () => Promise<${eventType}>}`;
    }
    return `{wait: () => Promise<${eventType}>}`;
  }

  if (args.length) {
    return `{${args}}`;
  }

  return `void`;
};

const generateMainFunctions = (
  mainFunctions: JsonFragment[],
  eventType: string
) => {
  return mainFunctions.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.name as string]: {
        instanceOf: "Function",
        tsType: `(${generateArguments(
          curr.inputs as ReadonlyArray<JsonFragmentType>
        )}) => Promise<${getReturnTypes(
          curr.outputs as ReadonlyArray<JsonFragmentType>,
          curr.stateMutability as string,
          eventType
        )}>`,
      },
    };
  }, {});
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
