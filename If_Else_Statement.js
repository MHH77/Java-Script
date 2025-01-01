let age = 20;
let hasPermission = true;
let temperature = 30;
let day = 3;

// 1. Using 'if' statement to check age
console.log("1. Using 'if' statement:");
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

console.log("\n"); // Add a line break for separation

// 2. Using 'if-else if-else' to check age category (child, teenager, adult)
console.log("2. Using 'if-else if-else' to check age category:");
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

console.log("\n"); // Add a line break for separation

// 3. Using 'else if' statements to check temperature ranges
console.log("3. Using 'else if' statements to check temperature ranges:");
if (temperature < 0) {
    console.log("It's freezing.");
} else if (temperature < 15) {
    console.log("It's cold.");
} else if (temperature < 30) {
    console.log("It's warm.");
} else {
    console.log("It's hot.");
}

console.log("\n"); // Add a line break for separation

// 4. Using 'switch' statement to display the day of the week
console.log("4. Using 'switch' statement to display the day of the week:");
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

console.log("\n"); // Add a line break for separation

// 5. Using ternary operator to check age
console.log("5. Using ternary operator to check age:");
let result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result);

console.log("\n"); // Add a line break for separation

// 6. Using logical operators to combine multiple conditions
console.log("6. Using logical operators to combine multiple conditions:");
if (age >= 18 && hasPermission) {
    console.log("You can enter.");
} else {
    console.log("Access denied.");
}

console.log("\n"); // Add a line break for separation

// 7. Using 'if' without curly braces {}
console.log("7. Using 'if' without curly braces:");
if (age >= 18)
    console.log("You are an adult.");
else
    console.log("You are a minor.");
