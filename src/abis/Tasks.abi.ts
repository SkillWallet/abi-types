import { JsonFragment } from "../abis.model";

export const TasksABI: JsonFragment[] = [
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

export const TasksByteCode = {
  bytecode:
    "0x60806040523480156200001157600080fd5b50604051620021bb380380620021bb833981810160405281019062000037919062000109565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a1906200015c565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000206565b6000815190506200010381620001ec565b92915050565b6000602082840312156200011c57600080fd5b60006200012c84828501620000f2565b91505092915050565b6000620001446014836200017e565b91506200015182620001c3565b602082019050919050565b60006020820190508181036000830152620001778162000135565b9050919050565b600082825260208201905092915050565b60006200019c82620001a3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f6e6f20636f6d6d756e6974792061646472657373000000000000000000000000600082015250565b620001f7816200018f565b81146200020357600080fd5b50565b611fa580620002166000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635d63f6c61161005b5780635d63f6c6146101255780638d97767214610141578063a109a9f414610177578063f4f4d2371461019557610088565b80630118fa491461008d57806305261aea146100bd57806333727c4d146100d95780634fd9efc414610109575b600080fd5b6100a760048036038101906100a291906117c3565b6101c5565b6040516100b49190611b3c565b60405180910390f35b6100d760048036038101906100d29190611742565b61046c565b005b6100f360048036038101906100ee9190611742565b610934565b6040516101009190611a5f565b60405180910390f35b610123600480360381019061011e9190611742565b610954565b005b61013f600480360381019061013a919061176b565b610c99565b005b61015b60048036038101906101569190611742565b610fad565b60405161016e9796959493929190611b80565b60405180910390f35b61017f61115c565b60405161018c9190611a44565b60405180910390f35b6101af60048036038101906101aa9190611742565b611182565b6040516101bc9190611b1a565b60405180910390f35b60008082511161020a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020190611ada565b60405180910390fd5b6000610216600061144f565b905060026040518060e0016040528042815260200160006003811115610265577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016040518060200160405280600081525081526020018681526020018581525090806001815401808255809150506001900390600052602060002090600602016000909190919091506000820151816000015560208201518160010160006101000a81548160ff02191690836003811115610346577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060408201518160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160030190805190602001906103f5929190611473565b5060a0820151816004015560c082015181600501908051906020019061041c929190611473565b505050610429600061145d565b7fa5ed9e6226c584326505694539c95cb0e3238ae09bcda5a65c00bbfdab1c6662818460405161045a929190611bfd565b60405180910390a18091505092915050565b3373ffffffffffffffffffffffffffffffffffffffff16600282815481106104bd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053c90611aba565b60405180910390fd5b6002600381111561057f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600282815481106105b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160009054906101000a900460ff166003811115610610577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610650576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064790611a7a565b60405180910390fd5b60036002828154811061068c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160006101000a81548160ff021916908360038111156106e5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060016003600083815260200190815260200160002060006101000a81548160ff021916908315150217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663483948736040518163ffffffff1660e01b815260040160206040518083038186803b15801561077e57600080fd5b505afa158015610792573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b69190611719565b73ffffffffffffffffffffffffffffffffffffffff1663b95adfce826002848154811061080c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b815260040161085b929190611b57565b600060405180830381600087803b15801561087557600080fd5b505af1158015610889573d6000803e3d6000fd5b505050507fc923846dc69de8ab93cf9ea85e31a6e1ba93bd70bf0cec92b2c98b8f4b4485da81600283815481106108e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610929929190611b57565b60405180910390a150565b60036020528060005260406000206000915054906101000a900460ff1681565b6000600381111561098e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600282815481106109c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160009054906101000a900460ff166003811115610a1f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610a5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5690611a7a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660028281548110610ab0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3090611afa565b60405180910390fd5b3360028281548110610b74577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160028281548110610bff577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160006101000a81548160ff02191690836003811115610c58577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055507f958c71e470fd97af28579d832a7e3450d0df0c2bf36b188ffc7ecf861c7d66898133604051610c8e929190611b57565b60405180910390a150565b60016003811115610cd3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028481548110610d0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160009054906101000a900460ff166003811115610d64577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610da4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9b90611a7a565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff1660028481548110610df5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7490611a9a565b60405180910390fd5b6002808481548110610eb8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906006020160010160006101000a81548160ff02191690836003811115610f11577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550818160028581548110610f52577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016003019190610f709291906114f9565b507fd85bf6f93a6ef8dc579ef3c67af7247a51204e917acaba97426f75fe37022b3c83604051610fa09190611b3c565b60405180910390a1505050565b60028181548110610fbd57600080fd5b90600052602060002090600602016000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600301805461104590611d5f565b80601f016020809104026020016040519081016040528092919081815260200182805461107190611d5f565b80156110be5780601f10611093576101008083540402835291602001916110be565b820191906000526020600020905b8154815290600101906020018083116110a157829003601f168201915b5050505050908060040154908060050180546110d990611d5f565b80601f016020809104026020016040519081016040528092919081815260200182805461110590611d5f565b80156111525780601f1061112757610100808354040283529160200191611152565b820191906000526020600020905b81548152906001019060200180831161113557829003601f168201915b5050505050905087565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61118a61157f565b600282815481106111c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016040518060e0016040529081600082015481526020016001820160009054906101000a900460ff166003811115611232577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600381111561126a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81526020016001820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160038201805461132a90611d5f565b80601f016020809104026020016040519081016040528092919081815260200182805461135690611d5f565b80156113a35780601f10611378576101008083540402835291602001916113a3565b820191906000526020600020905b81548152906001019060200180831161138657829003601f168201915b50505050508152602001600482015481526020016005820180546113c690611d5f565b80601f01602080910402602001604051908101604052809291908181526020018280546113f290611d5f565b801561143f5780601f106114145761010080835404028352916020019161143f565b820191906000526020600020905b81548152906001019060200180831161142257829003601f168201915b5050505050815250509050919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b82805461147f90611d5f565b90600052602060002090601f0160209004810192826114a157600085556114e8565b82601f106114ba57805160ff19168380011785556114e8565b828001600101855582156114e8579182015b828111156114e75782518255916020019190600101906114cc565b5b5090506114f59190611620565b5090565b82805461150590611d5f565b90600052602060002090601f016020900481019282611527576000855561156e565b82601f1061154057803560ff191683800117855561156e565b8280016001018555821561156e579182015b8281111561156d578235825591602001919060010190611552565b5b50905061157b9190611620565b5090565b6040518060e0016040528060008152602001600060038111156115cb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001606081525090565b5b80821115611639576000816000905550600101611621565b5090565b600061165061164b84611c52565b611c2d565b90508281526020810184848401111561166857600080fd5b611673848285611d1d565b509392505050565b60008151905061168a81611f41565b92915050565b60008083601f8401126116a257600080fd5b8235905067ffffffffffffffff8111156116bb57600080fd5b6020830191508360018202830111156116d357600080fd5b9250929050565b600082601f8301126116eb57600080fd5b81356116fb84826020860161163d565b91505092915050565b60008135905061171381611f58565b92915050565b60006020828403121561172b57600080fd5b60006117398482850161167b565b91505092915050565b60006020828403121561175457600080fd5b600061176284828501611704565b91505092915050565b60008060006040848603121561178057600080fd5b600061178e86828701611704565b935050602084013567ffffffffffffffff8111156117ab57600080fd5b6117b786828701611690565b92509250509250925092565b600080604083850312156117d657600080fd5b60006117e485828601611704565b925050602083013567ffffffffffffffff81111561180157600080fd5b61180d858286016116da565b9150509250929050565b61182081611cb0565b82525050565b61182f81611cb0565b82525050565b61183e81611cc2565b82525050565b61184d81611d0b565b82525050565b61185c81611d0b565b82525050565b600061186d82611c83565b6118778185611c8e565b9350611887818560208601611d2c565b61189081611e4f565b840191505092915050565b60006118a682611c83565b6118b08185611c9f565b93506118c0818560208601611d2c565b6118c981611e4f565b840191505092915050565b60006118e1600c83611c9f565b91506118ec82611e60565b602082019050919050565b6000611904601d83611c9f565b915061190f82611e89565b602082019050919050565b6000611927601a83611c9f565b915061193282611eb2565b602082019050919050565b600061194a600683611c9f565b915061195582611edb565b602082019050919050565b600061196d601c83611c9f565b915061197882611f04565b602082019050919050565b600060e08301600083015161199b6000860182611a26565b5060208301516119ae6020860182611844565b5060408301516119c16040860182611817565b5060608301516119d46060860182611817565b50608083015184820360808601526119ec8282611862565b91505060a0830151611a0160a0860182611a26565b5060c083015184820360c0860152611a198282611862565b9150508091505092915050565b611a2f81611d01565b82525050565b611a3e81611d01565b82525050565b6000602082019050611a596000830184611826565b92915050565b6000602082019050611a746000830184611835565b92915050565b60006020820190508181036000830152611a93816118d4565b9050919050565b60006020820190508181036000830152611ab3816118f7565b9050919050565b60006020820190508181036000830152611ad38161191a565b9050919050565b60006020820190508181036000830152611af38161193d565b9050919050565b60006020820190508181036000830152611b1381611960565b9050919050565b60006020820190508181036000830152611b348184611983565b905092915050565b6000602082019050611b516000830184611a35565b92915050565b6000604082019050611b6c6000830185611a35565b611b796020830184611826565b9392505050565b600060e082019050611b95600083018a611a35565b611ba26020830189611853565b611baf6040830188611826565b611bbc6060830187611826565b8181036080830152611bce818661189b565b9050611bdd60a0830185611a35565b81810360c0830152611bef818461189b565b905098975050505050505050565b6000604082019050611c126000830185611a35565b8181036020830152611c24818461189b565b90509392505050565b6000611c37611c48565b9050611c438282611d91565b919050565b6000604051905090565b600067ffffffffffffffff821115611c6d57611c6c611e20565b5b611c7682611e4f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611cbb82611ce1565b9050919050565b60008115159050919050565b6000819050611cdc82611f2d565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611d1682611cce565b9050919050565b82818337600083830152505050565b60005b83811015611d4a578082015181840152602081019050611d2f565b83811115611d59576000848401525b50505050565b60006002820490506001821680611d7757607f821691505b60208210811415611d8b57611d8a611df1565b5b50919050565b611d9a82611e4f565b810181811067ffffffffffffffff82111715611db957611db8611e20565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f77726f6e67207374617475730000000000000000000000000000000000000000600082015250565b7f4f6e6c792074616b65722063616e207375626d69742061207461736b2e000000600082015250565b7f4f6e6c792063726561746f722063616e2066696e616c697a6521000000000000600082015250565b7f4e6f205552490000000000000000000000000000000000000000000000000000600082015250565b7f43726561746f722063616e27742074616b6520746865207461736b2e00000000600082015250565b60048110611f3e57611f3d611dc2565b5b50565b611f4a81611cb0565b8114611f5557600080fd5b50565b611f6181611d01565b8114611f6c57600080fd5b5056fea2646970667358221220eb0917d82c3cf78628d37fa932efd9908ef2eab80eab7b7aeca96491f42751a064736f6c63430008040033",
};