const greet = function (name) {
    return `Hi، ${name}!`;
};

console.log(greet("Ali"));

//---------------------------

setTimeout(function () {
    console.log("This message will be displayed after 2 seconds!");
}, 2000);

//---------------------------
const numbers = [1, 2, 3, 4];
const squared2 = numbers.map(function (num) {
    return num * num;
});

console.log(squared2);

//---------------------------

const greet2 = (name) => `Hi، ${name}!`;
console.log(greet2("Mohammad"));

//---------------------------

const squared = numbers.map(num => num * num);
console.log(squared); 
