# String.prototype.toUTF8Array()

Returns a string as an array of UTF8 code values.

```
let str = "abcㄱㄴㄷ😻";
let arr = str.toUTF8Array();
console.log(arr);
/*
 [
   97,  98,  99, 227, 132,
  177, 227, 132, 180, 227,
  132, 183, 240, 159, 152,
  187
 ]
*/
```
