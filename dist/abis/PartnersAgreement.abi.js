"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnersAgreementABI = [
    {
        inputs: [],
        name: "activatePA",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
        ],
        name: "addNewContractAddressToAgreement",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "addNewCoreTeamMembers",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_type",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_url",
                type: "string",
            },
        ],
        name: "createActivity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_type",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "_url",
                type: "string",
            },
        ],
        name: "ActivityCreated",
        type: "event",
    },
    {
        inputs: [],
        name: "communityAddress",
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
        name: "coreTeamMembersCount",
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
        name: "getAgreementData",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "version",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "communityAddress",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "partnersContracts",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "rolesCount",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "interactionContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "membershipContract",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "interactionsCount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "coreTeamMembersCount",
                        type: "uint256",
                    },
                    {
                        internalType: "address[]",
                        name: "whitelistedTeamMembers",
                        type: "address[]",
                    },
                    {
                        internalType: "address",
                        name: "interactionsQueryServer",
                        type: "address",
                    },
                ],
                internalType: "struct Types.PartnersAgreementData",
                name: "data",
                type: "tuple",
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
        name: "getCoreTeamMembers",
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
        name: "getImportedAddresses",
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
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "getInteractionNFT",
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
        name: "getInteractionNFTContractAddress",
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
        inputs: [],
        name: "isActive",
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
        name: "isCoreTeamMember",
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
        inputs: [],
        name: "membershipAddress",
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
        inputs: [],
        name: "rolesCount",
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
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountOfInteractions",
                type: "uint256",
            },
        ],
        name: "transferInteractionNFTs",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=PartnersAgreement.abi.js.map