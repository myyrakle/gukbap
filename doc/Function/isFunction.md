# Function.isFunction(value)

return true if the value is function object

```
let func = function(){};
let obj = {};
let num = 102;

console.log(Function.isFunction(func)); //true;
console.log(Function.isFunction(obj)); //false;
console.log(Function.isFunction(num)); //false;
```
