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
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

String.prototype.map = function (callback) {
    const mapped = [];
    for (var i = 0; i < this.length; i++) {
        mapped.push(callback(this[i]));
    }
    return String.fromArray(mapped);
};

String.prototype.reduce = function (callback, acc) {
    for (var i = 0; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
};

String.prototype.leftPad = function (len, character) {
    var self = String(this);
    len = len - self.length;
    if (len <= 0) {
        return self;
    }
    character = String(character);

    var pad = "";
    while (true) {
        if (len & 1) {
            pad += character;
        }
        len >>= 1;
        if (len) {
            character += character;
        } else {
            break;
        }
    }

    return pad + self;
};

String.prototype.rightPad = function (len, character) {
    var self = String(this);
    len = len - self.length;
    if (len <= 0) {
        return self;
    }
    character = String(character);

    var pad = "";
    while (true) {
        if (len & 1) {
            pad += character;
        }
        len >>= 1;
        if (len) {
            character += character;
        } else {
            break;
        }
    }

    return self + pad;
};

String.prototype.count = function (callback) {
    var n = 0;
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            n++;
        }
    }
    return n;
};
