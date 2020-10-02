# Object.prototype.deepClone()

Do a deep copy.

```
let original = {foo:'bar', num:10};
let clone = original.deepClone();

let.clone.num++;

console.log(original); //{foo:'bar', num:10};
console.log(clone); //{foo:'bar', num:11};
```
