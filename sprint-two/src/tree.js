var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

// O(n)
treeMethods.contains = function(target){
  if( this.value===target ){ return true; }
  return _.reduce(this.children, function(acc, childNode){
    if(acc){ return true; }
    return childNode.contains(target);
  }, false);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
