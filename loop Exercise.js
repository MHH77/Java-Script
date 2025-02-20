const ali = ["ali", 1992 - 1898, ["a", "b", "b"], "programmer", "js"];

let types = [];

for (const item of ali) {
  console.log(item, typeof item);
}

for (let i = 0; i < ali.length; i++) {
  console.log(ali[i]);
  //   types[i] = typeof ali[i];//or
  types.push(typeof ali[i]);
}

// for (const element of types) {
//   console.log(element);
// }

console.log("-----ONLY STRING -----");
for (const element of ali) {
  if (typeof element !== "string") continue;
  console.log(element, typeof element);
}

console.log("-----NUMBER STRING -----");
for (const element of ali) {
  if (typeof element === "number") break;
  console.log(element, typeof element);
}
