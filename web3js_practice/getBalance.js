const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/25c651599f9e4ec0b18082e9e7d3e9f4";

const web3 = new Web3(rpcURL);

const account = "0x94b1fC0dEb16Fa3bD3ecaDf0b1275a13929B50E8";

web3.eth
  .getBalance(account)
  .then((bal) => {
    console.log(`지갑 ${account}의 잔액은... ${bal} wei 입니다.`);
    return web3.utils.fromWei(bal, "ether");
  })
  .then((eth) => {
    console.log(`이더 단위로는 ${eth} ETH 입니다.`);
  });
