# Date.prototype.setRealMonth(realMonth)

Existing getMonth and setMonth functions were inconvenient because they expressed the month with a value of 0-11.

This function takes and stores a month value in the range 1-12.

```
let date = new Date();
console.log(date); //2020-09-16T04:36:14.191Z

date.setRealMonth(5);
console.log(date); //2020-05-16T04:36:14.191Z
```
