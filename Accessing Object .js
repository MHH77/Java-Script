// Define an object with various property names
const person = {
    name: "John",
    age: 30,
    "home address": "123 Main St",
    "phone-number": "555-1234",
    country: "USA"
};

// 1. Accessing properties using dot notation
console.log(person.name); // Output: "John"
console.log(person.age);  // Output: 30
console.log(person.country); // Output: "USA"

// 2. Accessing properties using bracket notation
console.log(person["name"]); // Output: "John"
console.log(person["age"]);  // Output: 30
console.log(person["country"]); // Output: "USA"

// 3. Accessing properties with special characters using bracket notation
console.log(person["home address"]);  // Output: "123 Main St"
console.log(person["phone-number"]);  // Output: "555-1234"

// 4. Using variables to access properties dynamically
const key = "age";
console.log(person[key]); // Output: 30

const anotherKey = "phone-number";
console.log(person[anotherKey]); // Output: "555-1234"

// 5. Adding new properties dynamically
person.email = "john@example.com";  // Using dot notation
person["job title"] = "Software Engineer";  // Using bracket notation

console.log(person.email); // Output: "john@example.com"
console.log(person["job title"]); // Output: "Software Engineer"

// 6. Trying to use dot notation with invalid property names (causes errors)
// console.log(person.home address); // ❌ Syntax Error
// console.log(person.phone-number); // ❌ Syntax Error (JavaScript thinks it's subtraction)

// 7. Deleting properties
delete person["home address"]; 
delete person.age; 

console.log(person); // "age" and "home address" are removed
