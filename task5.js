console.log("Task-3(a)");

let balance = 1000; 
let pin = prompt("Enter your PIN:");

if (pin === "1234") {
    alert("PIN correct!");

    let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

    if (choice === "1") {
       
        let amount = parseInt(prompt("Enter amount to withdraw:"));
        if (amount <= balance) {
            balance -= amount;
            alert("Withdrawal successful! New balance: " + balance);
        } else {
            alert("Insufficient balance!");
        }

    } else if (choice === "2") {
        
        let amount = parseInt(prompt("Enter amount to deposit:"));
        balance += amount;
        alert("Deposit successful! New balance: " + balance);

    } else if (choice === "3") {
        
        alert("Your current balance is: " + balance);

    } else {
        alert("Invalid choice!");
    }

} else {
    alert("Incorrect PIN!");
}

