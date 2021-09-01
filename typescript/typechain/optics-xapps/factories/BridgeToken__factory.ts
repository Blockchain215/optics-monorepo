/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeToken, BridgeTokenInterface } from "../BridgeToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amnt",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_newSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_newDecimals",
        type: "uint8",
      },
    ],
    name: "setDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9608052610120604052600160e052603160f81b610100527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660a05261190160f01b60c05234801561007057600080fd5b5060805160a05160c05160f01c61214c6100a560003980610f30525080611356525080610c705280610ecc525061214c6000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80638129fc1c116100d8578063a457c2d71161008c578063dd62ed3e11610066578063dd62ed3e146105c5578063f2fde38b14610600578063f698da251461063357610182565b8063a457c2d7146104f5578063a9059cbb1461052e578063d505accf1461056757610182565b806395d89b41116100bd57806395d89b41146104ac578063982aaf6b146104b45780639dc29fac146104bc57610182565b80638129fc1c146104735780638da5cb5b1461047b57610182565b8063395093511161013a57806370a082311161011457806370a0823114610405578063715018a6146104385780637ecebe001461044057610182565b806339509351146102cc57806340c10f1914610305578063654935f41461034057610182565b806318160ddd1161016b57806318160ddd1461025157806323b872dd1461026b578063313ce567146102ae57610182565b806306fdde0314610187578063095ea7b314610204575b600080fd5b61018f61063b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c95781810151838201526020016101b1565b50505050905090810190601f1680156101f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61023d6004803603604081101561021a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106ef565b604080519115158252519081900360200190f35b610259610705565b60408051918252519081900360200190f35b61023d6004803603606081101561028157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561070b565b6102b6610781565b6040805160ff9092168252519081900360200190f35b61023d600480360360408110156102e257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561078a565b61033e6004803603604081101561031b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107cd565b005b61033e6004803603606081101561035657600080fd5b81019060208101813564010000000081111561037157600080fd5b82018360208201111561038357600080fd5b803590602001918460018302840111640100000000831117156103a557600080fd5b9193909290916020810190356401000000008111156103c357600080fd5b8201836020820111156103d557600080fd5b803590602001918460018302840111640100000000831117156103f757600080fd5b91935091503560ff16610883565b6102596004803603602081101561041b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661097d565b61033e61098e565b6102596004803603602081101561045657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610aa5565b61033e610ab7565b610483610bd3565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61018f610bef565b610259610c6e565b61033e600480360360408110156104d257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610c92565b61023d6004803603604081101561050b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610d44565b61023d6004803603604081101561054457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610da0565b61033e600480360360e081101561057d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610dad565b610259600480360360408110156105db57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166110da565b61033e6004803603602081101561061657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611112565b6102596112b4565b60688054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106e55780601f106106ba576101008083540402835291602001916106e5565b820191906000526020600020905b8154815290600101906020018083116106c857829003601f168201915b5050505050905090565b60006106fc3384846113aa565b50600192915050565b60675490565b60006107188484846114f1565b6107778433610772856040518060600160405280602881526020016120606028913973ffffffffffffffffffffffffffffffffffffffff8a16600090815260666020908152604080832033845290915290205491906116c3565b6113aa565b5060019392505050565b606a5460ff1690565b33600081815260666020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916106fc9185906107729086611774565b6107d56117ef565b73ffffffffffffffffffffffffffffffffffffffff166107f3610bd3565b73ffffffffffffffffffffffffffffffffffffffff161461087557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61087f82826117f3565b5050565b61088b6117ef565b73ffffffffffffffffffffffffffffffffffffffff166108a9610bd3565b73ffffffffffffffffffffffffffffffffffffffff161461092b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61093760688686611ebf565b5061094460698484611ebf565b50606a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff9290921691909117905550505050565b600061098882611926565b92915050565b6109966117ef565b73ffffffffffffffffffffffffffffffffffffffff166109b4610bd3565b73ffffffffffffffffffffffffffffffffffffffff1614610a3657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60335460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b606b6020526000908152604090205481565b600054610100900460ff1680610ad05750610ad061194e565b80610ade575060005460ff16155b610b33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612032602e913960400191505060405180910390fd5b600054610100900460ff16158015610b9957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610ba161195f565b8015610bd057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b60698054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106e55780601f106106ba576101008083540402835291602001916106e5565b7f000000000000000000000000000000000000000000000000000000000000000081565b610c9a6117ef565b73ffffffffffffffffffffffffffffffffffffffff16610cb8610bd3565b73ffffffffffffffffffffffffffffffffffffffff1614610d3a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61087f8282611a51565b60006106fc3384610772856040518060600160405280602581526020016120f26025913933600090815260666020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d16845290915290205491906116c3565b60006106fc3384846114f1565b83421115610e1c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8716610e9e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332305065726d69743a206f776e6572207a65726f206164647265737300604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8088166000818152606b602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152608084018a905260a0840185905260c08085018a90528151808603909101815260e090940190528251920191909120907f0000000000000000000000000000000000000000000000000000000000000000610f576112b4565b83604051602001808461ffff1660f01b81526002018381526020018281526020019350505050604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610ff1573d6000803e3d6000fd5b5050506020604051035190508a73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461109757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8b166000908152606b602052604090206001850190556110cd8b8b8b6113aa565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260666020908152604080832093909416825291909152205490565b61111a6117ef565b73ffffffffffffffffffffffffffffffffffffffff16611138610bd3565b73ffffffffffffffffffffffffffffffffffffffff16146111ba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611226576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611fc46026913960400191505060405180910390fd5b60335460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000804690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6068600001604051808280546001816001161561010002031660029004801561133b5780601f1061131957610100808354040283529182019161133b565b820191906000526020600020905b815481529060010190602001808311611327575b505060408051918290038220602080840196909652828201527f0000000000000000000000000000000000000000000000000000000000000000606083015260808201959095523060a0808301919091528551808303909101815260c090910190945250508151910120905090565b73ffffffffffffffffffffffffffffffffffffffff8316611416576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806120ce6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611482576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611fea6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260666020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff831661155d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806120a96025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115c9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611f7f6023913960400191505060405180910390fd5b6115d4838383611b9b565b61161e8160405180606001604052806026815260200161200c6026913973ffffffffffffffffffffffffffffffffffffffff861660009081526065602052604090205491906116c3565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260656020526040808220939093559084168152205461165a9082611774565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526065602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561176c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611731578181015183820152602001611719565b50505050905090810190601f16801561175e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156117e857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff821661187557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61188160008383611b9b565b60675461188e9082611774565b60675573ffffffffffffffffffffffffffffffffffffffff82166000908152606560205260409020546118c19082611774565b73ffffffffffffffffffffffffffffffffffffffff831660008181526065602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526065602052604090205490565b600061195930611ba0565b15905090565b600054610100900460ff1680611978575061197861194e565b80611986575060005460ff16155b6119db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612032602e913960400191505060405180910390fd5b600054610100900460ff16158015611a4157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611a49611ba6565b610ba1611cb8565b73ffffffffffffffffffffffffffffffffffffffff8216611abd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806120886021913960400191505060405180910390fd5b611ac982600083611b9b565b611b1381604051806060016040528060228152602001611fa26022913973ffffffffffffffffffffffffffffffffffffffff851660009081526065602052604090205491906116c3565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260656020526040902055606754611b469082611e48565b60675560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b505050565b3b151590565b600054610100900460ff1680611bbf5750611bbf61194e565b80611bcd575060005460ff16155b611c22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612032602e913960400191505060405180910390fd5b600054610100900460ff16158015610ba157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790558015610bd057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680611cd15750611cd161194e565b80611cdf575060005460ff16155b611d34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612032602e913960400191505060405180910390fd5b600054610100900460ff16158015611d9a57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6000611da46117ef565b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610bd057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600082821115611eb957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282611ef55760008555611f59565b82601f10611f2c578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555611f59565b82800160010185558215611f59579182015b82811115611f59578235825591602001919060010190611f3e565b50611f65929150611f69565b5090565b5b80821115611f655760008155600101611f6a56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207c78cdb734e441a11b155765ca49705ce4c15bdfcc9bec64e7129a6a4c15c27e64736f6c63430007060033";

export class BridgeToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeToken> {
    return super.deploy(overrides || {}) as Promise<BridgeToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgeToken {
    return super.attach(address) as BridgeToken;
  }
  connect(signer: Signer): BridgeToken__factory {
    return super.connect(signer) as BridgeToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeTokenInterface {
    return new utils.Interface(_abi) as BridgeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeToken {
    return new Contract(address, _abi, signerOrProvider) as BridgeToken;
  }
}
