console.log("1. Arithmetic Operators");
let x = 10, y = 3;
let sum = x + y;      // جمع
let diff = x - y;     // تفریق
let product = x * y;  // ضرب
let quotient = x / y; // تقسیم
let remainder = x % y; // باقی‌مانده
let power = x ** y;   // توان
// خروجی‌ها
console.log("sum:", sum);
console.log("diff:", diff);
console.log("product:", product);
console.log("quotient:", quotient);
console.log("remainder:", remainder);
console.log("power:", power);

console.log("     ");
console.log("2. Assignment Operators");
x += 5; // معادل x = x + 5
y *= 2; // معادل y = y * 2
console.log("x += 5: ",x += 5);
console.log("y *= 2: ",y *= 2);

console.log("     ");
console.log("3. Comparison Operators");
let isEqual = x == y;  // بررسی تساوی (نوع را در نظر نمی‌گیرد)
let isIdentical = x === y; // بررسی تساوی (هم مقدار و هم نوع)
let isGreater = x > y; // بررسی بزرگ‌تر بودن
console.log("x == y:", isEqual);
console.log("x === y:", isIdentical);
console.log("x > y:", isGreater);


let a = 5;
let b = "5";
let c = 10;

// 1. == (تساوی بدون در نظر گرفتن نوع)
console.log("a == b :", a == b);
// 2. === (تساوی با در نظر گرفتن نوع)
console.log("a === b :", a === b);
// 3. != (نابرابری بدون در نظر گرفتن نوع)
console.log("a != b :", a != b);
// 4. !== (نابرابری با در نظر گرفتن نوع)
console.log("a !== b :", a !== b);
// 5. < (کمتر از)
console.log("a < c :", a < c);
// 6. > (بزرگ‌تر از)
console.log("a > c :", a > c);
// 7. <= (کمتر یا مساوی)
console.log("a <= 5 :", a <= 5);
// 8. >= (بزرگ‌تر یا مساوی)
console.log("c >= 10 :", c >= 10);

// 4. Logical Operators
let isAdult = true;
let hasPermission = false;
let canEnter = isAdult && hasPermission; // ترکیب شرط‌ها با AND
let hasAccess = isAdult || hasPermission; // ترکیب شرط‌ها با OR
let isRestricted = !hasPermission; // نقیض شرط

// 5. String Operators
let firstName = "Ali";
let lastName = "Rezaei";
let fullName = firstName + " " + lastName; // اتصال رشته‌ها

// 6. Type Operators
console.log(typeof fullName); // بررسی نوع متغیر (string)
console.log(fullName instanceof String); // بررسی نمونه بودن (false، چون primitive است)

// 7. Ternary Operator
let age = 20;
let category = age >= 18 ? "Adult" : "Child"; // اگر age >= 18 باشد، "Adult" وگرنه "Child"

console.log("آیا برابرند؟", isEqual);
console.log("نام کامل:", fullName);
console.log("دسته‌بندی:", category);