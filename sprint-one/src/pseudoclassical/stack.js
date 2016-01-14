var Stack = function() {
  this.storage={};
  this.count=0;
};

Stack.prototype.push = function(value){
  this.storage[this.count]=value;
  this.count++;
};

Stack.prototype.pop = function(){
  this.count>0 && (this.count--);
  var result=this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

Stack.prototype.size = function(){
  return this.count;
}

