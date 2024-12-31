console.log("----- example-with-template-literals  -----");

// Defining variables
let name = "John";
let age = 30;
let job = "developer";

// Using Template Literals for string interpolation
let message = `Hello, my name is ${name}.
I am ${age} years old and I work as a ${job}.`;

console.log(message);

// Performing operations inside the string
let sum = 10 + 20;
let resultMessage = `The result of 10 + 20 is: ${sum}.`;

console.log(resultMessage);
console.log("            ");
console.log("----- example-without-template-literals ----");

// Defining variables
let name2 = "John";
let age2 = 30;
let job2 = "developer";

// Using concatenation for string interpolation
let message2 = "Hello, my name is " + name2 + ".\nI am " + age2 + " years old and I work as a " + job + ".";

console.log(message2);

// Performing operations inside the string using concatenation
let sum2 = 10 + 20;
let resultMessage2 = "The result of 10 + 20 is: " + sum2 + ".";

console.log(resultMessage2);
