var UTF8_ONE_BYTE_MASK = 0b10000000;
var UTF8_ONE_BYTE_COUNT = 0;

var UTF8_TWO_BYTE_MASK = 0b11100000;
var UTF8_TWO_BYTE_COUNT = 0b11000000;

var UTF8_THREE_BYTE_MASK = 0b11110000;
var UTF8_THREE_BYTE_COUNT = 0b11100000;

var UTF8_FOUR_BYTE_MASK = 0b11111000;
var UTF8_FOUR_BYTE_COUNT = 0b11110000;

var UTF8_OTHER_MASK = 0b00111111;

function _UTF8CodePointSize(text) {
    if ((text & UTF8_ONE_BYTE_MASK) == UTF8_ONE_BYTE_COUNT) {
        return 1;
    }

    if ((text & UTF8_TWO_BYTE_MASK) == UTF8_TWO_BYTE_COUNT) {
        return 2;
    }

    if ((text & UTF8_THREE_BYTE_MASK) == UTF8_THREE_BYTE_COUNT) {
        return 3;
    }

    // TODO: what should happen if a byte with prefix 0b10xxxxxx is passed?
    return 4;
}

String.fromUTF8Array = function (array) {
    let out = [];
    for (let i = 0; i < array.length; ) {
        var byte_count = _UTF8CodePointSize(array[i]);
        let c = null;

        switch (byte_count) {
            case 1:
                c = array[i] & ~UTF8_ONE_BYTE_MASK;
                break;

            case 2:
                c =
                    ((array[i] & ~UTF8_TWO_BYTE_MASK) << 6) |
                    (array[i + 1] & UTF8_OTHER_MASK);
                break;

            case 3:
                c =
                    ((array[i] & ~UTF8_THREE_BYTE_MASK) << 12) |
                    ((array[i + 1] & UTF8_OTHER_MASK) << 6) |
                    (array[i + 2] & UTF8_OTHER_MASK);
                break;

            case 4:
                c =
                    ((array[i] & ~UTF8_FOUR_BYTE_MASK) << 18) |
                    ((array[i + 1] & UTF8_OTHER_MASK) << 12) |
                    ((array[i + 2] & UTF8_OTHER_MASK) << 6) |
                    (array[i + 3] & UTF8_OTHER_MASK);
                break;

            // TODO: error handling?
        }

        i += byte_count;
        console.log(c);
        out.push(String.fromCodePoint(c));
    }

    return out.join("");
};
/*function (array) {
    let out = "";
    let len = array.length;
    let i = 0;
    let c;

    let char2;
    let char3;

    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += String.fromCodePoint(c);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCodePoint(((c & 0x1f) << 6) | (char2 & 0x3f));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCodePoint(
                    ((c & 0x0f) << 12) |
                        ((char2 & 0x3f) << 6) |
                        ((char3 & 0x3f) << 0)
                );
                break;
        }
    }
    return out;
};*/

String.fromUTF16Array = function (array) {
    return String.fromCharCode(...array);
};

String.fromUTF32Array = function (array) {
    let out = [];

    let h;
    let l;
    for (let i = 0; i < array.length; i++) {
        var e = array[i];
        out.push(String.fromCodePoint(e));
    }

    return out.join("");
};

String.prototype.toUTF8Array = function () {
    var utf8 = [];
    for (let i = 0; i < this.length; i++) {
        let charcode = this.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(
                0xe0 | (charcode >> 12),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode =
                0x10000 +
                (((charcode & 0x3ff) << 10) | (this.charCodeAt(i) & 0x3ff));
            utf8.push(
                0xf0 | (charcode >> 18),
                0x80 | ((charcode >> 12) & 0x3f),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f)
            );
        }
    }
    return utf8;
};

String.prototype.toUTF16Array = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr[i] = this.charCodeAt(i);
    }
    return arr;
};

String.prototype.toUTF32Array = function () {
    var highSurrogateValue = parseInt("1101100000000000", 2);
    var lowSurrogateValue = parseInt("1101110000000000", 2);

    let arr = [];

    for (let i = 0; i < this.length; i++) {
        let code = this.charCodeAt(i);

        if ((code & highSurrogateValue) == highSurrogateValue) {
            i++;

            if (i >= this.length) {
                return null;
            }
            var nextCode = this.charCodeAt(i);

            if ((nextCode & lowSurrogateValue) != lowSurrogateValue) {
                return null;
            }
            code = (code << 10) + nextCode - 0x35fdc00;
        }

        arr.push(code);
    }

    return arr;
};

module.exports = {};
