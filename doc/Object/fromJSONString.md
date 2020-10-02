# Object.fromJSONString()

Equivalent to [JSON.parse](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

Reads JSON string and returns it as Object.

```
let jsonString = '{"foo":"bar"}';
let obj = Object.fromJSONString(jsonString);

console.log(obj.foo); //"bar"
```
