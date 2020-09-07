require("./src/String.Encoding");
const foo = "😻!!!으악".toUTF32Array();

console.log("😻32", foo);
console.log(String.fromUTF32Array(foo));

// require("./src/Date");
// const date = new Date();
// console.log(date.getMonth());
// date.addMonth(10);
// console.log(date.getMonth());

// console.log(Date.isDate(date));
// console.log(Date.isDate(11));
