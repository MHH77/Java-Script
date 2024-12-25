console.log('1. var - Global and Function Scope');
var x = 10;  // Defining a variable with var
console.log(x);  // 10

if (true) {
    var x = 20;  // Redefining var in the same global scope
    console.log(x);  // 20
}

console.log(x);  // 20 (Changes are reflected globally because var has a function/global scope)


console.log('2. let - Block Scope');
let y = 30;  // Defining a variable with let
console.log(y);  // 30

if (true) {
    let y = 40;  // Defining a new variable with let inside the block
    console.log(y);  // 40
    y=50;
    console.log(y);  // 40

    // let y=100; ERROR
}

console.log(y);  // 30 (Changes inside the block don't affect the outer value of y)

console.log('3. const - Constant and Unchangeable');
const z = 50;  // Defining a constant with const
console.log(z);  // 50

// Cannot reassign the value of a constant
// z = 60;  // Error: "Assignment to constant variable."

// Using const inside a block is allowed
if (true) {
    const z = 60;  // Defining a constant inside the block
    console.log(z);  // 60
}

console.log(z);  // 50 (The original constant remains unchanged outside the block)

// 4. var vs let vs const - Redeclaration and Reassignment

// var can be redeclared:
var a = 5;
var a = 10;  // No error
console.log(a);  // 10

// let cannot be redeclared:
let b = 15;
// let b = 20;  // Error: "Identifier 'b' has already been declared"

// const cannot be redeclared:
const c = 25;
// const c = 30;  // Error: "Identifier 'c' has already been declared"

// Modifying an array or object with const is allowed, but reassigning it is not
const arr = [1, 2, 3];
arr.push(4);  // This is allowed
console.log(arr);  // [1, 2, 3, 4]

// arr = [5, 6, 7];  // Error: "Assignment to constant variable."
