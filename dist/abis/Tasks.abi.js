"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_communityExtension",
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
                name: "_taskId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "_uri",
                type: "string",
            },
        ],
        name: "TaskCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_taskId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_taker",
                type: "address",
            },
        ],
        name: "TaskFinalized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_taskId",
                type: "uint256",
            },
        ],
        name: "TaskSubmitted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_taskId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "_taker",
                type: "address",
            },
        ],
        name: "TaskTaken",
        type: "event",
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
        inputs: [
            {
                internalType: "uint256",
                name: "taskId",
                type: "uint256",
            },
        ],
        name: "finalize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "taskId",
                type: "uint256",
            },
        ],
        name: "getById",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "createdOn",
                        type: "uint256",
                    },
                    {
                        internalType: "enum Tasks.TaskStatus",
                        name: "status",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "creator",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "taker",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "submitionUrl",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "role",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "metadata",
                        type: "string",
                    },
                ],
                internalType: "struct Tasks.Task",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "isFinalized",
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
                name: "taskId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "submitionUrl",
                type: "string",
            },
        ],
        name: "submit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "taskId",
                type: "uint256",
            },
        ],
        name: "take",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "tasks",
        outputs: [
            {
                internalType: "uint256",
                name: "createdOn",
                type: "uint256",
            },
            {
                internalType: "enum Tasks.TaskStatus",
                name: "status",
                type: "uint8",
            },
            {
                internalType: "address",
                name: "creator",
                type: "address",
            },
            {
                internalType: "address",
                name: "taker",
                type: "address",
            },
            {
                internalType: "string",
                name: "submitionUrl",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "role",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "metadata",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=Tasks.abi.js.map