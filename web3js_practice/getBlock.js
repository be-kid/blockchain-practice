const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/25c651599f9e4ec0b18082e9e7d3e9f4";

const web3 = new Web3(rpcURL);

const blockNum = "12151177";

web3.eth.getBlock(blockNum).then((obj) => {
  console.log(obj);
});
