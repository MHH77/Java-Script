let num = 5;
let str = "The number is " + num;  
console.log("Implicit conversion (Number to String):", str);  // خروجی: "The number is 5"

let numFromStr = "5" * 2;  
console.log("Implicit conversion (String to Number):", numFromStr);  // خروجی: 10

let truthy = true;
let result1 = truthy + 5;  
console.log("Implicit conversion (Boolean to Number):", result1);  // خروجی: 6

let strToNum = Number("123");
console.log("Explicit conversion (String to Number):", strToNum);  // خروجی: 123

let invalidStrToNum = Number("hello");
console.log("Explicit conversion (Invalid String to Number):", invalidStrToNum);  // خروجی: NaN

let numToStr = String(123);
console.log("Explicit conversion (Number to String):", numToStr);  // خروجی: "123"

let emptyStrToBool = Boolean("");
console.log("Explicit conversion (Empty String to Boolean):", emptyStrToBool);  // خروجی: false

let nonEmptyStrToBool = Boolean("Hello");
console.log("Explicit conversion (Non-empty String to Boolean):", nonEmptyStrToBool);  // خروجی: true

let strToArr = Array.from("hello");
console.log("Explicit conversion (String to Array):", strToArr);  // خروجی: ["h", "e", "l", "l", "o"]

let dateFromString = new Date("2025-01-01");
console.log("Explicit conversion (String to Date):", dateFromString);  // خروجی: Wed Jan 01 2025 ...

let person = { name: "Alice", age: 25 };
let jsonStringified = JSON.stringify(person);
console.log("Explicit conversion (Object to JSON String):", jsonStringified);  // خروجی: '{"name":"Alice","age":25}'

let parsedObj = JSON.parse(jsonStringified);
console.log("Explicit conversion (JSON String to Object):", parsedObj);  // خروجی: { name: "Alice", age: 25 }

let resultNaN = "123abc" - 5;
console.log("Explicit conversion (Invalid Operation to NaN):", resultNaN);  // خروجی: NaN

let undefinedVar;
console.log("undefined variable:", undefinedVar);  // خروجی: undefined

let nullVar = null;
console.log("null variable:", nullVar);  // خروجی: null
