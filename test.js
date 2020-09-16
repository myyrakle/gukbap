require("./index");

let date = new Date();
console.log(date); //2020-09-16T04:36:14.191Z

date.setRealMonth(5);
console.log(date); //2020-05-16T04:36:14.191Z

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
