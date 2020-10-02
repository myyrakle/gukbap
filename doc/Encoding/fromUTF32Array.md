# String.fromUTF32Array()

Generates a string based on an array of UTF32 codes.

```
let arr = [97, 98, 99, 12593, 12596, 12599, 128571];
let str = String.fromUTF32Array(arr);
console.log(str); // "abcㄱㄴㄷ😻"
```
