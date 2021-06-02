/**
 * FUNCTIONS:
 * 
 * 0. Think of a function like a conveyor belt. Starting with this input value, change it, and 
 * return a different output. It’s a list of instructions given to the parameters (input values) 
 * that when you invoke or call the function, they perform the instructions given inside of the 
 * function codeblock.
 * 
 * 1. Functions can be created by using the function keyword, a pair of (), and a pair of curly braces, or
 * by using the arrow function, a pair of () and curly braces set to a varable.
 * To call (invoke) the function, you simply write the name of the function with a pair of (). The ()
 * is where you would put your arguments. Arguments are what you're actually testing in a function. The perameters
 * you set when making a function are just placeholders for the aruments.
 * 
 * 2. Functions are considered first class objects because they are always hoisted to the 
 * top of the scope and can be used as arguments inside of other functions, used as function 
 * returns, and can be held inside of objects and arrays.
 * 
 * 3. Can either be created as a function expression or a declaration.
 * 
 */
      
//Function Keyword:
      
    //title  perameters
function add(num1, num2) {
       
    return num1 + num2; //<= codeblock
 };
      
 add(3, 3); //=> prints 6 to the console.
 
 //Function Expression
      
//use the variable as the call name
 var multiply = (num1, num2) => {
     
    return num1 * num2;
        
};
    multiply(12, 4); // => prints 48 to the console.
  
  
 /**
  * Scope:
  * 
  * 1. Within a function code block, any variable you put inside of it will be 
  * locally scoped, meaning it can only be accessed inside of the function.
  * 
  * 2. Since local variables are only accessible inside of the specific function 
  * block, variables of the same name can be used inside of different functions.
  * 
  * 
  * 3. Local variables are created when a function starts, and deleted when a function stops.
  * 
  */ 
  
  //var cannot be accessed here

function myName() {
//var can be accessed here
    var name = "amelia";
} 

//Cannot be accessed here


/**
 * Closures:
 * 
 * 1. Functions have access to variables outside of their scope.
 * 
 * 2. Closures give you access to an outer function’s scope from an 
 * inner function even after the parent function is called.
 * 
 */ 
 
 
function add(x) {
return function(y) {
return x + y;
}
}
var add5 = add(5); console.log(add5(2)) //=> prints 7
var add10 = add(10); console.log(add10(2)) // => prints 12


function closureMaker() {
	var outerVariable = 5;
	
	return function() {
	    
	return outerVariable * 2;
}
}



/**
 * Hoisting:
 * 
 * 1. A process where the interpreter loads variable and function 
 * declarations into memory before executing the code.
 * 
 * 2. The JS interpreter makes two passes over the code that checks 
 * for variable and function declarations.
 * 
 * 3. It will execute these declarations first.
 * 
 * 4. Functions are always hoisted with their definitions, unlike variables 
 * which are only hoisted by their names. Functions take priority over variables
 * and will be executed first.

 * 
 */ 
 
console.log(functionBelow("Hello"));

function functionBelow(greet) { //will read this first and then print Hello World! to the console.
    return `${greet} World!`;
}
console.log(functionBelow("Hi")); // then reads from top to bottom and will print Hi World to the console.


  
    
/**
 * Higher Order Functions:
 * 
 * 1. These functions either take in a function as a perameter or return a function.
 * They are useful because they allow you to decrease the amount of time spent coding,
 * decrease errors, and make it easier to understand the code.
 * 
 */ 
 
 /**
 * Callback functions:
 * 
 * 1. JS functions are executed in the sequence they are called, not in the order 
 * they’re defined. A callback is a function passed as an argument to another function.
 * 
 */ 
 
 
 function createQuote(quote, callback) {
     
    var myQuote = "Like I always say, " + quote;
}
    
    
function logQuote(quote) {
    console.log(quote);
}

createQuote("eat your veggies", logQuote)

//Prints “Like i always say, eat your veggies…” to the console.
