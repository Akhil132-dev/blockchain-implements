const EC = require('elliptic').ec;
const { Blockchain, Transaction } = require('./BlockChain');

const ec = new EC('secp256k1');
const mykey = ec.keyFromPrivate('1980133456aaca727c594a89313ec40006f4b772411548596f0c4b3038790a46')
const mywalleteAddress = mykey.getPublic('hex');
let savemoney = new Blockchain();
const tx1 = new Transaction(mywalleteAddress, 'puclic key', 10);
tx1.signTransaction(mykey);
savemoney.addTransaction(tx1);
savemoney.minePendingTransactions(mywalleteAddress);
console.log(savemoney.getBalanceOfAddress(mywalleteAddress))





