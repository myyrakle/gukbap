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
