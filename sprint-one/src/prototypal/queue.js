var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.header=0;
  someInstance.tail=0;
  someInstance.storage={};
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



