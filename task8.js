console.log("Task-3(d)");
let distance = Number(prompt("Enter the travel distance in km:"));
let type = Number(prompt("Enter transport type : \n1.Bus \n2.Train \n3.Taxi \n4.Flight"));
switch(type){
  case 1:
    var fare=10*distance;
    alert("Fare per km for Bus=10\nTotal Fare: "+fare);
    break;
  case 2:
    var fare=15*distance;
    alert("Fare per km for Train=15\nTotal Fare: "+fare);
    break;
  case 3:
    var fare=20*distance;
    alert("Fare per km for Taxi=20\nTotal Fare: "+fare);
    break;
  case 4:
    var fare=30*distance;
    alert("Fare per km for Flight=30\nTotal Fare: "+fare);
    break;
}