# Object.prototype.clone()

Equivalent to Object.assign({}, this).  
Create a new object based on the existing value.

```
const foo = { s: 33 };
const cl = foo.clone();

cl.s++;

console.log(foo); // { s: 33 }
console.log(cl); // { s: 34 }
```
