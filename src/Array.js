/* static method */
Array.range = function (begin, end) {
    var arr = [];
    while (begin < end) {
        arr.push(begin);
        begin++;
    }
    return arr;
};

// first element access
Array.prototype.first = function () {
    return this[0];
};

// last element access
Array.prototype.last = function () {
    return this[this.length - 1];
};

// return true if length is 0
Array.prototype.empty = function () {
    return this.length === 0;
};

// deep clone
Array.prototype.clone = function () {
    return Array.from(this);
};

// immutable sort function
Array.prototype.sorted = function (compare) {
    return this.clone().sort(compare);
};

Array.prototype.sortNumber = function (compare) {};

//immutable reverse function
Array.prototype.reversed = function () {
    return this.clone().reverse();
};

// mutable
Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = this[i];
        this[i] = this[j];
        this[j] = x;
    }
};

// immutable
Array.prototype.shuffled = function () {
    return this.clone().shuffle();
};

/* Number */
Array.prototype.min = function () {
    if (this.empty()) {
        return NaN;
    }

    var minValue = this.first();

    for (var i = 1; i < this.length; i++) {
        if (minValue > this[i]) {
            minValue = this[i];
        }
    }

    return minValue;
};

Array.prototype.max = function () {
    if (this.empty()) {
        return NaN;
    }

    var maxValue = this.first();

    for (var i = 1; i < this.length; i++) {
        if (maxValue < this[i]) {
            maxValue = this[i];
        }
    }

    return maxValue;
};

// number sum
Array.prototype.sum = function () {
    return this.reduce((acc, e) => acc + e, 0);
};

Array.prototype.average = function () {
    return this.sum() / this.length;
};

if (!Array.prototype.flat) {
    Array.prototype.flat = function (depth = 1) {
        return this.reduce((flat, toFlatten) => {
            return flat.concat(
                Array.isArray(toFlatten) && depth > 1
                    ? toFlatten.flat(depth - 1)
                    : toFlatten
            );
        }, []);
    };
}

Array.prototype.binarySearch = function (value) {
    return -1;
};

Array.prototype.mapAsync = async function (callback) {
    var mapped = [];

    for (var e of this) {
        mapped.push(await callback(e));
    }

    return mapped;
};

Array.prototype.filterAsync = async function (callback) {
    var filtered = [];

    for (var e of this) {
        if (await callback(e)) {
            filtered.push(e);
        }
    }
    return filtered;
};

Array.prototype.reduceAsync = async function (callback, init) {
    var reduced = init;

    for (var e of this) {
        reduced = await callback(reduced, e);
    }

    return reduced;
};
