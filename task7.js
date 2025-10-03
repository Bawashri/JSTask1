console.log("Task-3(c)");

let income = Number(prompt("Enter your Monthly Income:"));

let rent = Number(prompt("Enter your Rent expense:"));
let groceries = Number(prompt("Enter your Groceries expense:"));
let transport = Number(prompt("Enter your Transport expense:"));

let totalExpenses = rent + groceries + transport;

let remaining = income - totalExpenses;
let percentageSpent = (totalExpenses / income) * 100;

let message = "";
if (totalExpenses > income) {
  message = "You are overspending!";
} else {
  message = "You are within budget.";
}

alert(
  "Total Expenses: " + totalExpenses +
  "\nRemaining Balance: " + remaining +
  "\nPercentage Spent: " + percentageSpent.toFixed(2) + "%" +
  "\nMessage: " + message
);
