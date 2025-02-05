// 1️⃣ Define an array of players
let players = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Haaland"];

console.log("🏆 Initial player list:", players);

// 2️⃣ Add a player to the end of the list
players.push("Salah");
console.log("📌 After adding Salah:", players);

// 3️⃣ Add a player to the beginning of the list
players.unshift("Benzema");
console.log("📌 After adding Benzema to the beginning:", players);

// 4️⃣ Remove the last player
players.pop();
console.log("❌ After removing the last player:", players);

// 5️⃣ Remove the first player
players.shift();
console.log("❌ After removing the first player:", players);

// 6️⃣ Check the number of players
console.log("👥 Number of players:", players.length);

// 7️⃣ Check if a player exists
console.log("✅ Is 'Neymar' in the list?", players.includes("Neymar"));
console.log("❌ Is 'Zlatan' in the list?", players.includes("Zlatan"));

// 8️⃣ Find the index of a player
console.log("📍 Index of 'Mbappe':", players.indexOf("Mbappe"));

// 9️⃣ Create an array of player scores
let scores = [85, 92, 78, 88, 95]; // Player scores based on index

console.log("📊 Player scores:", scores);

// 🔟 Increase all player scores by 5 using `map()`
let updatedScores = scores.map(score => score + 5);
console.log("📈 Updated player scores:", updatedScores);

// 1️⃣1️⃣ Filter players with a score above 90
let topPlayers = players.filter((player, index) => scores[index] > 90);
console.log("🏅 Players with a score above 90:", topPlayers);

// 1️⃣2️⃣ Sort scores in ascending order
scores.sort((a, b) => a - b);
console.log("📊 Sorted scores:", scores);

// 1️⃣3️⃣ Copy the player list without modifying the original
let playersCopy = [...players];
playersCopy.push("Modric");
console.log("📋 Original player list:", players);
console.log("📋 Copied player list (after adding Modric):", playersCopy);

// 1️⃣4️⃣ Display player names using `forEach()`
console.log("🔄 Displaying player list:");
players.forEach(player => console.log("⚽ " + player));
