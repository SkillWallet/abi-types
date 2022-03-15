"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OlympicsABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_community",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_version",
                type: "uint256",
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
                internalType: "address",
                name: "competitionAddr",
                type: "address",
            },
        ],
        name: "CompetitionCreated",
        type: "event",
    },
    {
        inputs: [],
        name: "checkpoints",
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
                name: "competitionAddress",
                type: "uint256",
            },
        ],
        name: "closeCompetition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "community",
        outputs: [
            {
                internalType: "contract ICommunity",
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
                name: "role",
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
                internalType: "string",
                name: "metadata",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "checkpointsAmount",
                type: "uint256",
            },
        ],
        name: "createCompetition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getCompetitions",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "migratedFrom",
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
        name: "migratedTo",
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
//# sourceMappingURL=Olympics.abi.js.map