function _deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    var result = Array.isArray(obj) ? [] : {};

    for (var key of Object.keys(obj)) {
        result[key] = _deepClone(obj[key]);
    }

    return result;
}

Object.prototype.clone = function () {
    return Object.assign({}, this);
};

Object.prototype.deepClone = function () {
    return deepClone(this);
};

Object.prototype.toJSONString = function () {
    return JSON.stringify(this);
};

Object.fromJSONString = function (jsonString) {
    return JSON.parse(jsonString);
};

var { isObject } = require("./../lib/typecheck");

Object.isObject = isObject;
