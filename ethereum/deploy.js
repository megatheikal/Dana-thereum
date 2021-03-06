const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "# PUT YOUR OWN SECRET RECOVERY PHRASE OF METAMASK",
  "https://rinkeby.infura.io/v3/5a730e2a0e3c41b58edc4ff8ed27c4e8"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Deploying contract from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: "0x" + compiledFactory.evm.bytecode.object })
    .send({ gas: "5000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};

deploy();
