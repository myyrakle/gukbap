require("./index");

let t = "true";
let t2 = true;
let f = "false";
let asdf = "sfdsa";

console.log(Boolean.parseBoolean(t)); //true
console.log(Boolean.parseBoolean(t2)); // true
console.log(Boolean.parseBoolean(f)); //false
console.log(Boolean.parseBoolean(asdf)); //null

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
