//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//return the values of the object in an array
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//create var set to the array of keys in the object
    var keys = Object.keys(object);
    //return the objects keys separated with a space
    return keys.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create var set to the array of values in the object
    var values = [];
    //loop though object
    for(var keys in object) {
        //if the value is a string
        if(typeof object[keys] === "string") {
            //push the values into the empty array
            values.push(object[keys]);
        }
    }
    //return the values joined together by a space
    return values.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //if the collection is an array
    if(Array.isArray(collection)) {
        //return array string
        return "array";
    } else {
        //otherwise return object string
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return the first letter of the word capitalized
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split string into array
    var splitStr = string.split(" ");
    //loop through array
    for(var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
    }
    //return splitstr joined back together
    return splitStr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//return welcome message including the object's name value
    var capObj = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    return `Welcome ${capObj}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
 //create vars to capitalize the name and species
var name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
var species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
//return message name is a species
return `${name} is a ${species}`;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if there is not a noises array or nothing in the array
    if(!object.noises || !object.noises.length) {
        //return there are no noises
        return "there are no noises";
       
    } else {
        //otherwise return the noises array joined by a space
         return object.noises.join(" ")
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//split string into array
var arr = string.split(" ");
//loop through array
for(var i = 0; i < arr.length; i++) {
    //if the array index has the word
    if(arr[i] === word) {
        //return true
        return true;
    }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add name to the object's friends array
    object.friends.push(name);
    //return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //returning false if friend's array does not exist
  if(!object.friends){
      return false;
  }
  if(object.friends){
      //looping over friend's array if such array exists
      for(var i = 0; i < object.friends.length; i++){
          //checking to see if name exists within friend's array; 
          //using toUpperCase() method to avoid case sensitivities
          if(object.friends[i].toUpperCase() === name.toUpperCase()){
              return true;
          }
      }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function nonFriends(name, array) {
    //creating an empty array to later push names into
   let notFriends = [];
   //looping over array to get access to its elements
   for(let i = 0; i < array.length; i++){
       //checking to see if the name in array doesn't match the name we're looking for
       //implementing isFriend function to see if certain elements in the array are not friends with name parameter
       if(array[i].name !== name && !isFriend(name, array[i])){
           //pushing the name into nonHomies array
           notFriends.push(array[i].name);
       }
   }
   return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        for (var key in object) {
            if (object.hasOwnProperty(array[i])) {
                delete object[array[i]];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var unique = [...new Set(array)];
    return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}