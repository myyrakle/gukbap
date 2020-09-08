require("./index");

let arr = [97, 98, 99, 12593, 12596, 12599, 55357, 56891];
let str = String.fromUTF16Array(arr);
console.log(str); // "abcㄱㄴㄷ😻"

console.log("😻");

let epoch = 1599538136;
let date = Date.fromUnixTimestamp(1599538136);
console.log(date); // 2020-09-08T04:08:56.000Z

let now = new Date();
console.log(now); // 2020-09-08T04:08:56.689Z
console.log(now.toUnixTimestamp()); // 1599538136

/*
 [
   97,  98,  99, 227, 132,
  177, 227, 132, 180, 227,
  132, 183, 240, 159, 152,
  187
 ]
*/

// const foo = { s: 33 };
// console.log(foo.deepClone());

// const foo = "😻!!!으악".toUTF32Array();

// console.log("😻32", foo);
// console.log(String.fromUTF32Array(foo));

// require("./src/Date");
// const date = new Date();
// console.log(date.getMonth());
// date.addMonth(10);
// console.log(date.getMonth());

// console.log(Date.isDate(date));
// console.log(Date.isDate(11));
