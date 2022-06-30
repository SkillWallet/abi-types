"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityExtensionABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "deployer",
                type: "address",
            },
            {
                internalType: "address",
                name: "autAddr",
                type: "address",
            },
            {
                internalType: "address",
                name: "memTypes",
                type: "address",
            },
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
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [],
        name: "ActivitiesAddressAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "DiscordServerSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "MemberAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "MetadataUriUpdated",
        type: "event",
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
        ],
        name: "OnboardingPassed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "url",
                type: "string",
            },
        ],
        name: "UrlAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "url",
                type: "string",
            },
        ],
        name: "UrlRemoved",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "activityAddr",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "actType",
                type: "uint256",
            },
        ],
        name: "addActivitiesAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_url",
                type: "string",
            },
        ],
        name: "addURL",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
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
        inputs: [],
        name: "getActivitiesWhitelist",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "actAddr",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "actType",
                        type: "uint256",
                    },
                ],
                internalType: "struct ICommunityExtension.Activity[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllMembers",
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
        name: "getComData",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "contractType",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "daoAddress",
                        type: "address",
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
                    {
                        internalType: "uint256",
                        name: "market",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "discordServer",
                        type: "string",
                    },
                ],
                internalType: "struct ICommunityExtension.CommunityData",
                name: "data",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getInteractionsAddr",
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
                name: "member",
                type: "address",
            },
        ],
        name: "getInteractionsPerUser",
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
    {
        inputs: [],
        name: "getURLs",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "member",
                type: "address",
            },
        ],
        name: "hasPassedOnboarding",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isActivityWhitelisted",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isCoreTeam",
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
                internalType: "address",
                name: "member",
                type: "address",
            },
        ],
        name: "isMemberOfExtendedDAO",
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
                internalType: "address",
                name: "member",
                type: "address",
            },
        ],
        name: "isMemberOfOriginalDAO",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isMemberOfTheCom",
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
                internalType: "string",
                name: "_url",
                type: "string",
            },
        ],
        name: "isURLListed",
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
                internalType: "address",
                name: "newMember",
                type: "address",
            },
        ],
        name: "join",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "members",
                type: "address[]",
            },
        ],
        name: "passOnboarding",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_url",
                type: "string",
            },
        ],
        name: "removeURL",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "discordServer",
                type: "string",
            },
        ],
        name: "setDiscordServer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "metadata",
                type: "string",
            },
        ],
        name: "setMetadataUri",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=CommunityExtension.abi.js.map