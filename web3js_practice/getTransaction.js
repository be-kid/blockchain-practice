const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/25c651599f9e4ec0b18082e9e7d3e9f4";

const web3 = new Web3(rpcURL);

const txId =
  "0x1e0e79da58de1efb486748ef4b6e893e1d1bc7c0799d348a3df50f80982dd3cf";

// web3.eth.getTransaction(txId).then((obj) => {
//   console.log(obj);
// });

web3.eth.getTransactionReceipt(txId).then((obj) => {
  console.log(obj);
});
