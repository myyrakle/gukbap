require("./index");

let arr = [
    97,
    98,
    99,
    227,
    132,
    177,
    227,
    132,
    180,
    227,
    132,
    183,
    240,
    159,
    152,
    187,
];
let str = String.fromUTF8Array(arr);
console.log(str); // "abcㄱㄴㄷ"

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
