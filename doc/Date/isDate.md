# Date.isDate(value)

return true if the value is Date object

```
let func = function(){};
let obj = {};
let date = new Date();
let num = 102;
let st = "1234";

console.log(Date.isDate(func)); //false;
console.log(Date.isDate(obj)); //false;
console.log(Date.isDate(date)); //true;
console.log(Date.isDate(num)); //false;
console.log(Date.isDate(st)); //false;
```
