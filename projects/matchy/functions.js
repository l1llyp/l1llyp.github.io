/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function called search that takes in an array and a string
function search(animals, name) {
    //loop through array
    for(var i = 0; i < animals.length; i++) {
        //if the name is found in the array return the object
        if(animals[i].name === name) {
            return animals[i];
        }
    }
     //otherwise return null
        return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function called replace that takes peram animlas, name, replacement
function replace(animals, name, replacement) {
    //if an animal with that name exists within the animals array, replace the entire obj
    for(var i = 0; i < animals.length; i++) {
        //if the name is in the array
        if(animals[i].name === name) {
            //replace the entire object
            return animals.splice([i], 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write function called remove with perams animals, name
function remove(animals, name) {
    //loop through array
    for(var i = 0; i < animals.length; i++) {
        //if the name is in the array
        if(animals[i].name === name) {
            //remove it
            animals.splice([i], 1);
        }
    }
    return animals;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//write function called add with perams animals, animal
function add(animals, animal) {
    //loop through array
    for(var i = 0; i < animals.length; i++) {
        //if the name is in the array
        if(animals[i].name === animal.name) {
            //return the array
            return animals;
            //if the name and the species obj are both greater than 0
        } else if(animal.name.length > 0 && animal.species.length > 0) {
            //push the animal obj into the array
            animals.push(animal);
        }
    }
    //return the obj
    return animal;
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
