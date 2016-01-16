var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var found =  false;
  var currentBucket=this._storage.get(i);
  if(currentBucket){
    _.each(currentBucket,function(e){
      e[0]===k && ( (e[1]=v) && (found=true) );
    });
    found===false && (currentBucket.push( [k,v] ));
  }else{
    this._storage.set( i, [[k,v]] )
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket=this._storage.get(i);
  var result=null;
  if(currentBucket){
    _.each(currentBucket,function(e){
      e[0]===k && ( result=e[1] );
    });
  }
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket=this._storage.get(i);
  if(currentBucket){
    _.each(currentBucket,function(e,i, arr){
      e[0]===k && ( currentBucket.splice(i,1) );
    });
  }
};

/* Complexity: What is the time complexity of the above functions? */
