/**
 * FUNCTIONS:
 * 
 * 0. Think of a function like a conveyor belt. Starting with this input value, change it, and 
 * return a different output. It’s a list of instructions given to the parameters (input values) 
 * that when you invoke or call the function, they perform the instructions given inside of the 
 * function codeblock.
 * 
 * 1. Functions can be called by using the function keyword, a pair of (), and a pair of curly braces, or
 * by using the arrow function, a pair of () and curly braces set to a varable.
 * 
 */
      
//Function Keyword:
      
    //title  perameters
function add(num1, num2) {
       
    return num1 + num2; //<= codeblock
 };
      
 add(3, 3); //=> prints 6 to the console.
      
//use the variable as the call name
 var multiply = (num1, num2) => {
     
    return num1 * num2;
        
};
      multiply(12, 4); // => prints 48 to the console.