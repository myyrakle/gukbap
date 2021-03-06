# gukbap - JavaScript built-in extensions

![](https://img.shields.io/badge/language-Javascript-red) ![](https://img.shields.io/badge/version-1.1.0-brightgreen) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myyrakle/gukbap/blob/master/LICENSE)

It is an extension library that fills in the shortcomings of built-in objects.  
It's like GUKBAP.

##

## install

```
npm i --save gukbap
```

##

## use

```
require("gukbap"); //Extension initialization

console.log([1, 2, 3, 4, 5].sum()); // 15
console.log("foo".reversed()); // "oof"
```

##

## Object Extension

-   [Object.isObject(value)](./doc/Object/isObject.md)
-   [Object.fromJSONString(jsonStrng)](./doc/Object/fromJSONString.md)
-   [Object.prototype.toJSONString()](./doc/Object/toJSONString.md)
-   [Object.prototype.clone()](./doc/Object/clone.md)

##

## Function Extension

-   [Function.isFunction(value)](./doc/Function/isFunction.md)

##

## Number Extension

-   [Number.isNumber(value)](./doc/Number/isNumber.md)
-   [Number.isFloat(value)](./doc/Number/isFloat.md)

##

## Boolean Extension

-   [Boolean.isBoolean(value)](./doc/Boolean/isBoolean.md)
-   [Boolean.parseBoolean(value)](./doc/Boolean/parseBoolean.md)

##

## String Extension

-   [String.isString(value)](./doc/String/isString.md)
-   [String.fromArray(array)](./doc/String/fromArray.md)
-   [String.prototype.toArray()](./doc/String/toArray.md)
-   [String.prototype.reversed()](./doc/String/reversed.md)
-   [String.prototype.sorted([compare])](./doc/String/sorted.md)
-   [String.prototype.forEach(callback)](./doc/String/forEach.md)
-   [String.prototype.map(callback)](./doc/String/map.md)
-   [String.prototype.reduce(callback, acc)](./doc/String/reduce.md)
-   [String.prototype.leftPad(length, character)](./doc/String/leftPad.md)
-   [String.prototype.rightPad(length, character)](./doc/String/rightPad.md)
-   [String.prototype.count(callback)](./doc/String/count.md)

##

## Encoding Extension

-   [String.fromUTF8Array(array)](./doc/Encoding/fromUTF8Array.md)
-   [String.fromUTF16Array(array)](./doc/Encoding/fromUTF16Array.md)
-   [String.fromUTF32Array(array)](./doc/Encoding/fromUTF32Array.md)
-   [String.prototype.toUTF8Array()](./doc/Encoding/toUTF8Array.md)
-   [String.prototype.toUTF16Array()](./doc/Encoding/toUTF16Array.md)
-   [String.prototype.toUTF32Array()](./doc/Encoding/toUTF32Array.md)

##

## Array Extension

-   [Array.range(begin, end)](./doc/Array/range.md)
-   [Array.prototype.first()](./doc/Array/first.md)
-   [Array.prototype.last()](./doc/Array/last.md)
-   [Array.prototype.empty()](./doc/Array/empty.md)
-   [Array.prototype.clone()](./doc/Array/clone.md)
-   [Array.prototype.reversed()](./doc/Array/reversed.md)
-   [Array.prototype.sorted([compare])](./doc/Array/sorted.md)
-   [Array.prototype.shuffle()](./doc/Array/shuffle.md)
-   [Array.prototype.shuffled()](./doc/Array/shuffled.md)
-   [Array.prototype.min()](./doc/Array/min.md)
-   [Array.prototype.max()](./doc/Array/max.md)
-   [Array.prototype.sum()](./doc/Array/sum.md)
-   [Array.prototype.average()](./doc/Array/average.md)
-   [Array.prototype.flat()](./doc/Array/flat.md)
-   [Array.prototype.count(callback)](./doc/Array/count.md)

##

## Date Extension

-   [Date.isDate(value)](./doc/Date/isDate.md)
-   [Date.fromUnixTimestamp(unixTimestamp)](./doc/Date/fromUnixTimestamp.md)
-   [Date.prototype.toUnixTimestamp()](./doc/Date/toUnixTimestamp.md)
-   [Date.prototype.getRealMonth()](./doc/Date/getRealMonth.md)
-   [Date.prototype.setRealMonth()](./doc/Date/setRealMonth.md)
-   [Date.prototype.addMilliSeconds(millisecond)](./doc/Date/addMilliSeconds.md)
-   [Date.prototype.addSeconds(second)](./doc/Date/addSeconds.md)
-   [Date.prototype.addMinutes(minute)](./doc/Date/addMinutes.md)
-   [Date.prototype.addHours(hour)](./doc/Date/addHours.md)
-   [Date.prototype.addDate(date)](./doc/Date/addDate.md)
-   [Date.prototype.addWeek(week)](./doc/Date/addWeek.md)
-   [Date.prototype.addMonth(month)](./doc/Date/addMonth.md)
-   [Date.prototype.addYear(year)](./doc/Date/addYear.md)

## Error Extension

-   [Error.isError(value)](./doc/Error/isError.md)
