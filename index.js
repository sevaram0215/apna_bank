
let available = document.getElementById("span");
let amountInput = document.getElementById("input");
let creditBtn = document.getElementById("deposit");
let debitBtn = document.getElementById("withdraw");


let balance = 0;

function creditBalance() {
let amount = Number(amountInput.value);

if (amount>0) {
 balance= amount+balance
 available.innerHTML = balance;
 alert("Success");
} else {
 alert("Please enter an amount");
}
amountInput.value = "";
}

function debitBalance() {
let amount = Number(amountInput.value);
 if (balance>0 && balance>=amount) {
   balance=balance-amount
   available.innerHTML = balance;
   alert("Withdraw Successfully")
 } else {
   alert("Insufficient balance");
 }
 amountInput.value = "";
}

creditBtn.addEventListener("click", creditBalance);
debitBtn.addEventListener("click", debitBalance);
