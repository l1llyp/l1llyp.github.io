/**
 * Loops:
 * 
 * 0. repeating a block of code a set number of times. You can use loops
 * to gain access to information inside of objects and arrays.
 * 
 * 1. more than one kind:
 * 
 *   while loops- how long should i loop?
 * 
 *   for loops- where should i start?
 *              how long should i loop?
 *              what changes each time i loop?
 * 
 *   for-in loop- how will you refer to keys?
 *                which object do you want to loop over?
 * 
 */
 
 //for in loop example
 
 var person = {
  name: "amelia",
  city: "new orleans",
  age: 24
}

for (var key in person) {
  console.log(key);
}



//for loop example

var names = ["amelia", "taylor", "josh"]

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}


//while loop example:

while (i < 10) {
  "The number is " + i;
  i++;
}