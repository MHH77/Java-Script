// مقادیر falsy
console.log(Boolean(false));       // false
console.log(Boolean(0));           // false
console.log(Boolean(-0));          // false
console.log(Boolean(""));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false

// مقادیر truthy
console.log(Boolean(1));           // true
console.log(Boolean(-1));          // true
console.log(Boolean(3.14));        // true
console.log(Boolean("hello"));     // true
console.log(Boolean(" "));         // true
console.log(Boolean({}));          // true
console.log(Boolean([]));          // true
console.log(Boolean(function() {})); // true
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true

