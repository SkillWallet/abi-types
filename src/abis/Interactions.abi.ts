import { JsonFragment } from "../abis.model";

export const InteractionsABI: JsonFragment[] = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    name: "InteractionIndexIncreased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "activityID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "addInteraction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "communityExtension",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "discordBotAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "interactionID",
        type: "uint256",
      },
    ],
    name: "getInteraction",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "member",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "taskID",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
        ],
        internalType: "struct Interaction.InteractionModel",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getInteractionsIndexPerAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
