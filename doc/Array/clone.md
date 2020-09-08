# Array.prototype.clone()

Creates and returns an array based on its elements.

```
let arr = [4, 3, 1, 5, 11];
let cloned = arr.clone();
cloned[0] = 1111;
console.log(arr); // [4, 3, 1, 5, 11]
console.log(cloned); // [1111, 3, 1, 5, 11]
```
