/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceRouter,
  GovernanceRouterInterface,
} from "../GovernanceRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "previousRouter",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRouter",
        type: "bytes32",
      },
    ],
    name: "SetRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "previousGovernorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newGovernorDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "TransferGovernor",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callRemote",
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
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    name: "governorDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [
      {
        internalType: "bytes",
        name: "_ret",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "routers",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouterDuringSetup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "transferGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620031bb380380620031bb83398101604081905262000034916200004a565b60e01b6001600160e01b03191660805262000077565b6000602082840312156200005c578081fd5b815163ffffffff8116811462000070578182fd5b9392505050565b60805160e01c613117620000a460003980610885528061099152806109c2528061141352506131176000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806356d5d4751161008c5780638d3638f4116100665780638d3638f4146101cb578063c4d66de8146101d3578063db2021ae146101e6578063e8c6f83a146101f9576100ea565b806356d5d4751461018557806366cf8fab146101a55780637d8dfc33146101b8576100ea565b806341bdc8b5116100c857806341bdc8b5146101355780634626abee1461014a5780634fedbbb51461015d5780635585416c14610170576100ea565b80630c340a24146100ef5780632ead72f61461010d5780633339df961461012d575b600080fd5b6100f761020c565b6040516101049190612c96565b60405180910390f35b61012061011b366004612a21565b610228565b6040516101049190612cb7565b6100f761023a565b610148610143366004612971565b61025c565b005b61014861015836600461298d565b610303565b61014861016b366004612a91565b61039c565b610178610525565b6040516101049190612e60565b610198610193366004612b0f565b61054b565b6040516101049190612cce565b6101786101b3366004612a09565b6107ea565b6101486101c6366004612ae4565b610824565b610178610883565b6101486101e1366004612971565b6108a7565b6101486101f4366004612a59565b610af8565b610148610207366004612ae4565b610b92565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205481565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1633146102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612e29565b60405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610354576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612e29565b60005b818110156103975761038e83838381811061036e57fe5b90506020028101906103809190612ead565b61038990612f64565b610c04565b50600101610357565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612e29565b60006103f884610cc7565b9050600061040e6104098486612f04565b610d19565b9050600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561047857600080fd5b505afa15801561048c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b091906129ed565b73ffffffffffffffffffffffffffffffffffffffff1663d34686398684846040518463ffffffff1660e01b81526004016104ec93929190612e71565b600060405180830381600087803b15801561050657600080fd5b505af115801561051a573d6000803e3d6000fd5b505050505050505050565b600054760100000000000000000000000000000000000000000000900463ffffffff1681565b6000546040517f5190bc5300000000000000000000000000000000000000000000000000000000815260609162010000900473ffffffffffffffffffffffffffffffffffffffff1690635190bc53906105a8903390600401612c96565b60206040518083038186803b1580156105c057600080fd5b505afa1580156105d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f891906129cd565b61062e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612d4d565b838361063a8282610eee565b610670576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612ce1565b600061067c8582610f40565b90506106a97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216610f64565b156106e9576106e16106dc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316610fbf565b61100d565b9350506107e1565b6107147fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166110ba565b1561074c576106e16107477fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611118565b611132565b6107777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000082166111d9565b156107af576106e16107aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166111e2565b6111fc565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612df2565b50509392505050565b600381815481106107fa57600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff163314610875576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612e29565b61087f828261126f565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600054610100900460ff16806108c057506108c0611300565b806108ce575060005460ff16155b610923576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612ff2602e913960400191505060405180910390fd5b600054610100900460ff1615801561098957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b3360016109b77f00000000000000000000000000000000000000000000000000000000000000008383611311565b6109c08461025c565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b815260040160206040518083038186803b158015610a4f57600080fd5b505afa158015610a63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a879190612a3d565b63ffffffff1614610ac4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612d18565b5050801561087f57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610b49576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612e29565b6000610b5483611411565b9050610b61838383611311565b8015610b6d575061087f565b6000610b8184610b7c85611440565b611459565b9050610b8c81611486565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610be3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612e29565b610bed828261126f565b6000610bf9838361167d565b905061039781611486565b60606000610c1583600001516116a5565b905060008173ffffffffffffffffffffffffffffffffffffffff168460200151604051610c429190612bee565b6000604051808303816000865af19150503d8060008114610c7f576040519150601f19603f3d011682016040523d82523d6000602084013e610c84565b606091505b509350905080610cc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612d84565b5050919050565b63ffffffff811660009081526002602052604090205480610d14576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90612dbb565b919050565b805160609060006002820167ffffffffffffffff81118015610d3a57600080fd5b50604051908082528060200260200182016040528015610d64578160200160208202803683370190505b509050610db260006001604051602001610d7e9190612c0a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290610f40565b81600081518110610dbf57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000909216602092830291909101820152604051610e0591600091610d7e91869101612c66565b81600181518110610e1257fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092166020928302919091019091015260005b82811015610edc576000858281518110610e5c57fe5b602002602001015190506000610e8f600083600001518460200151518560200151604051602001610d7e93929190612bc1565b905080846002850181518110610ea157fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000909216602092830291909101909101525050600101610e46565b50610ee6816116a8565b949350505050565b6000805463ffffffff84811676010000000000000000000000000000000000000000000090920416148015610f37575063ffffffff831660009081526002602052604090205482145b90505b92915050565b815160009060208401610f5b64ffffffffff851682846116f8565b95945050505050565b60006001610f7183611759565b60ff16148015610f3a57506040610fa97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611789565b6bffffffffffffffffffffffff16101592915050565b6000610fca82610f64565b1561100557610ffe60015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000084169061179d565b9050610d14565b610f3a6117c3565b6060816001611040815b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416906117e7565b50600061106e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611967565b905060005b81518110156110a15761109882828151811061108b57fe5b6020026020010151610c04565b50600101611073565b5050604080516020810190915260008152949350505050565b600060025b60ff166110cb83611759565b60ff16148015610f3a575060256111037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611789565b6bffffffffffffffffffffffff161492915050565b6000611123826110ba565b1561100557610ffe6002610fd5565b606081600261114081611017565b50600061116e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611b0a565b905060006111a56111a07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611b3b565b6116a5565b905060006111b283611411565b90506111bf838383611311565b505060408051602081019091526000815295945050505050565b600060036110bf565b60006111ed826111d9565b1561100557610ffe6003610fd5565b606081600361120a81611017565b5060006112387fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611b0a565b905060006112677fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611b3b565b90506110a182825b63ffffffff8216600081815260026020526040908190205490519091907fe1cc453e5e6d48a5e3dd7dc6c72117211d2bea20fbb91fd980ebc3e7f73fe546906112bb9084908690612cc0565b60405180910390a2816112d7576112d183611b6c565b5061087f565b806112e5576112e583611c13565b5063ffffffff91909116600090815260026020526040902055565b600061130b30611c73565b15905090565b806113215761131f83610cc7565b505b60008161132f576000611331565b825b600080547fffffffffffff00000000ffffffffffffffffffffffffffffffffffffffffffff1676010000000000000000000000000000000000000000000063ffffffff88811682029290921792839055600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8681169182179283905560405196975090959116937f4daaa39e87dee84708195369c30e97baa0665dc8562ac10535a0f3a9329943aa936114039390910416908990612e96565b60405180910390a350505050565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff90811691161490565b73ffffffffffffffffffffffffffffffffffffffff1690565b6060610f3761148161147c600060028787604051602001610d7e93929190612c1f565b611c79565b611cae565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114ef57600080fd5b505afa158015611503573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152791906129ed565b905060005b60035481101561039757600063ffffffff166003828154811061154b57fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff1614611675578173ffffffffffffffffffffffffffffffffffffffff1663d34686396003838154811061159d57fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1660026000600386815481106115d457fe5b6000918252602080832060088304015463ffffffff6004600790941684026101000a909104168452830193909352604091820190205490517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526116429392899101612e71565b600060405180830381600087803b15801561165c57600080fd5b505af1158015611670573d6000803e3d6000fd5b505050505b60010161152c565b6060610f376114816116a0600060038787604051602001610d7e93929190612c1f565b611cf2565b90565b60405160609060006116bd8460208401611d00565b905060006116ca82611789565b6bffffffffffffffffffffffff16905060006116e583611d78565b9184525082016020016040525092915050565b6000806117058484611d8c565b9050604051811115611715575060005b80611743577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611752565b61174e858585611dfe565b9150505b9392505050565b6000610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826001611e11565b60181c6bffffffffffffffffffffffff1690565b60d81b7affffffffffffffffffffffffffffffffffffffffffffffffffffff9091161790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000090565b60006117f38383611e32565b61196057600061181161180585611e54565b64ffffffffff16611e5a565b91505060006118268464ffffffffff16611e5a565b604080517f5479706520617373657274696f6e206661696c65642e20476f742030780000006020808301919091527fffffffffffffffffffff0000000000000000000000000000000000000000000060b088811b8216603d8501527f2e20457870656374656420307800000000000000000000000000000000000000604785015285901b1660548301528251603e818403018152605e8301938490527f08c379a000000000000000000000000000000000000000000000000000000000909352606282018181528351608284015283519496509294508493839260a2019185019080838360005b8381101561192557818101518382015260200161190d565b50505050905090810190601f1680156119525780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5090919050565b606060006119997fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416600180611e11565b90506000611a0a6002806119ce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611789565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816929190611f2e565b905060008260ff1667ffffffffffffffff81118015611a2857600080fd5b50604051908082528060200260200182016040528015611a6257816020015b611a4f612825565b815260200190600190039081611a475790505b50905060005b6000611a957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611789565b6bffffffffffffffffffffffff161115611b0157611ab283611fbe565b828281518110611abe57fe5b602090810291909101015152611ad383611fee565b828281518110611adf57fe5b602002602001015160200181905250611af78361202d565b9250600101611a68565b50949350505050565b6000610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660016004611e11565b6000610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600560206120b8565b63ffffffff811660009081526002602052604081208190555b60035481101561087f578163ffffffff1660038281548110611ba357fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff161415611c085760038181548110611bda57fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff021916905550611c10565b600101611b85565b50565b600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6008820401805460079092166004026101000a63ffffffff818102199093169390921691909102919091179055565b3b151590565b6000610f3a611c8783611118565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016612226565b6060600080611cbc84611789565b6bffffffffffffffffffffffff1690506040519150819250611ce184836020016122a0565b508181016020016040529052919050565b6000610f3a611c87836111e2565b600060405182811115611d135760206060fd5b506000805b8451811015611d6b576000858281518110611d2f57fe5b60200260200101519050611d45818487016122a0565b50611d4f81611789565b6bffffffffffffffffffffffff16929092019150600101611d18565b50610ee660008483611dfe565b6000611d83826123cc565b60200292915050565b81810182811015610f3a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60008160200360080260ff16611e288585856120b8565b901c949350505050565b60008164ffffffffff16611e4584611e54565b64ffffffffff16149392505050565b60d81c90565b600080601f5b600f8160ff161115611ec25760ff600882021684901c611e7f81612400565b61ffff16841793508160ff16601014611e9a57601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611e60565b50600f5b60ff8160ff161015611f285760ff600882021684901c611ee581612400565b61ffff16831792508160ff16600014611f0057601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611ec6565b50915091565b600080611f3a86612430565b6bffffffffffffffffffffffff169050611f5386612444565b611f6785611f618489611d8c565b90611d8c565b1115611f96577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610ee6565b611fa08186611d8c565b9050611fb48364ffffffffff1682866116f8565b9695505050505050565b6000610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083168260206120b8565b6060610f3a61148160406120018561246e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861691906004611f2e565b600081600161203b81611017565b5060006120478561246e565b6040019050610f5b818061207c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611789565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916929190611f2e565b600060ff82166120ca57506000611752565b6120d384611789565b6bffffffffffffffffffffffff166120ee8460ff8516611d8c565b11156121905761212f61210085612430565b6bffffffffffffffffffffffff1661211786611789565b6bffffffffffffffffffffffff16858560ff1661249e565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815283516024840152835190928392604490910191908501908083836000831561192557818101518382015260200161190d565b60208260ff1611156121ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180613020603a913960400191505060405180910390fd5b6008820260006121fc86612430565b6bffffffffffffffffffffffff1690506000612217836125f9565b91909501511695945050505050565b600061223182612642565b61229c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015290519081900360640190fd5b5090565b60006122ab8361267f565b612300576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061305a6028913960400191505060405180910390fd5b61230983612642565b61235e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180613082602b913960400191505060405180910390fd5b600061236984611789565b6bffffffffffffffffffffffff169050600061238485612430565b6bffffffffffffffffffffffff16905060006040519050848111156123a95760206060fd5b8285848460045afa50611fb46123be87611e54565b64ffffffffff168685611dfe565b600060206123f260206123de85611789565b6bffffffffffffffffffffffff1690611d8c565b816123f957fe5b0492915050565b600061241260048360ff16901c612691565b60ff161760081b62ffff001661242782612691565b60ff1617919050565b60781c6bffffffffffffffffffffffff1690565b600061244f82611789565b61245883612430565b016bffffffffffffffffffffffff169050919050565b6000610f3a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166020806120b8565b606060006124ab86611e5a565b91505060006124b986611e5a565b91505060006124c786611e5a565b91505060006124d586611e5a565b9150508383838360405160200180806130ad603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612fd182397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b600061264d82611e54565b64ffffffffff1664ffffffffff141561266857506000610d14565b600061267383612444565b60405110199392505050565b600061268a826127fd565b1592915050565b600060f08083179060ff821614156126ad576030915050610d14565b8060ff1660f114156126c3576031915050610d14565b8060ff1660f214156126d9576032915050610d14565b8060ff1660f314156126ef576033915050610d14565b8060ff1660f41415612705576034915050610d14565b8060ff1660f5141561271b576035915050610d14565b8060ff1660f61415612731576036915050610d14565b8060ff1660f71415612747576037915050610d14565b8060ff1660f8141561275d576038915050610d14565b8060ff1660f91415612773576039915050610d14565b8060ff1660fa1415612789576061915050610d14565b8060ff1660fb141561279f576062915050610d14565b8060ff1660fc14156127b5576063915050610d14565b8060ff1660fd14156127cb576064915050610d14565b8060ff1660fe14156127e1576065915050610d14565b8060ff1660ff14156127f7576066915050610d14565b50919050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b60408051808201909152600081526060602082015290565b60008083601f84011261284e578182fd5b50813567ffffffffffffffff811115612865578182fd5b602083019150836020808302850101111561287f57600080fd5b9250929050565b600082601f830112612896578081fd5b813567ffffffffffffffff8111156128aa57fe5b6128db60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612ee0565b8181528460208386010111156128ef578283fd5b816020850160208301379081016020019190915292915050565b60006040828403121561291a578081fd5b6040516040810167ffffffffffffffff828210818311171561293857fe5b8160405282935084358352602085013591508082111561295757600080fd5b5061296485828601612886565b6020830152505092915050565b600060208284031215612982578081fd5b813561175281612f9c565b6000806020838503121561299f578081fd5b823567ffffffffffffffff8111156129b5578182fd5b6129c18582860161283d565b90969095509350505050565b6000602082840312156129de578081fd5b81518015158114611752578182fd5b6000602082840312156129fe578081fd5b815161175281612f9c565b600060208284031215612a1a578081fd5b5035919050565b600060208284031215612a32578081fd5b813561175281612fbe565b600060208284031215612a4e578081fd5b815161175281612fbe565b60008060408385031215612a6b578182fd5b8235612a7681612fbe565b91506020830135612a8681612f9c565b809150509250929050565b600080600060408486031215612aa5578081fd5b8335612ab081612fbe565b9250602084013567ffffffffffffffff811115612acb578182fd5b612ad78682870161283d565b9497909650939450505050565b60008060408385031215612af6578182fd5b8235612b0181612fbe565b946020939093013593505050565b600080600060608486031215612b23578283fd5b8335612b2e81612fbe565b925060208401359150604084013567ffffffffffffffff811115612b50578182fd5b612b5c86828701612886565b9150509250925092565b60008151808452612b7e816020860160208601612f70565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60058110612bba57fe5b60f81b9052565b60008482528360208301528251612bdf816040850160208701612f70565b91909101604001949350505050565b60008251612c00818460208701612f70565b9190910192915050565b6000612c168284612bb0565b50600101919050565b6000612c2b8286612bb0565b5060e09290921b7fffffffff000000000000000000000000000000000000000000000000000000001660018301526005820152602501919050565b60f89190911b7fff0000000000000000000000000000000000000000000000000000000000000016815260010190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b90815260200190565b918252602082015260400190565b600060208252610f376020830184612b66565b6020808252600f908201527f21676f7665726e6f72526f757465720000000000000000000000000000000000604082015260600190565b6020808252818101527f58417070436f6e6e656374696f6e4d616e616765722062616420646f6d61696e604082015260600190565b60208082526008908201527f217265706c696361000000000000000000000000000000000000000000000000604082015260600190565b6020808252600b908201527f63616c6c206661696c6564000000000000000000000000000000000000000000604082015260600190565b60208082526007908201527f21726f7574657200000000000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f2176616c6964206d657373616765207479706500000000000000000000000000604082015260600190565b6020808252601a908201527f43616c6c6572206973206e6f742074686520676f7665726e6f72000000000000604082015260600190565b63ffffffff91909116815260200190565b600063ffffffff8516825283602083015260606040830152610f5b6060830184612b66565b63ffffffff92831681529116602082015260400190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112612c00578182fd5b60405181810167ffffffffffffffff81118282101715612efc57fe5b604052919050565b600067ffffffffffffffff831115612f1857fe5b6020612f278182860201612ee0565b8481528181019084845b87811015612f5857612f463683358901612909565b84529284019290840190600101612f31565b50909695505050505050565b6000610f3a3683612909565b60005b83811015612f8b578181015183820152602001612f73565b83811115610b8c5750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114611c1057600080fd5b63ffffffff81168114611c1057600080fdfe2e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220ea9fa56f3caec551a60d5f00c0df228b95006eafcfaf4490561459152d3c78e464736f6c63430007060033";

export class GovernanceRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceRouter> {
    return super.deploy(
      _localDomain,
      overrides || {}
    ) as Promise<GovernanceRouter>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): GovernanceRouter {
    return super.attach(address) as GovernanceRouter;
  }
  connect(signer: Signer): GovernanceRouter__factory {
    return super.connect(signer) as GovernanceRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceRouterInterface {
    return new utils.Interface(_abi) as GovernanceRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceRouter {
    return new Contract(address, _abi, signerOrProvider) as GovernanceRouter;
  }
}
