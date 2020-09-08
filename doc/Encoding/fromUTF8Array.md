# String.fromUTF8Array()

Generates a string based on an array of UTF8 codes.

```
let arr = [
    97,
    98,
    99,
    227, 132, 177,
    227, 132, 180,
    227, 132, 183,
];
let str = String.fromUTF8Array(arr);
console.log(str); // "abcㄱㄴㄷ"
```
