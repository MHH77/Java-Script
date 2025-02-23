// Define the mass and height for Mark and John
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Calculate the BMI for Mark and John
const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);

// Print the BMI for Mark and John
console.log('Mark BMI =>', markBMI);
console.log('John BMI =>', johnBMI);

// Compare and determine if Mark has a higher BMI
let markHigherBMI = markBMI > johnBMI; // Directly storing the comparison result in this variable

console.log('Mark has higher BMI =>', markHigherBMI);
