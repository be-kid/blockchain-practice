const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/25c651599f9e4ec0b18082e9e7d3e9f4";

const web3 = new Web3(rpcURL);

const account = "0x94b1fC0dEb16Fa3bD3ecaDf0b1275a13929B50E8";

const startBlock = "12151175";
const endBlock = "12151177";

const getTransactionsByAccount = (account, startBlock, endBlock) => {
  /*
  let participate = [];
  for (let blockNum = startBlock; blockNum <= endBlock; blockNum++) {
    web3.eth.getBlock(blockNum).then((obj) => {
      obj.transactions.forEach((transaction) => {
        web3.eth.getTransaction(transaction).then((obj) => {
          if (obj.from === account || obj.to === account) {
            console.log(transaction);
            participate.push(transaction);
          }
        });
      });
    });
  }
  // 찾아는지는데 비동기처리때문에 결과를 제대로 출력하지 못함
  */

  const result = [];
  (async function () {
    for await (let txs of asyncGenerator(startBlock, endBlock)) {
      for await (let tx of asyncTxGenerator(txs, account)) {
        if (tx !== undefined) {
          result.push(tx);
        }
      }
    }
  })().then(() => {
    console.log(result);
  });
};

async function* asyncGenerator(start, end) {
  while (start <= end) {
    yield web3.eth.getBlock(start).then((obj) => {
      return obj.transactions;
    });
    start++;
  }
}

async function* asyncTxGenerator(txs, account) {
  let i = 0;
  while (i < txs.length) {
    yield web3.eth.getTransaction(txs[i]).then((obj) => {
      if (obj.from === account || obj.to === account) {
        return txs[i];
      } else {
        return undefined;
      }
    });
    i++;
  }
}

getTransactionsByAccount(account, startBlock, endBlock);

// start 블록에서 end 블록 범위 내에 있는 블록 중에서
// account 계정이 참여한 트랜잭션만 추출
// 트랜잭션들로 구성된 배열을 반환

// getBlock 으로 블록 내 트랜잭션들을 가져오고,
// 각 트랜잭션을 검사해서 account가 참여했는지 확인
