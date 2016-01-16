

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];
};
 var X = function(name){
   this.name = name;
   this.edges = [];
 };
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var node = new X(node);
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return _.reduce(this.nodes, function(acc, el){
    if(acc){ return true; }
    return el.name===node;
  }, false);
};
// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var zz = this.nodes;
  _.each(zz, function(el, i, col){
    el.name===node && (zz.splice(i,1));
  })
};
// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var zz = this.nodes;
  var found = false;
  _.each(zz, function(el, i, col){
    if(el.name===fromNode || el.name===toNode){
      _.each(el.edges, function(name){
        (name===fromNode || name===toNode) && (found=true);
      });
    };
  });
  return found;
};
// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var zz = this.nodes;
  if(this.contains(toNode)===false){
    this.addNode(toNode);
  }
  _.each(zz, function(el, i, col){
    el.name===fromNode && ( el.edges.push(toNode) );
    el.name===toNode && ( el.edges.push(fromNode) );
  })
};
// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var zz = this.nodes;
  _.each(zz, function(el, i, col){
    el.name===fromNode && ( el.edges.splice( _.indexOf(toNode),1) );
    el.name===toNode && ( el.edges.splice(_.indexOf(toNode),1) );
  });
};
// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  var zz = this.nodes;
  // debugger;
  _.each(zz, function(el, i, col){
    cb(el,i,col);
  });
};

/* Complexity: What is the time complexity of the above functions? */







