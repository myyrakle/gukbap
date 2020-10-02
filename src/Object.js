Object.prototype.clone = function () {
    return Object.assign({}, this);
};

const deepClone = require("./../lib/deepClone");

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
