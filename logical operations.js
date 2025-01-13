let isStudent = true;
let hasLicense = false;
let isAdult = true;

// Using AND (&&)
if (isStudent && isAdult) {
    console.log("The person is a student and an adult.");
} else {
    console.log("The person is either not a student or not an adult.");
}

// Using OR (||)
if (isStudent || hasLicense) {
    console.log("The person is either a student or has a license.");
} else {
    console.log("The person is neither a student nor has a license.");
}

// Using NOT (!)
if (!hasLicense) {
    console.log("The person does not have a license.");
} else {
    console.log("The person has a license.");
}

// Combining logical operations
if (isStudent && (hasLicense || isAdult)) {
    console.log("The person is a student and either has a license or is an adult.");
} else {
    console.log("The person does not meet the required conditions.");
}
