// Loose equality (==)
let num1 = 5;
let num2 = "5";
console.log("Loose equality operation:");
console.log(num1 == num2);  // true (because JavaScript automatically coerces types to compare values)

// Strict equality (===)
console.log("\nStrict equality operation:");
console.log(num1 === num2);  // false (because types are different: one is number and the other is string)

// Loose inequality (!=)
console.log("\nLoose inequality operation:");
console.log(num1 != num2);  // false (because the values are the same, even though types are different)

// Strict inequality (!==)
console.log("\nStrict inequality operation:");
console.log(num1 !== num2);  // true (because the types are different)

let str1 = "Hello";
let str2 = "Hello";
let str3 = "hello";

// Loose equality between strings
console.log("\nLoose equality between strings:");
console.log(str1 == str2);  // true (because the values are equal)
console.log(str1 == str3);  // false (because the values are different)

console.log("\nStrict equality between strings:");
console.log(str1 === str2);  // true (because both value and type are the same)
console.log(str1 === str3);  // false (because the values are different)
