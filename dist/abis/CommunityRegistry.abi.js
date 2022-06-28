"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityRegistryABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_autIDAddr",
                type: "address",
            },
            {
                internalType: "address",
                name: "_membershipTypes",
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
                internalType: "address",
                name: "newCommunityAddress",
                type: "address",
            },
        ],
        name: "CommunityCreated",
        type: "event",
    },
    {
        inputs: [],
        name: "autIDAddr",
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
                name: "",
                type: "uint256",
            },
        ],
        name: "communities",
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
                name: "contractType",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "daoAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "market",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "metadata",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "commitment",
                type: "uint256",
            },
        ],
        name: "createCommunity",
        outputs: [
            {
                internalType: "address",
                name: "_communityAddress",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getCommunities",
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
        name: "membershipTypes",
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
        name: "numOfCommunities",
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
//# sourceMappingURL=CommunityRegistry.abi.js.map