# String.fromUTF16Array()

Generates a string based on an array of UTF16 codes.

```
let arr = [97, 98, 99, 12593, 12596, 12599, 55357, 56891];
let str = String.fromUTF16Array(arr);
console.log(str); // "abcㄱㄴㄷ😻"
```
