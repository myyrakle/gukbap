# String.prototype.toUTF32Array()

Returns a string as an array of UTF32 code values.

```
let str = "abcㄱㄴㄷ😻";
let arr = str.toUTF32Array();
console.log(arr); // [97, 98, 99, 12593, 12596, 12599, 128571]
```
