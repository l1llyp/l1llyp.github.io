// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return anonymous func that tests whether a given value is greater than the base value
    return function(value) {
        //if the value is greater than the base, return true
        if(value > base) {
            return true;
        } else {
            //otherwise return false
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
      //return anonymous func that tests whether a given value is less than the base value
    return function(value) {
        //if the value is greater than the base, return false
        if(value > base) {
            return false;
        } else {
            //otherwise return true
            return true;
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //return func that tests whether a given string starts with the same input char
    return function(string) {
        if(string[0].toLowerCase() === startsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //return func that tests whether a given string ends with the same input char
    return function(string) {
        if(string[string.length - 1].toUpperCase() === endsWith.toUpperCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create defult var
    var results = [];
    //loop through the array of strings
    for(var i = 0; i < strings.length; i++) {
        //push the modified strings into the empty array
        results.push(modify(strings[i]));
    }
    //return the results
    return results;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    var results = [];
    //loop through the strings array
    for(var i = 0; i < strings.length; i++) {
        //if the test passes return true and push the true values into the empty array
        if(test(strings[i])) {
            results.push(strings[i]);
        } else if(!test(strings[i])) {
            //otherwise results are false
        }
    }
    //if the strings and results are the same
    if(strings.length === results.length) {
        //return true
        return true;
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
