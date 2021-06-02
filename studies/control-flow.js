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
  * Switch Statements:
  * 
  * 1. Switch statements allow us to make conditional statements with less code. 
  * To create a switch statement, use the switch keyword, that acts as your initial if statement.
  * If the initial variable is true to the statement, run the case that would be true then you
  * end the code by breaking out of it with the break keyword.If the case isn't true, switch to
  * the next case.
  */ 
  
var color = 'purple';

switch (color) {
  case 'green':
    console.log('The color provided was green.');
    break;
  case 'yellow':
    console.log('The color provided was yellow.');
    break;
  case 'red':
    console.log('The color provided was red.');
    break;
  default:
    console.log('Sorry, that is not a color we recognize.');
}
 
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