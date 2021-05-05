/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create var named animal assigned to an empty object
var animal = {};
//using dot notation, add property named species with val of an animal
animal.species = "cat";
//use bracket notation to add property name with val of name
animal["name"] = "Otis";
//add another key called noises with value of an empty array
animal.noises = [];
//print animal obj
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create var named noises set to an empty array
var noises = [];
//use bracket notation to give the array an element
noises[0] = "meow";
//add another noise to the end of the array
noises.push("purr");
//add noise to the beginning of array
noises.unshift("chirp");
//add another noise to the end of the array using bracket notation
noises[noises.length] = "hiss"
console.log(noises.length);
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//add noises array to the noises key/value pair in the object
animal["noises"] = noises;
//add other noises
noises.push("chatter");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create var named animals set to an empty array
var animals = [];
//push the animal object into the animals array
animals.push(animal);
//create var named duck
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//push duck into the animals array
animals.push(duck);
console.log(animals);
//create two more animalas
var dog = {species: "dog", name: "Milo", noises: ["bark", "woof", "growl"]};
var rabbit = {species: "rabbit", name: "Roger", noises: ["purring", "clucking", "wimpering"]};
animals.push(dog);
animals.push(rabbit);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create list of friends
var friends = [];
//create math.random function
function getRandom(array) {
    var i =  Math.floor(Math.random() * animals.length);
    return friends.push(animals[i].name);
    }
    
getRandom(friends);
console.log(friends);
dog["friends"] = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}