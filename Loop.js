let students = [
    { name: "Ali", age: 20, scores: [18, 19, 17] },
    { name: "Sara", age: 22, scores: [20, 18, 19] },
    { name: "Reza", age: 21, scores: [17, 16, 18] }
];

console.log("🔹 1. Using 'for' loop - Display all student names:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

console.log("\n🔹 2. Using 'while' loop - Display student ages:");
let i = 0;
while (i < students.length) {
    console.log(`${students[i].name} is ${students[i].age} years old.`);
    i++;
}

console.log("\n🔹 3. Using 'do...while' loop - Display students until we reach 'Ali':");
let j = 0;
do {
    console.log(students[j].name);
    j++;
} while (students[j - 1].name !== "Ali" && j < students.length);

console.log("\n🔹 4. Using 'for...of' loop - Calculate and display the average score for each student:");
for (let student of students) {
    let sum = 0;
    for (let score of student.scores) {
        sum += score;
    }
    let avg = sum / student.scores.length;
    console.log(`${student.name}'s average score: ${avg.toFixed(2)}`);
}

console.log("\n🔹 5. Using 'for...in' loop - Display student properties:");
for (let student of students) {
    console.log(`Student: ${student.name}`);
    for (let key in student) {
        console.log(`  ${key}: ${student[key]}`);
    }
}
