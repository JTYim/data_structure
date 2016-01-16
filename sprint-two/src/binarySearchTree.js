var BinarySearchTree = function(value){
  var x = Object.create(BinarySearchTree.prototype);
  x.value = value;
  x.left = null;
  x.right = null;
  return x;
};

var TreeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// O(log n)
BinarySearchTree.prototype.insert = function(value) {
  var newNode=new TreeNode(value);
  if(this.value===null) {
    this.value = value;
  }else{
    insertNode(this, newNode);
  }

  function insertNode(node, newNode) {
    if (newNode.value < node.value) {
      node.left===null ?  node.left=newNode : insertNode(node.left, newNode);
    }else{
      node.right===null ? node.right=newNode : insertNode(node.right, newNode);
    }
  }

};

// O(log n)
BinarySearchTree.prototype.contains = function(value) {
  var found=false;
  search(this);
  function search(node) {
    if(node.value > value && node.left){
      search( node.left );
    }else if(node.value < value && node.right){
      search( node.right );
    }
    node.value===value && ( found=true );
  }
  return found;
};

// O(log n)
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  traverse(this);
  function traverse(node) {
    cb(node.value);
    node.left && (traverse(node.left));
    node.right && (traverse(node.right));
  }
};





