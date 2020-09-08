# gukbap - JavaScript built-in extensions

![](https://img.shields.io/badge/language-Javascript-red) ![](https://img.shields.io/badge/version-0.3.0-brightgreen) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/myyrakle/gukbap/blob/master/LICENSE)

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

-   Object.isObject(value)
-   Object.fromJSONString(jsonStrng)
-   Object.prorotype.toJSONString()
-   Object.prototype.deepClone()

# Function Extension

-   Function.isFunction(value)

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

## Number Extension

-   Number.isNumber(value)
-   Number.isFloat(value)

## String Extension

-   String.isString(value)
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
-   String.fromUTF32Array(array)
-   String.prototype.toUTF8Array()
-   String.prototype.toUTF16Array()
-   String.prototype.toUTF32Array()

## Date Extension

-   Date.isDate(value)
-   Date.fromUnixTimestamp(unixTimestamp)
-   Date.prototype.toUnixTimestamp()
-   Date.prototype.toChar(format) //not impl
-   Date.prototype.getRealMonth() //not impl
-   Date.prototype.setRealMonth() //not impl
-   Date.prototype.getDayOfWeek() //not impl
-   Date.prototype.getWeekOfMonth() //not impl
-   Date.prototype.getWeekOfYear() //not impl
-   Date.prototype.addSecond(second)
-   Date.prototype.addMinute(minute)
-   Date.prototype.addHour(hour)
-   Date.prototype.addDate(date)
-   Date.prototype.addWeek(week) //not impl
-   Date.prototype.addMonth(month)
-   Date.prototype.addRealMonth(month)
-   Date.prototype.addYear(year)

## Math Extension

-   none
