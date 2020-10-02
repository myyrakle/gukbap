# Error.isError(value)

return true if the value is Error object

```
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
```
