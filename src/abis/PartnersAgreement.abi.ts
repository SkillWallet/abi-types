import { JsonFragment } from "../abis.model";

export const PartnersAgreementABI: JsonFragment[] = [
  {
    inputs: [
      {
        "internalType": "address",
        "name": "skillWalletAddr",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_membershipFactory",
        "type": "address"
      },
      {
        internalType: "address",
        name: "_interactionNFTFactory",
        type: "address",
      },
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
            "internalType": "uint256",
            "name": "interactionsCount",
            "type": "uint256"
          }
        ],
        internalType: "struct Types.PartnersAgreementData",
        name: "pa",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_contract",
        "type": "address"
      }
    ],
    name: "PartnersContractAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_url",
        type: "string",
      },
    ],
    name: "UrlAdded",
    type: "event",
  },
  {
    inputs: [],
    name: "activatePA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "activities",
    outputs: [
      {
        internalType: "contract IActivities",
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
        "internalType": "string",
        "name": "_url",
        "type": "string"
      }
    ],
    name: "addURL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    "inputs": [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createActivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bot",
        type: "address",
      },
    ],
    name: "deployActivities",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_activityId",
        type: "uint256",
      },
    ],
    name: "finilizeTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    "inputs": [],
    "name": "getActivitiesAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAgreementData",
    "outputs": [
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
            "internalType": "uint256",
            "name": "interactionsCount",
            "type": "uint256"
          }
        ],
        internalType: "struct Types.PartnersAgreementData",
        name: "",
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
    "inputs": [],
    "name": "getImportedAddresses",
    "outputs": [
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
    "inputs": [],
    "name": "getSkillWalletAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    "inputs": [],
    "name": "getURLs",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    "inputs": [],
    "name": "isActive",
    "outputs": [
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "partnersContracts",
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
        internalType: "uint256",
        name: "_activityId",
        type: "uint256",
      },
    ],
    name: "takeTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [],
    name: "TaskTaken",
    type: "event",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "urls",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    "stateMutability": "view",
    "type": "function"
  }
];
