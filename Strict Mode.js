"use strict";
x = 10; // متغیر بدون let، const یا var
console.log(x); // 10
("use strict");
x = 10; // ReferenceError: x is not defined
var x = 5;
delete x; // مشکلی ایجاد نمی‌کند
("use strict");
var x = 5;
delete x; // SyntaxError: Delete of an unqualified identifier in strict mode
function sum(a, a, b) {
  return a + b;
}
console.log(sum(1, 2, 3)); // مشکلی ایجاد نمی‌کند
("use strict");
function sum(a, a, b) {
  return a + b;
}
// SyntaxError: Duplicate parameter name not allowed in strict mode
function test() {
  console.log(this); // window یا global
}
test();
("use strict");
function test() {
  console.log(this); // undefined
}
test();
