var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};
var setPrototype = {};

// O(1)
setPrototype.add = function(item){
  this._storage.insert(item,'undefined');
};

// O(1)
setPrototype.contains = function(item){
  return this._storage.retrieve(item) ? true : false;
};

// O(1)
setPrototype.remove = function(item){
  delete this._storage.remove(item);
};

/*Complexity: What is the time complexity of the above functions? */
