function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(average(1, 2, 3));

//-----------------------------------
const calculateAverage = (x, y, z) => (x + y + z) / 3;

const team1Average = calculateAverage(23, 4, 53);
const team2Average = calculateAverage(42, 3, 42);

if (team1Average > team2Average) {
    console.log(`Team 1 wins with ${Math.round(team1Average)} points!`);
} else if (team1Average < team2Average) {
    console.log(`Team 2 wins with ${Math.round(team2Average)} points!`);
} else {
    console.log("It's a draw!");
}
