# gukbap - JavaScript built-in extensions

![](https://img.shields.io/badge/language-Javascript-red) ![](https://img.shields.io/badge/version-0.3.1-brightgreen) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myyrakle/gukbap/blob/master/LICENSE)

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

## Object Extension

-   [Object.isObject(value)](./doc/Object/isObject.md)
-   [Object.fromJSONString(jsonStrng)](./doc/Object/fromJSONString.md)
-   [Object.prorotype.toJSONString()](./doc/Object/toJSONString.md)
-   [Object.prototype.deepClone()](./doc/Object/isObject.md) //not impl

## Function Extension

-   [Function.isFunction(value)](./doc/Function/isFunction.md)

## Array Extension

-   [Array.range(begin, end)](./doc/Array/range.md)
-   [Array.prototype.first()](./doc/Array/first.md)
-   [Array.prototype.last()](./doc/Array/last.md)
-   [Array.prototype.empty()](./doc/Array/empty.md)
-   [Array.prototype.clone()]
-   [Array.prototype.reversed()](./doc/Array/reversed.md)
-   [Array.prototype.sorted([compare])](./doc/Array/sorted.md)
-   [Array.prototype.shuffle()](./doc/Array/shuffle.md)
-   [Array.prototype.shuffled()](./doc/Array/shuffled.md)
-   [Array.prototype.min()](./doc/Array/min.md)
-   [Array.prototype.max()](./doc/Array/max.md)
-   [Array.prototype.sum()](./doc/Array/sum.md)
-   [Array.prototype.average()](./doc/Array/average.md)
-   [Array.prototype.flat()](./doc/Array/flat.md)

## Number Extension

-   [Number.isNumber(value)](./doc/Number/isNumber.md)
-   [Number.isFloat(value)](./doc/Number/isFloat.md)

## String Extension

-   [String.isString(value)]()
-   [String.fromArray(array)]()
-   [String.prototype.toArray()]()
-   [String.prototype.reversed()]()
-   [String.prototype.sorted([compare])]()
-   [String.prototype.forEach(callback)]()
-   [String.prototype.map(callback)]()
-   [String.prototype.reduce(callback, acc)]()

## Encoding Extension

-   [String.fromUTF8Array(array)]()
-   [String.fromUTF16Array(array)]()
-   [String.fromUTF32Array(array)]()
-   [String.prototype.toUTF8Array()]()
-   [String.prototype.toUTF16Array()]()
-   [String.prototype.toUTF32Array()]()

## Date Extension

-   [Date.isDate(value)]()
-   [Date.fromUnixTimestamp(unixTimestamp)]()
-   [Date.prototype.toUnixTimestamp()]()
-   Date.prototype.toChar(format) //not impl
-   Date.prototype.getRealMonth() //not impl
-   Date.prototype.setRealMonth() //not impl
-   Date.prototype.getDayOfWeek() //not impl
-   Date.prototype.getWeekOfMonth() //not impl
-   Date.prototype.getWeekOfYear() //not impl
-   Date.prototype.addMilliSecond(millisecond) //not impl
-   [Date.prototype.addSecond(second)]()
-   [Date.prototype.addMinute(minute)]()
-   [Date.prototype.addHour(hour)]()
-   [Date.prototype.addDate(date)]()
-   Date.prototype.addWeek(week) //not impl
-   [Date.prototype.addMonth(month)]()
-   [Date.prototype.addRealMonth(month)]()
-   [Date.prototype.addYear(year)]()

## Math Extension

-   none
