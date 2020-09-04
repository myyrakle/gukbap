Date.fromUnixTimestamp = function (unixTimestamp) {
    return new Date(unixTimestamp * 1000);
};

Date.prototype.toUnixTimestamp = function () {
    return Math.floor(this.getTime() / 1000);
};

Date.prototype.toYMD = function () {};
Date.prototype.toHMS = function () {};

Date.fromYMD = function (ymd) {};
Date.fromHMS = function (hms) {};

Date.prototype.addDate = function () {};

//타임스탬프를 20XX-XX-XX 날짜 형식으로 변환
function timestampToDateString(timestamp, deliminator = "-") {
    const date = new Date(timestamp);
    return `${date.getFullYear()}${deliminator}${(
        "00" +
        (date.getMonth() + 1)
    ).slice(-2)}${deliminator}${("00" + date.getDate()).slice(-2)}`;
}

//타임스탬프를 XX:XX:XX 시간 형식으로 변환
function timestampToTimeString(timestamp, deliminator = ":") {
    const date = new Date(timestamp);
    return `${("00" + (date.getHours() + 1)).slice(-2)}${deliminator}${(
        "00" +
        (date.getMinutes() + 1)
    ).slice(-2)}${deliminator}${("00" + date.getSeconds()).slice(-2)}`;
}
