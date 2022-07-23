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
  {
    inputs: [],
    name: "getIDCounter",
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

export const PollsByteCode = {
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162001d4838038062001d48833981810160405281019062000037919062000232565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a1906200033d565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663608d3d3d336040518263ffffffff1660e01b8152600401620000e59190620002fe565b60206040518083038186803b158015620000fe57600080fd5b505afa15801562000113573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000139919062000273565b6200017b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000172906200031b565b60405180910390fd5b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000436565b600081519050620002158162000402565b92915050565b6000815190506200022c816200041c565b92915050565b600080604083850312156200024657600080fd5b6000620002568582860162000204565b9250506020620002698582860162000204565b9150509250929050565b6000602082840312156200028657600080fd5b600062000296848285016200021b565b91505092915050565b620002aa8162000370565b82525050565b6000620002bf600f836200035f565b9150620002cc82620003b0565b602082019050919050565b6000620002e66014836200035f565b9150620002f382620003d9565b602082019050919050565b60006020820190506200031560008301846200029f565b92915050565b600060208201905081810360008301526200033681620002b0565b9050919050565b600060208201905081810360008301526200035881620002d7565b9050919050565b600082825260208201905092915050565b60006200037d8262000390565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4f6e6c7920636f7265207465616d210000000000000000000000000000000000600082015250565b7f6e6f20636f6d6d756e6974792061646472657373000000000000000000000000600082015250565b6200040d8162000370565b81146200041957600080fd5b50565b620004278162000384565b81146200043357600080fd5b50565b61190280620004466000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80634b068c78146100675780636c5e906914610097578063a109a9f4146100b3578063e90ca938146100d1578063eead6904146100ef578063f4f4d2371461010d575b600080fd5b610081600480360381019061007c9190611102565b61013d565b60405161008e9190611489565b60405180910390f35b6100b160048036038101906100ac9190611079565b6102c2565b005b6100bb610a28565b6040516100c89190611383565b60405180910390f35b6100d9610a4e565b6040516100e69190611489565b60405180910390f35b6100f7610a6b565b6040516101049190611383565b60405180910390f35b61012760048036038101906101229190611050565b610a8f565b6040516101349190611467565b60405180910390f35b600080825111610182576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017990611427565b60405180910390fd5b600061018e6001610c4e565b905060026040518060c00160405280428152602001858152602001604051806020016040528060008152508152602001600015158152602001878152602001868152509080600181540180825580915050600190039060005260206000209060060201600090919091909150600082015181600001556020820151816001019080519060200190610220929190610c72565b50604082015181600201908051906020019061023d929190610c72565b5060608201518160030160006101000a81548160ff0219169083151502179055506080820151816004015560a08201518160050155505061027e6001610c5c565b7f65d5ac2bf1bca69566bef1affdfca5bb37b9577fc0b3af4c7c4638225e67b39c81846040516102af9291906114ff565b60405180910390a1809150509392505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034790611407565b60405180910390fd5b426002868154811061038b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160050154106103dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d4906113c7565b60405180910390fd5b60028581548110610417577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160030160009054906101000a900460ff1615610476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046d90611447565b60405180910390fd5b600084849050116104bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b3906113e7565b60405180910390fd5b60005b8282905081101561092657600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635657536b848484818110610541577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906105569190610fac565b6040518263ffffffff1660e01b81526004016105729190611383565b60206040518083038186803b15801561058a57600080fd5b505afa15801561059e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c29190610ffe565b80156107b4575060028681548110610603577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160040154600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663de90ccca6040518163ffffffff1660e01b815260040160206040518083038186803b15801561067d57600080fd5b505afa158015610691573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b59190610fd5565b73ffffffffffffffffffffffffffffffffffffffff1663d35d7c8a858585818110610709577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061071e9190610fac565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b815260040161075e92919061139e565b60806040518083038186803b15801561077657600080fd5b505afa15801561078a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ae9190611027565b60200151145b1561091357600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663483948736040518163ffffffff1660e01b815260040160206040518083038186803b15801561082157600080fd5b505afa158015610835573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108599190610fd5565b73ffffffffffffffffffffffffffffffffffffffff1663b95adfce878585858181106108ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906108c39190610fac565b6040518363ffffffff1660e01b81526004016108e09291906114a4565b600060405180830381600087803b1580156108fa57600080fd5b505af115801561090e573d6000803e3d6000fd5b505050505b808061091e906116d3565b9150506104bf565b50600160028681548110610963577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160030160006101000a81548160ff0219169083151502179055508383600287815481106109c7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160020191906109e5929190610cf8565b507feae104ceeea260b8572c8548ad8d04a8b19844dcd89f26c5d14b6495527e7531858585604051610a19939291906114cd565b60405180910390a15050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001610a5c6001610c4e565b610a6691906115b2565b905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610a97610d7e565b60028281548110610ad1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016040518060c001604052908160008201548152602001600182018054610b0490611670565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3090611670565b8015610b7d5780601f10610b5257610100808354040283529160200191610b7d565b820191906000526020600020905b815481529060010190602001808311610b6057829003601f168201915b50505050508152602001600282018054610b9690611670565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc290611670565b8015610c0f5780601f10610be457610100808354040283529160200191610c0f565b820191906000526020600020905b815481529060010190602001808311610bf257829003601f168201915b505050505081526020016003820160009054906101000a900460ff16151515158152602001600482015481526020016005820154815250509050919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b828054610c7e90611670565b90600052602060002090601f016020900481019282610ca05760008555610ce7565b82601f10610cb957805160ff1916838001178555610ce7565b82800160010185558215610ce7579182015b82811115610ce6578251825591602001919060010190610ccb565b5b509050610cf49190610db6565b5090565b828054610d0490611670565b90600052602060002090601f016020900481019282610d265760008555610d6d565b82601f10610d3f57803560ff1916838001178555610d6d565b82800160010185558215610d6d579182015b82811115610d6c578235825591602001919060010190610d51565b5b509050610d7a9190610db6565b5090565b6040518060c0016040528060008152602001606081526020016060815260200160001515815260200160008152602001600081525090565b5b80821115610dcf576000816000905550600101610db7565b5090565b6000610de6610de184611554565b61152f565b905082815260208101848484011115610dfe57600080fd5b610e0984828561162e565b509392505050565b600081359050610e2081611887565b92915050565b600081519050610e3581611887565b92915050565b60008083601f840112610e4d57600080fd5b8235905067ffffffffffffffff811115610e6657600080fd5b602083019150836020820283011115610e7e57600080fd5b9250929050565b600081519050610e948161189e565b92915050565b60008083601f840112610eac57600080fd5b8235905067ffffffffffffffff811115610ec557600080fd5b602083019150836001820283011115610edd57600080fd5b9250929050565b600082601f830112610ef557600080fd5b8135610f05848260208601610dd3565b91505092915050565b600060808284031215610f2057600080fd5b610f2a608061152f565b90506000610f3a84828501610e26565b6000830152506020610f4e84828501610f97565b6020830152506040610f6284828501610f97565b6040830152506060610f7684828501610e85565b60608301525092915050565b600081359050610f91816118b5565b92915050565b600081519050610fa6816118b5565b92915050565b600060208284031215610fbe57600080fd5b6000610fcc84828501610e11565b91505092915050565b600060208284031215610fe757600080fd5b6000610ff584828501610e26565b91505092915050565b60006020828403121561101057600080fd5b600061101e84828501610e85565b91505092915050565b60006080828403121561103957600080fd5b600061104784828501610f0e565b91505092915050565b60006020828403121561106257600080fd5b600061107084828501610f82565b91505092915050565b60008060008060006060868803121561109157600080fd5b600061109f88828901610f82565b955050602086013567ffffffffffffffff8111156110bc57600080fd5b6110c888828901610e9a565b9450945050604086013567ffffffffffffffff8111156110e757600080fd5b6110f388828901610e3b565b92509250509295509295909350565b60008060006060848603121561111757600080fd5b600061112586828701610f82565b935050602061113686828701610f82565b925050604084013567ffffffffffffffff81111561115357600080fd5b61115f86828701610ee4565b9150509250925092565b611172816115e6565b82525050565b611181816115f8565b82525050565b600061119383856115a1565b93506111a083858461162e565b6111a9836117a9565b840190509392505050565b60006111bf82611585565b6111c98185611590565b93506111d981856020860161163d565b6111e2816117a9565b840191505092915050565b60006111f882611585565b61120281856115a1565b935061121281856020860161163d565b61121b816117a9565b840191505092915050565b60006112336019836115a1565b915061123e826117ba565b602082019050919050565b60006112566012836115a1565b9150611261826117e3565b602082019050919050565b60006112796011836115a1565b91506112848261180c565b602082019050919050565b600061129c6006836115a1565b91506112a782611835565b602082019050919050565b60006112bf6011836115a1565b91506112ca8261185e565b602082019050919050565b600060c0830160008301516112ed6000860182611365565b506020830151848203602086015261130582826111b4565b9150506040830151848203604086015261131f82826111b4565b91505060608301516113346060860182611178565b5060808301516113476080860182611365565b5060a083015161135a60a0860182611365565b508091505092915050565b61136e81611624565b82525050565b61137d81611624565b82525050565b60006020820190506113986000830184611169565b92915050565b60006040820190506113b36000830185611169565b6113c06020830184611169565b9392505050565b600060208201905081810360008301526113e081611226565b9050919050565b6000602082019050818103600083015261140081611249565b9050919050565b600060208201905081810360008301526114208161126c565b9050919050565b600060208201905081810360008301526114408161128f565b9050919050565b60006020820190508181036000830152611460816112b2565b9050919050565b6000602082019050818103600083015261148181846112d5565b905092915050565b600060208201905061149e6000830184611374565b92915050565b60006040820190506114b96000830185611374565b6114c66020830184611169565b9392505050565b60006040820190506114e26000830186611374565b81810360208301526114f5818486611187565b9050949350505050565b60006040820190506115146000830185611374565b818103602083015261152681846111ed565b90509392505050565b600061153961154a565b905061154582826116a2565b919050565b6000604051905090565b600067ffffffffffffffff82111561156f5761156e61177a565b5b611578826117a9565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006115bd82611624565b91506115c883611624565b9250828210156115db576115da61171c565b5b828203905092915050565b60006115f182611604565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561165b578082015181840152602081019050611640565b8381111561166a576000848401525b50505050565b6000600282049050600182168061168857607f821691505b6020821081141561169c5761169b61174b565b5b50919050565b6116ab826117a9565b810181811067ffffffffffffffff821117156116ca576116c961177a565b5b80604052505050565b60006116de82611624565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156117115761171061171c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4475652064617465206e6f742072656163686564207965742e00000000000000600082015250565b7f526573756c74732066696c6520656d7074790000000000000000000000000000600082015250565b7f4f6e6c7920646973636f726420626f7421000000000000000000000000000000600082015250565b7f4e6f205552490000000000000000000000000000000000000000000000000000600082015250565b7f616c72656164792066696e616c697a6564000000000000000000000000000000600082015250565b611890816115e6565b811461189b57600080fd5b50565b6118a7816115f8565b81146118b257600080fd5b50565b6118be81611624565b81146118c957600080fd5b5056fea2646970667358221220aea7f6d63d02cc62206cd18b74652a1425833b281fa6010f91c05fd0eb73890864736f6c63430008040033"
};