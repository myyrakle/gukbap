function _deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const result = Array.isArray(obj) ? [] : {};

    for (let key of Object.keys(obj)) {
        result[key] = _deepClone(obj[key]);
    }

    return result;
}

// function copy(aObject) {
//     if (!aObject) {
//         return aObject;
//     }

//     let v;
//     let bObject = Array.isArray(aObject) ? [] : {};
//     for (const k in aObject) {
//         v = aObject[k];
//         bObject[k] = typeof v === "object" ? copy(v) : v;
//     }

//     return bObject;
// }

Object.prototype.deepClone = function () {
    return deepClone(this);
};

Object.prototype.toJSONString = function () {
    return JSON.stringify(this);
};

Object.fromJSONString = function (jsonString) {
    return JSON.parse(jsonString);
};
