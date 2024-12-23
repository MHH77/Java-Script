// Primitive Types
let stringType = "Hello, JavaScript!"; // String
let numberType = 42; // Number
let bigIntType = 1234567890123456789012345678901234567890n; // BigInt
let booleanType = true; // Boolean
let undefinedType; // Undefined (implicitly undefined)
let nullType = null; // Null
let symbolType = Symbol("unique"); // Symbol

// Object Types
let objectType = { key: "value", number: 10 }; // Object
let arrayType = [1, 2, 3, "four"]; // Array (special kind of object)
let functionType = function () { return "I am a function!"; }; // Function (callable object)
let dateType = new Date(); // Date (built-in object)
let regexType = /abc/i; // Regular Expression (RegExp object)
let mapType = new Map(); // Map (key-value pairs)
let setType = new Set([1, 2, 3]); // Set (unique values)

// Example Output
console.log("String:", stringType);
console.log("Number:", numberType);
console.log("BigInt:", bigIntType);
console.log("Boolean:", booleanType);
console.log("Undefined:", undefinedType);
console.log("Null:", nullType);
console.log("Symbol:", symbolType);
console.log("Object:", objectType);
console.log("Array:", arrayType);
console.log("Function:", functionType());
console.log("Date:", dateType);
console.log("RegExp:", regexType);
console.log("Map:", mapType);
console.log("Set:", setType);
