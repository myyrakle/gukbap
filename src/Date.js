Date.isDate = function (value) {
    return value instanceof Date;
};

Date.fromUnixTimestamp = function (unixTimestamp) {
    return new Date(unixTimestamp * 1000);
};

Date.prototype.toUnixTimestamp = function () {
    return Math.floor(this.getTime() / 1000);
};

Date.prototype.toYMD = function (deliminator = "-") {
    const date = this;
    return `${date.getFullYear()}${deliminator}${(
        "00" +
        (date.getMonth() + 1)
    ).slice(-2)}${deliminator}${("00" + date.getDate()).slice(-2)}`;
};
Date.prototype.toHMS = function (deliminator = ":") {
    const date = this;
    return `${("00" + (date.getHours() + 1)).slice(-2)}${deliminator}${(
        "00" +
        (date.getMinutes() + 1)
    ).slice(-2)}${deliminator}${("00" + date.getSeconds()).slice(-2)}`;
};

Date.fromYMD = function (ymd) {};
Date.fromHMS = function (hms) {};

Date.prototype.getDayOfWeek = function () {};
Date.prototype.getWeekOfMonth = function (exact) {
    var month = this.getMonth(),
        year = this.getFullYear(),
        firstWeekday = new Date(year, month, 1).getDay(),
        lastDateOfMonth = new Date(year, month + 1, 0).getDate(),
        offsetDate = this.getDate() + firstWeekday - 1,
        index = 1, // start index at 0 or 1, your choice
        weeksInMonth =
            index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7),
        week = index + Math.floor(offsetDate / 7);
    if (exact || week < 2 + index) return week;
    return week === weeksInMonth ? index + 5 : week;
};
//수정 필요. 6 등이 나오기도 함

Date.prototype.getWeekOfYear = function () {};

Date.prototype.addSecond = function (second) {
    return this.setSeconds(this.getSeconds() + second);
};
Date.prototype.addMinute = function (minute) {
    return this.setMinutes(this.getMinutes() + minute);
};
Date.prototype.addHour = function (hour) {
    return this.setHours(this.getHours() + hour);
};
Date.prototype.addDate = function (date) {
    return this.setDate(this.getDate() + date);
};
Date.prototype.addWeek = function (week) {
    return this.setDate(null);
};
Date.prototype.addMonth = function (month) {
    return this.setMonth(this.getMonth() + month);
};
Date.prototype.addYear = function (year) {
    return this.setFullYear(this.getFullYear() + year);
};
