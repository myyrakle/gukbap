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

Date.prototype.addSecond = function () {};
Date.prototype.addMinute = function () {};
Date.prototype.addHour = function () {};
Date.prototype.addDay = function () {};
Date.prototype.addWeek = function () {};
Date.prototype.addMonth = function () {};
Date.prototype.addYear = function () {};
