# String.prototype.toUTF16Array()

Returns a string as an array of UTF16 code values.

```
let str = "abcㄱㄴㄷ😻";
let arr = str.toUTF16Array();
console.log(arr); // [97, 98, 99, 12593, 12596, 12599, 55357, 56891]
```
