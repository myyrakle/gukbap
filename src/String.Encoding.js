String.fromUTF8Array = function (array) {
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
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(
                    ((c & 0x0f) << 12) |
                        ((char2 & 0x3f) << 6) |
                        ((char3 & 0x3f) << 0)
                );
                break;
        }
    }
    return out;
};

String.fromUTF16Array = function (array) {
    return String.fromCharCode(...array);
};

String.fromUTF32Array = function (array) {
    return "";
};

String.prototype.toUTF8Array = function () {
    const utf8 = [];
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
    const highSurrogateValue = parseInt("1101100000000000", 2);
    const lowSurrogateValue = parseInt("1101110000000000", 2);

    let arr = [];

    for (let i = 0; i < this.length; i++) {
        let code = this.charCodeAt(i);

        if ((code & highSurrogateValue) == highSurrogateValue) {
            i++;

            if (i >= this.length) {
                return null;
            }
            const nextCode = this.charCodeAt(i);

            if ((nextCode & lowSurrogateValue) != lowSurrogateValue) {
                return null;
            }
            code = (code << 10) + nextCode - 0x35fdc00;
        }

        arr.push(code);
    }

    return arr;
};
