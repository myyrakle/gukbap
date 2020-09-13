# Boolean.parseBoolean(value)

Converts text containing boolean values ​​to boolean values.  
Returns null if it is an invalid boolean type.

```
let t = "true";
let t2 = true;
let f = "false";
let asdf = "sfdsa";

console.log(Boolean.parseBoolean(t)); //true
console.log(Boolean.parseBoolean(t2)); // true
console.log(Boolean.parseBoolean(f)); //false
console.log(Boolean.parseBoolean(asdf)); //null
```
