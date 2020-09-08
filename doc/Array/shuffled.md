# Array.prototype.shuffled()

This is an immutable version of [shuffle](./shuffle.md).  
Creates and returns a randomly shuffled array without modifying the objects.

```
let arr = [1, 2, 3, 4, 5];
let sh = arr.shuffled();
console.log(arr); // [ 1, 2, 3, 4, 5 ];
console.log(sh); // [ 2, 1, 4, 3, 5 ]
```
