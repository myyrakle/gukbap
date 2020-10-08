require("./index");

let arr = [1, 3, 5, 2, 2, 3, 4, 5, 1, 2, 3];

console.log(arr.count((e) => e % 2 == 0));
