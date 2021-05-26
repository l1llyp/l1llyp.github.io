/**
 * CONTROL FLOW:
 * 
 * 0. Control flow simply means the order in which the interpretor reads code.
 * Some examples of this would be conditional Statements and Functions.
 * 
 */
 
 /**
  * Conditional Statements:
  * 
  * 1. Conditional statements allow us to put forks in the road. 
  * If this equals this then run this, if it equals another thing, 
  * run that; otherwise, if both statements are false run this.
  * 
  */ 
 
 var animal = "bird";

if (animal === "cat" ) {
  console.log("hi otis!");
} else if ( animal === "dog") {
  console.log("you're not otis");
} else {
    console.log("i own a cat");
};

 
 /**
  * Functions:
  * 
  * 2. Think of a function like a conveyor belt. Starting with this input value, change it, and 
 * return a different output. It’s a list of instructions given to the parameters (input values) 
 * that when you invoke or call the function, they perform the instructions given inside of the 
 * function codeblock.
  * 
  */ 
 
     //title  perameters
function add(num1, num2) {
       
    return num1 + num2; //<= codeblock
 };
      
 add(3, 3); //=> prints 6 to the console.