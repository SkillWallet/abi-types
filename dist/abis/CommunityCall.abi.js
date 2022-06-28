"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityCallABI = [
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
        name: "CommunityCallClosed",
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
        name: "CommunityCallCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "comCallID",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_role",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_startTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_endTime",
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
                internalType: "address",
                name: "_discordBot",
                type: "address",
            },
        ],
        name: "setDiscordAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=CommunityCall.abi.js.map