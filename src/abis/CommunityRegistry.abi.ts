import { JsonFragment } from "../abis.model";

export const CommunityRegistryAbi: JsonFragment[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "comAddr",
        type: "address",
      },
    ],
    name: "CommunityCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "template",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalMembersAllowed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "coreTeamMembersCount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isPermissioned",
        type: "bool",
      },
      {
        internalType: "address",
        name: "migrateFrom",
        type: "address",
      },
    ],
    name: "createCommunity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_skillWalletAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256",
      },
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
