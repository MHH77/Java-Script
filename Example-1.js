let age =10;
let name ="ali";

console.log(`Hi ${name} your age is  ${age} .`)

// -----------------------------------

let numbers=[1,434,2,3,34,543,56];
let total=0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
if (total >50) {
    console.log(`Total => ${total} is bigger than 50 !`);
    
}

// --------------------------------------

let birth =789;
let namy ="Mohammad";
let job ="software engineer";
if (birth ==="789" && namy === "Mohammad" &&job==="software engineer") {
    console.log("All is have same type and every thing is Ok!")    
}
if (birth =="789" && namy == "Mohammad" &&job=="software engineer") {
    console.log("All is have same type!")    
}


