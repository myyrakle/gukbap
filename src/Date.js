Date.isDate = function (value) {
    return value instanceof Date;
};

Date.fromUnixTimestamp = function (unixTimestamp) {
    return new Date(unixTimestamp * 1000);
};

Date.prototype.toUnixTimestamp = function () {
    return Math.floor(this.getTime() / 1000);
};

Date.prototype.getRealMonth = function () {
    return this.getMonth() + 1;
};

Date.prototype.setRealMonth = function (realMonth) {
    return this.setMonth(realMonth - 1);
};

Date.prototype.getDayOfWeek = function () {};

Date.prototype.addMilliSeconds = function (millisecond) {
    return this.setMilliseconds(this.getMilliseconds() + millisecond);
};

Date.prototype.addSeconds = function (second) {
    return this.setSeconds(this.getSeconds() + second);
};
Date.prototype.addMinutes = function (minute) {
    return this.setMinutes(this.getMinutes() + minute);
};
Date.prototype.addHours = function (hour) {
    return this.setHours(this.getHours() + hour);
};
Date.prototype.addDate = function (date) {
    return this.setDate(this.getDate() + date);
};
Date.prototype.addWeek = function (week) {
    return this.setDate(this.getDate() + week * 7);
};
Date.prototype.addMonth = function (month) {
    return this.setMonth(this.getMonth() + month);
};
Date.prototype.addYear = function (year) {
    return this.setFullYear(this.getFullYear() + year);
};
