const { isString } = require("./../lib/typecheck");

String.isString = isString;

String.fromArray = function (array) {
    return array.join("");
};

String.prototype.toArray = function () {
    return this.split("");
};

String.prototype.reversed = function () {
    return this.toArray().reverse().join("");
};

String.prototype.sorted = function (compare) {
    return this.toArray().sort(compare).join("");
};

String.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

String.prototype.map = function (callback) {
    const mapped = [];
    for (let i = 0; i < this.length; i++) {
        mapped.push(callback(this[i]));
    }
    return String.fromArray(mapped);
};

String.prototype.reduce = function (callback, acc) {
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
};

var leffPadCache = [
    "",
    " ",
    "  ",
    "   ",
    "    ",
    "     ",
    "      ",
    "       ",
    "        ",
    "         ",
];

String.prototype.leftPad = function (len, character) {
    // convert `str` to a `string`
    this = this + "";
    // `len` is the `pad`'s length now
    len = len - this.length;
    // doesn't need to pad
    if (len <= 0) return this;
    // `ch` defaults to `' '`
    if (!character && character !== 0) character = " ";
    // convert `ch` to a `string` cuz it could be a number
    character = character + "";
    // cache common use cases
    if (character === " " && len < 10) return leffPadCache[len] + this;
    // `pad` starts with an empty string
    var pad = "";
    // loop
    while (true) {
        // add `ch` to `pad` if `len` is odd
        if (len & 1) pad += character;
        // divide `len` by 2, ditch the remainder
        len >>= 1;
        // "double" the `ch` so this operation count grows logarithmically on `len`
        // each time `ch` is "doubled", the `len` would need to be "doubled" too
        // similar to finding a value in binary search tree, hence O(log(n))
        if (len) character += character;
        // `len` is 0, exit the loop
        else break;
    }
    // pad `str`!
    return pad + this;
};

String.prototype.rightPad = function (len, character) {};
