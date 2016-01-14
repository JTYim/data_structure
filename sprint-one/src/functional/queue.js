var Queue = function(){
  var someInstance = {};
  var header=0;
  var tail=0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail]=value;
    tail++;
  };

  someInstance.dequeue = function(){
    var result = storage[header];
    delete storage[header];
    tail>header && (header++);
    return result;
  };

  someInstance.size = function(){
    return tail-header;
  };

  return someInstance;
};
