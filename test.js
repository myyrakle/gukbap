require("./index");

const foo = { s: 33 };
const cl = foo.clone();
cl.s++;
console.log(foo); // { s: 33 }
console.log(cl); // { s: 34 }

const arr = [1, 2, 3, 4];
const cl = Object.assign({}, arr);
cl[0]++;
console.log(arr, cl);

// require("./src/Date");
// const date = new Date();
// console.log(date.getMonth());
// date.addMonth(10);
// console.log(date.getMonth());

// console.log(Date.isDate(date));
// console.log(Date.isDate(11));
