var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function(value){
    var newNode = Node(value);
    var currentTail = list.tail;
    if (!list.head) {
      list.head = newNode;
    }
    list.tail = newNode;
    if (currentTail) {
      currentTail.next = newNode;
    }
  };

  // O(1)
  list.removeHead = function(){
    var value = null;
    if (list.head) {
      value = list.head.value;
      list.head = list.head.next;
    }
    return value;
  };

  // O(n)
  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode!==null){
      if(currentNode.value===target){
        return true;
      }
      currentNode=currentNode.next;
    }
    return false;
  };

  return list;
};

// O(1)
var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


