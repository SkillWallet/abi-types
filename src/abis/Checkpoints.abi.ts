import { JsonFragment } from "../abis.model";

export const CheckpointsABI: JsonFragment[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "checkpointID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "competitionAddress",
        type: "address",
      },
    ],
    name: "CheckpointCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "checkpointID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "CheckpointPassed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "address",
        name: "competition",
        type: "address",
      },
      {
        internalType: "string",
        name: "metadataUri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skill1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skill2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skill3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate",
        type: "uint256",
      },
      {
        internalType: "uint256[3]",
        name: "skills",
        type: "uint256[3]",
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "competition",
        type: "address",
      },
    ],
    name: "getCheckpointsPerCompetition",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "checkpointID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "hasAParticipantPassedTheCheckpoint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "checkpointID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "skill",
        type: "uint256",
      },
    ],
    name: "hasSkill",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "checkpointID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "participant",
        type: "address",
      },
    ],
    name: "pass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
