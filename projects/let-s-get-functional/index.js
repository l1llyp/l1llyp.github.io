// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./l1llyp.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use filter to loop through array filter all the males into a new array
    var males = _.filter(array, function(person, index, col) {
       if(person["gender"] === "male") {
           return true;
       } else {
           return false;
       }
    })
    //return the length of the new males array
    return males.length;
};

var femaleCount = array => {
//returning array.reduce with call back function params accumulator and currPerson (current element)
return array.reduce(function(acc, currPerson) {
    //conditional if currentPerson (object/element) is equal to female
    if (currPerson.gender === "female") {
         //add 1 to accumulator 
        acc++;
        }
    //return accumulator, which will be total number of females. 
    return acc;
    //seed is set to 0 so that accumulator adds from 0
    }, 0) 
}

var oldestCustomer = function(array) {
    let oldest = -1;
    let oldestC = "";
    array.forEach(function(person) {
        if (person.age > oldest ) {
          oldestC = person.name;
          oldest = person.age;
        }
    });
 return oldestC;
};

var youngestCustomer = function(array) {
    let oldest = 1000;
    let youngestC = "";
    array.forEach(function(person) {
        if (person.age < oldest ) {
          youngestC = person.name;
          oldest = person.age;
        }
    });
 return youngestC;
};

var averageBalance = (arr) => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {    
      sum += Number(arr[i].balance.replace(/[$,]/g, '')); 
    }
  return sum/arr.length;
};


var firstLetterCount = function(array, letter) {
    return array.reduce(function(acc, curr){
        if (curr.name[0].toLowerCase() === letter.toLowerCase()) {
            acc++
        }
       return acc; 
    }, 0)
}

var friendFirstLetterCount = function(array, customer, letter){
    //for all the people in the array of objects of people
for(let person of array){
    //if the persons name is the customer were trying to loop through
    if(person.name === customer){
        //declare return array as a filtered version of the persons friends list
        var newArr = _.filter(person.friends, function(friend){
            //the predicate for the function is the first letter of the name being true
            return friend.name[0].toUpperCase() === letter.toUpperCase();
        });
    }
}
    //return the filtered
    return newArr.length
};

var friendsCount = function(array, customer) { 
  const mutuals = (array.filter(entry => entry.friends.some(item => item.name.includes(customer))));
  let mutuals2 = []
  for (var i = 0; i < mutuals.length; i++){
    mutuals2.push(mutuals[i].name)
  }
  return mutuals2
};

var topThreeTags = function(array) {
  let objArray = []
   let objectCount = array.map(function(personObj){
        return personObj.tags
    }).reduce(function(acc, curr) {
        return acc.concat(curr)
    }).reduce(function(acc, curr) {
        if (!acc[curr]) {
            acc[curr] = 1
        } else {
            acc[curr]++
        }
        return acc;
    }, {})
  for (let key in objectCount) {
    let newObj = {}
    newObj.name = key;
    newObj.count = objectCount[key]
    objArray.push(newObj)
  } 
let newArray = objArray.sort(function(a,b){
  return b.count - a.count;
}).slice(0,3)
let top3Tags = newArray.map(tag => tag.name)
return top3Tags
}


var genderCount = array => array.map(person => 
  person.gender).reduce((genderObj, num) => {
  if (!genderObj[num]) {
    genderObj[num] = 1
  } else {
    genderObj[num] += 1
  }
  return genderObj
},{})



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
