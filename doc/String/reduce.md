# String.prototype.reduce(callback)

[Array.prototype.reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is executed for each character of the string.

```
let str = "hello";
let red = str.reduce((acc, e) => e + acc, "");
console.log(red); // "olleh"
```
