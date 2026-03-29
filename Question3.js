let bank = {
  accountHolder: "Ngozi Adeyemi",
  accountNumber: "0123456789",
  balance: 250000,
  transactions: [5000, -12000, 30000, -8500, 15000]
};
let credit= 0
let debit= 0

console.log(bank.accountHolder)

for(i=0; i<bank.transactions.length; i++){

  if(bank.transactions[i]>0){
    credit= bank.transactions[i]
    console.log(`Positive ₦${credit}`)
  } else if (debit= bank.transactions[i]){
    console.log(`Negative: ₦${debit}`)
  } else(console.log(`Invalid`))

 bank.balance= bank.balance+ (credit + debit)
}
console.log(`The final balance after al  transactions is ₦${bank.balance}`)