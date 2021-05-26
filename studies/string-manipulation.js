/**
 * STRING MANIPULATION:
 * 
 * 0. String manipulation is all of the ways you can access
 * and change data inside of a string.
 * 
 * .length // Gives you the number of charaters in a string
 * 
 * .charAt(index) // Returns the character at the specified index (position)
 * 
 * .concat(str1,[...]) // Joins two or more strings, and returns a new joined strings
 * 
 * .endsWith(searchVal,[length]) // Checks whether a string ends with specified string/characters
 * 
 * .includes(searchVal,[start]) // Checks whether a string contains the specified string/characters
 * 
 * .indexOf(searchVal,[start]) // Returns the position of the first found occurrence of a specified value in a string
 * 
 * .replace(searchVal,newVal) // Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
 * 
 * .slice(start,[end]) // Extracts a part of a string and returns a new string
 * 
 * .split([separator],[limit]) // Splits a string into an array of substrings
 * 
 * .startsWith(searchVal,[start]) // Checks whether a string begins with specified characters
 * 
 * .substr(start,[length]) // Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
 * 
 * .substring(start,[end]) // Extracts the characters from a string, between two specified indices
 * 
 * .toLowerCase() // Converts a string to lowercase letters
 * 
 * .toString() // Returns the value of a String object
 * 
 * .toUpperCase() // Converts a string to uppercase letters
 * 
 * .trim() // Removes whitespace from both ends of a string
 * 
 */ 
 
 //Exmples:
 
 
 //length of an array for hobbies

var hobbies = ["playing music", "watching movies", "taking photos"];
console.log("I have "+ hobbies.length + " hobbies.");

//length of an array for friends

var friends = ["Julia", "Lauren", "Taylor"];
console.log("I have " + friends.length + " friends.");




//.push method//

//.push adds a value to the end of an array
      // nameOfTheArray.push(value);

//adding value to end of  hobbies list

var hobbies = ["playing music", "watching movies", "taking photos"];

hobbies.push("riding my bike");
hobbies.push("collecting records");
console.log(hobbies);

//.unshift method//

//adding values to beginning of hobbies list

hobbies.unshift("yoga");
console.log(hobbies);

//.pop method//

//removing values from end of hobbies list

//nameOfTheArray.pop(); removes the last element in the array.. doesnt need anything in the ()

var hobbies = ["playing music", "watching movies", "yoga"];

hobbies.pop();
console.log(hobbies);

//.shift method//



//nameOfTheArray.shift(); removes the first element in the array.. doesnt need anything in the ()

//removing from beginning of hobbies list
hobbies.shift();
console.log(hobbies);




//.join method//

//nameOfTheArray.join will the array by a string, concantinating all values

//nameOfTheArray.join(".") will join the string together by a dot.



var joinedHobbies = hobbies.join(".");
console.log(joinedHobbies);


//.split method string --> array//

//splits a string into an array of values




var friends = ["caroline", "lauren", "julia", "bailey", "sarah"];
console.log(friends)

// length of an array for friends
var friends = ["caroline", "lauren", "julia", "bailey", "sarah"];
console.log("i have " + friends.length + " friends.");


// declairing another var and assinging it with grocery list

var groceryList = ["eggs", "veggies", "pasta", "ice cream"];
console.log(groceryList);

// index            0          1         2         3

//length of array for grocery List

var groceryList = ["eggs", "veggies", "pasta", "ice cream"];
console.log("I have "+ groceryList.length + " things" + " on"+ " my"+ " grocery" + " list.");

//Can also be written with string interpolation - makes the code easier to read. 

console.log(`I have ${groceryList.length} things on my grocery list`);

 
 