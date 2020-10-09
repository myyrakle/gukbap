# String.prototype.count(callback)

Returns the number of elements for which the callback function returns true.
The callback function receives each element in order.

```
let str = "asdfasdfaaa";
console.log(str.count((e) => e == "a")); //5
```
