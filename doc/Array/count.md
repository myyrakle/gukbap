# Array.prototype.count(callback)

Returns the number of elements for which the callback function returns true.
The callback function receives each element in order.

```
let arr = [1, 3, 5, 3, 2];
console.log(arr.count((e) => e == 3)); // 2
```
