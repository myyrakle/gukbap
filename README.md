# gukbap - JavaScript built-in extensions

![](https://img.shields.io/badge/language-Javascript-red) ![](https://img.shields.io/badge/version-0.2.4-brightgreen) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myyrakle/gukbap/blob/master/LICENSE)

It is an extension library that fills in the shortcomings of built-in objects.  
It's like GUKBAP.

## install

```
npm i --save gukbap
```

## use

```
require("gukbap"); //Extension initialization

console.log([1, 2, 3, 4, 5].sum()); // 15
console.log("foo".reversed()); // "oof"
```

## Obecct Extension

-   Object.fromJSONString(jsonStrng)
-   Object.prorotype.toJSONString()
-   Object.prototype.clone() //deep clone

## Array Extension

-   Array.range(begin, end)
-   Array.prototype.first()
-   Array.prototype.last()
-   Array.prototype.empty()
-   Array.prototype.clone()
-   Array.prototype.reversed()
-   Array.prototype.sorted([compare])
-   Array.prototype.shuffle()
-   Array.prototype.shuffled()
-   Array.prototype.min()
-   Array.prototype.max()
-   Array.prototype.sum()
-   Array.prototype.average()
-   Array.prototype.flat()

## String Extension

-   String.fromArray(array)
-   String.prototype.toArray()
-   String.prototype.reversed()
-   String.prototype.sorted([compare])
-   String.prototype.forEach(callback)
-   String.prototype.map(callback)
-   String.prototype.reduce(callback, acc)

## Encoding Extension

-   String.fromUTF8Array(array)
-   String.fromUTF16Array(array)
-   String.fromUTF32Array(array) //not impl
-   String.prototype.toUTF8Array()
-   String.prototype.toUTF16Array()
-   String.prototype.toUTF32Array()

## Date Extension

-   none

## Math Extension

-   none
