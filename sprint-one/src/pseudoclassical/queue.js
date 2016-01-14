var Queue = function() {
  this.header=0;
  this.tail=0;
  this.storage={};
};

Queue.prototype.enqueue = function(value){
    this.storage[this.tail]=value;
    this.tail++;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.header];
  delete this.storage[this.header];
  this.tail>this.header && (this.header++);
  return result;
};

Queue.prototype.size = function(){
  return this.tail-this.header;
};
