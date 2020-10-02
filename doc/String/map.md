# String.prototype.map(callback)

[Array.prototype.map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is executed for each character of the string.

```
let str = "hello";
let mapped = str.map((e) => e + "!");
console.log(mapped); // "h!e!l!l!o!"
```
