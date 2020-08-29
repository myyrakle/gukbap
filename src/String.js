String.prototype.toArray = function(){
  return this.split('');
}

String.fromArray = function(array){
  return array.join('');
}

String.prototype.toUTF8Array = function(){
    const utf8 = [];
    for (var i=0; i < this.length; i++) {
        let charcode = this.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (this.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

String.prototype.toUTF16Array = function(){
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr[i] = this.charCodeAt(i);
  }
  return arr;
}

String.prototype.reversed = function(){
  return this.toArray().reverse();
}
