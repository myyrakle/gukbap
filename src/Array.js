/* static method */
Array.range = function(begin, end){
  const arr = [];
  while(begin<end){
    arr.push(begin);
    begin++;
  }
  return arr;
}

// first element access
Array.prototype.first = function(){
  return this[0];
}

// last element access
Array.prototype.last = function(){
  return this[this.length - 1];
}

// return true if length is 0
Array.prototype.empty = function(){
  return this.length === 0;
}

// deep clone
Array.prototype.clone = function(){
  return Array.from(this);
}

// immutable sort function
Array.prototype.sorted = function(compare){
  return this.clone().sort(compare);
}

//immutable reverse function
Array.prototype.reversed = function(){
  return this.clone().reverse();
}

// mutable 
Array.prototype.shuffle = function(){
    for (let i = this.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = this[i];
        this[i] = this[j];
        this[j] = x;
    }
}

// immutable
Array.prototype.shuffled = function(){
  return this.clone().shuffle();
}


/* Number */
Array.prototype.min = function(){
  if(this.empty()){
    return NaN;
  }
  
  let minValue = this.first();
  
  for(let i = 1; i < this.length; i++){
    if(minValue > this[i]){
      minValue = this[i];
    }
  }
  
  return minValue;
}

Array.prototype.max = function(){
  if(this.empty()){
    return NaN;
  }
  
  let maxValue = this.first();
  
  for(let i = 1; i < this.length; i++){
    if(maxValue < this[i]){
      maxValue = this[i];
    }
  }
  
  return maxValue;
}

// number sum
Array.prototype.sum = function(){
  return this.reduce((acc, e)=>acc+e, 0);
}

Array.prototype.average = function(){
  return this.sum() / this.length;
}

if(!Array.prototype.flat)
{
  Array.prototype.flat = function(depth = 1) {
    return this.reduce((flat, toFlatten)=>{
      return flat.concat(
        (Array.isArray(toFlatten) && (depth>1)) 
        ? toFlatten.flat(depth-1) 
        : toFlatten
      );
    }, []);
  }
}
