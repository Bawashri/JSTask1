console.log("Task-3(b)");

let score = 0;

let q1 = prompt("Q1: What is 2 + 2?\n1. 3\n2. 4\n3. 5");
switch (q1) {
  case "2":
    score++;
    break;
  default:
    break;
}

let q2 = prompt("Q2: What is the chemical formula for water?\n1. H2O\n2. O2\n3. CO2");
switch (q2) {
  case "1":
    score++;
    break;
  default:
    break;
}

let q3 = prompt("Q3: What is the capital of Italy?\n1. London\n2. Paris\n3. Rome");
switch (q3) {
  case "3":
    score++;
    break;
  default:
    break;
}

alert("Your Final Score: " + score + "/3");

