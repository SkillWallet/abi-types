import { JsonFragment } from "../abis.model";

export const PollsABI: JsonFragment[] = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_communityExtension",
        type: "address",
      },
      {
        internalType: "address",
        name: "_discordBot",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "PollClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "PollCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "results",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "participants",
        type: "address[]",
      },
    ],
    name: "close",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_role",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dueDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "discordBot",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "getById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "pollData",
            type: "string",
          },
          {
            internalType: "string",
            name: "results",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isFinalized",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "role",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dueDate",
            type: "uint256",
          },
        ],
        internalType: "struct Polls.Poll",
        name: "poll",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
