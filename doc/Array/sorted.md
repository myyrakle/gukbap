# Array.prototype.sorted([compare])

An immutable version of the existing [sort](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function.  
Creates and returns a new sorted array without modifying the object.

```
let arr = [3, 2, 5, 1, 6];
let sr = arr.sorted((l, r) => l - r);
console.log(arr); // [ 3, 2, 5, 1, 6 ]
console.log(sr); // [ 1, 2, 3, 5, 6 ]
```
