const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
// 1.Credit transactions
const credits=transactions.filter(t=>t.type==="credit");
console.log(credits);
// 2.Amounts only
const amounts=transactions.map(t=>t.amount);
console.log(amounts);
// 3.Final balance
const balance=transactions.reduce((total,t) =>t.type==="credit" ?total + t.amount:total-t.amount,0);
console.log(balance);
// 4.First debit
console.log(transactions.find(t=>t.type==="debit"));
// 5.Index of 10000
console.log(transactions.findIndex(t=>t.amount===10000));
