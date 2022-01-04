const { Blockchain, Transaction } = require("./blockchain");

let danioBlockChain = new Blockchain();
danioBlockChain.createTransaction(new Transaction("a1", "a2", 100));
danioBlockChain.createTransaction(new Transaction("a2", "a1", 25));

console.log("Mining");
danioBlockChain.minePendingTransactions("miningAddress");

danioBlockChain.minePendingTransactions("miningAddress");
console.log(
    "Balance of miner is ",
    danioBlockChain.getBalanceOfAddress("miningAddress")
);
