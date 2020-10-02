# Date.prototype.getRealMonth()

Existing getMonth and setMonth functions were inconvenient because they expressed the month with a value of 0-11.

This function returns the month with a value of 1-12.

```
let date = new Date();
console.log(date); //2020-09-16T04:31:41.174Z
console.log(date.getRealMonth()); //9
```
