// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    //return the value unchanged
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    //if the value is an array
    if(Array.isArray(value)) {
        return "array";
    } else if(typeof value === "string") {
        return "string";
    } else if(value === null) {
        return "null";
    } else if(typeof value === "object") {
        return "object";
    } else if(value === undefined) {
        return "undefined";
    } else if(typeof value === "number") {
        return "number";
    } else if(typeof value === "boolean") {
        return "boolean";
    } else if(typeof value === "function") {
        return "function";
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num) {
    //if its not an array or the number is less than 0
    if(!Array.isArray(array) || num < 0) {
        //return an empty array
        return [];
        //if its not a number
    } else if(!num || NaN) {
        //return the first index of the array
        return array[0];
        //if the number is greater than the array length
    } else if(num > array.length) {
        //return the entire array
        return array;
    }
    //otherwise return the first number item of the array
    return array.slice(array[0], num);
    
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num) {
    //if it's not an array or the number is less than 0
    if(!Array.isArray(array) || num < 0) {
        //return empty array
        return [];
        //if its not a number
    } else if(!num || NaN) {
        //return the last index in the array
        return array[array.length - 1];
        //if the number is greater than the array length
    } else if(num > array.length) {
        //return the entire array
        return array;
    }
    //otherwise return the last number item in the array
    return array.slice(array.length - num);
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    //loop through the array
    for(var i = 0; i < array.length; i++) {
        //if the value is in the array
       if(array[i] === value) {
           //return the first index of the array that's the first occurrace of the value
           return i;
       }
    }
    //otherwise return -1
    return -1
    
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    //loop through the array
    for(var i = 0; i < array.length; i++) {
        //if the value is inside of the array
        if(array[i] === value) {
            //return true
            return true;
        }
    }
    //otherwise return false
    return false;
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {
    //if the collection is an array
    if(Array.isArray(collection)) {
        //loop through the array
        for(var i = 0; i < collection.length; i++) {
            //call the func on the element, index, and the collection
            func(collection[i], i, collection);
        }
        //if the collection is an object
    } else {
        //loop through the object
        for(var key in collection) {
            //call the func on the value, key, and the collection
            func(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    //create empty array to push the duplicates into
    var newArr = [];
    //loop through initial array
for(var i = 0; i < array.length; i++) {
    //if the array already has the values init
    if(_.indexOf(array, array[i]) === i) {
        //push the duplicates into the empty array
        newArr.push(array[i]);
    }
}
//return the new array filled with the duplicates
    return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    //new array to return
    var filteredArr = [];
    //loop through array
    for(var i = 0; i < array.length; i++) {
        //if the function is called
        if(func(array[i], i, array)) {
            //push the elements into the new array
           filteredArr.push(array[i]);
        }
    }
    //return new arr
    return filteredArr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    
      var newArr = []
   //loop through array
   for(var i = 0; i < array.length; i++) {
       //if the function is not called
       if(!func(array[i], i, array)) {
           //push those elements into the new array
           newArr.push(array[i]);
       }
   }
   //return the new array
   return newArr;
    
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    let trueAndFalseArr = [[],[]];
    
    for(let i = 0; i <= array.length - 1; i++) {
        
        if(func(array[i], i, array) === true) {
            
            trueAndFalseArr[0].push(array[i]);
            
        } else {
            
            trueAndFalseArr[1].push(array[i]);
        }
    }
    return trueAndFalseArr;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    //create new array to return
    var newArr = [];
    //use each to loop through array
    _.each(collection, function(value, i, collection) {
        //call the func function
        func(value, i, collection);
        //push the elements, index, and the collection into the new array
        newArr.push(func(value, i, collection));
    })
    
    return newArr;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, key) {
    
  return array.map(function(obj) {
      
    return obj[key];
  });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
       if(func === undefined){
        for (let i = 0; i < collection.length; i++){
            if(collection[i] === false){
                return false;
            }
        }
        return true;
    }
    if(Array.isArray(collection)){
        // loop through array
        for (let i = 0; i < collection.length; i++){
            // call function on each index
            if(!(func(collection[i], i, collection))){
                return false;
            }
        }
        return true;
    }
    else if (typeof collection === "object"){
        // loop through object
        for (var key in collection){
            // call function on each property
            if(!(func(collection[key], key, collection))){
                return false;
            }
        }
    return true;
    }
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
    if(func === undefined){
        for (let i = 0; i < collection.length; i++){
            if(collection[i] === true){
                return true;
            }
        }
        return false;
    }
    if(Array.isArray(collection)){
        // loop through array
        for (let i = 0; i < collection.length; i++){
            // call function on each index
            if((func(collection[i], i, collection))){
                return true;
            }
        }
        return false;
    }
    else if (typeof collection === "object"){
        // loop through object
        for (var key in collection){
            // call function on each property
            if((func(collection[key], key, collection))){
                return true;
            }
        }
    return false;
    }
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
 //if the seed exists
 if(seed !== undefined) {
     //loop through the array
     for(var i = 0; i < array.length; i++) {
         //assign the seed to the function call
         seed = func(seed, array[i], i);
     }
     //return the seed
     return seed;
 } else {
    //if the seed doesn't exist, reassign it to be the first index in the array
    seed = array[0];
    //if it does exist, loop through the array at the second index
    for(var i = 1; i < array.length; i++) {
        //reassign the seed to equal the function call
        seed = func(seed, array[i], i);
    }
    //return the seed
    return seed;
 }
};



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, ...obj2) {
    
    var newObj = Object.assign(obj1, ...obj2)
    
    return newObj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
