
let student = { name: "", birthYear: "", city: "" };

function saveProfile() {
  try {
    let name = document.getElementById("name").value.trim();
    let birthYear = document.getElementById("birthYear").value.trim();
    let city = document.getElementById("city").value.trim();

    if (!name || !birthYear || !city) throw "All fields are required!";
    if (isNaN(birthYear) || birthYear.length !== 4) throw "Enter a valid year!";

    student.name = name;
    student.birthYear = Number(birthYear);
    student.city = city;

    document.getElementById("profileOutput").innerText = 
      `Profile Saved: ${student.name}, ${student.city}`;
  } catch (err) {
    document.getElementById("profileOutput").innerText = "Error: " + err;
  }
}

function checkAge() {
  try {
    if (!student.birthYear) throw "Save profile first!";
    let currentYear = new Date().getFullYear();
    let age = currentYear - student.birthYear;
    let eligibility = age >= 18 ? "Eligible (18+)" : "Not Eligible (Under 18)";
    document.getElementById("ageOutput").innerText = 
      `Age: ${age} → ${eligibility}`;
  } catch (err) {
    document.getElementById("ageOutput").innerText = "Error: " + err;
  }
}

function showGreeting() {
  let hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  let name = student.name || "Student";
  document.getElementById("greetingOutput").innerText = `${greeting}, ${name}!`;
}

function calculate(op) {
  try {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(n1) || isNaN(n2)) throw "Enter valid numbers!";
    let result;
    switch (op) {
      case '+': result = n1 + n2; break;
      case '-': result = n1 - n2; break;
      case '*': result = n1 * n2; break;
      case '/': 
        if (n2 === 0) throw "Division by zero not allowed!";
        result = n1 / n2; 
        break;
    }
    document.getElementById("calcOutput").innerText = `Result: ${result}`;
  } catch (err) {
    document.getElementById("calcOutput").innerText = "Error: " + err;
  }
}

function showQuote() {
  let quotes = [
    "Opportunities don't happen, you create them",
    "The secret of getting ahead is getting started",
    "Work hard, dream big!",
    "Every day is a second chance.",
    "Stay positive, work hard, make it happen.",
  ];
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteOutput").innerText = quotes[randomIndex];
}

function showJSON() {
  document.getElementById("jsonOutput").innerText = 
    JSON.stringify(student, null, 2);
}

