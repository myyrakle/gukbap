// require("./src/String.Encoding");
// const arr = "😻!!!으악".toUTF32Array();
// const foo = "test".toUTF32Array();

// console.log(String.fromUTF32Array(foo));

require("./src/Object");
const foo = { foo: "bar", boom: { text: "으악" } };
const cl = foo.clone();
foo.foo = "???";
console.log(foo, cl);
