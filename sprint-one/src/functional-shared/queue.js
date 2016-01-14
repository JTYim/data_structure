var Queue = function(){
  var someInstance = {
    header:0,
    tail:0,
    storage:{}
  }
  _.extend(someInstance, queueMethods)
  return someInstance;
};
var queueMethods = {
  enqueue : function(value){
    this.storage[this.tail]=value;
    this.tail++;
  },
  dequeue : function(){
    var result = this.storage[this.header];
    delete this.storage[this.header];
    this.tail>this.header && (this.header++);
    return result;
  },
  size : function(){
    return this.tail-this.header;
  }
};


