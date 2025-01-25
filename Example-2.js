let myVar = "hello world!";
if (typeof myVar === "number") {
  console.log(myVar * 2);
} else if (typeof myVar === "string") {
  console.log(myVar.toUpperCase());
} else {
  console.log("data type is undefined");
}
//============================
const number_1 = 10;
//number_1 = 10; // can not to be change
console.log(number_1);

let number_2 = 20;
number_2 = 30;
console.log(number_2);

var number_3 = 40;
number_3 = 50;
console.log(number_3);

//============================
let num_1 = -10;
let num_2 = -20;
if (num_1 > 0 && num_2 > 0) {
  console.log("num_1 is positive ");
} else if (num_1 < 0 && num_2 < 0) {
  console.log("no positive number is here !");
} else {
  console.log("num_2 is positive ");
}
//==========================
let array = [0, null, "hello", false, 42];
for (let i = 0; i < array.length; i++) {
  console.log(array[i] + " is => " + Boolean(array[i]));
}
//=========================
let programmerName = "ali";
let programmerAge = 30;
console.log(`hi ${programmerName} your age is ${programmerAge}`);

//===========================
let n1 = prompt("Enter your number :");
if (n1 % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
//===========================
let num1 = prompt("Enter your first number :");
let num2 = prompt("Enter your second number :");
let operation = prompt("Enter your  operation :");
let check = ["+", "-", "*", "/"];
if (check.includes(operation)) {
  switch (operation) {
    case "+":
      alert(`The result is => ${Number(num1) + Number(num2)}`);
      break;
    case "-":
      alert(`The result is => ${Number(num1) - Number(num2)}`);
      break;
    case "*":
      alert(`The result is => ${Number(num1) * Number(num2)}`);
      break;
    case "/":
      alert(`The result is => ${Number(num1) / Number(num2)}`);
    default:
      break;
  }
} else {
  alert(`Operation is not valid ${operation}`);
}
