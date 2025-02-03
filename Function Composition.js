function greet(name) {
    return `Hello, ${name}!`;
}

function addNumbers(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

function mainFunction() {
    const nameGreeting = greet("Ali");
    console.log(nameGreeting);

    const sum = addNumbers(10, 5);
    console.log(`The sum of 10 and 5 is: ${sum}`);

    const number = 8;
    console.log(`Is ${number} even? ${isEven(number)}`);
}

// Execute the main function
mainFunction();
