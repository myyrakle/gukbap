require("./index");

let func = function () {};
let obj = {};
let num = 102;
let err = new Error("boom!");
let typeerr = new TypeError("!!!");

console.log(Error.isError(func)); //false;
console.log(Error.isError(obj)); //false;
console.log(Error.isError(num)); //false;
console.log(Error.isError(err)); //true;
console.log(Error.isError(typeerr)); //true;

// const arr = [1, 2, 3, 4];
// const cl = Object.assign({}, arr);
// cl[0]++;
// console.log(arr, cl);

// require("./src/Date");
// const date = new Date();
// console.log(date.getMonth());
// date.addMonth(10);
// console.log(date.getMonth());

// console.log(Date.isDate(date));
// console.log(Date.isDate(11));
