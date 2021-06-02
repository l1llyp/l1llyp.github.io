/**
 * OPERATORS:
 * 
 * 0. Assignment
 * = assigns value to a variable
 * += adds a value to a variable
 * -= subtract a value from variable
 * *= multiplies a variable
 * /= divides a variable
 * %= assigns a remainder to a variable
 * 
 */
 
 var firstName = "Amelia";
 var lastName = "Neville";
 var fullName = firstName + " " + lastName;
 console.log(fullName); //=> prints Amelia Neville to the console.
 
 
 /**
 * 1. Comparison
 * Greater than, less than, greater than or equal to, less than or equal to, 
 * strict comparison, non strict comparison
 * Returns a boolean value. If this is equal to this, return that that expression is true. 
 */
 
 if(6 > 7) {
     return false;
 } else if(8 > 7) {
     return true;
 };
 
 
 var name = "Amelia Neville";
 
 if(name[0] === "Amelia") {
     console.log("That's my first name!");
 } else {
     console.log("That's not my name!");
 }
 
 /**
  * 2. Arithmetic 
 * +, -, *, /, mogulo (returns the remainder of the division)
 * Considered binary because it modifies two operands
 * Used like a normal math expression 
 * Order of operation matters
 */
 
 function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

var result = subtract(add(2, 2), add(1, 1));
console.log(result);

function muliply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

var result = divide(muliply(2, 2), muliply(1, 1));
console.log(result);
 
 
 /**
 * 3. Logical:
 * 
 * And
 * Will return a boolean value of either true or false
 *
 * Or
 * Will return a boolean value of either true or false if one is true or false 
 * 
 */ 
 
function test(grade){

if (grade === 100) {
    console.log("Green");
}

else if (grade <= 99 && grade >= 70){
    console.log("Yellow");
}

else if (grade <= 69 || grade > 0){
    console.log("Red");
}

else {
  console.log ("No Attempt");
}
}


 /**
 * 4. Unary:
 * 
 * A unary operation is an operation with only one operand. This operand comes either 
 * before or after the operator. Unary operators are more efficient than standard JavaScript 
 * function calls. Additionally, unary operators can not be overridden, therefore their 
 * functionality is guaranteed
 * 
 */ 
 
// +a // Converts to number
// -a // Converts to number and negates
// ++a // Adds 1 to a and returns new a
// a++ // Adds 1 to a and returns original a

// --a // Subtracts 1 from a and returns new a
// a-- // Subtracts 1 from a and returns original a

var x = 4       // x = 4
var y = ++x     // y = 5 and  x = 5

x = 4       // x = 4
y = --x     // y = 3 and  x = 3

 /**
 * 4. Ternary:
 * 
 * The ternary operator is the only JavaScript operator that takes 
 * three operands: a condition followed by a question mark (?), then an expression 
 * to execute if the condition is truthy followed by a colon (:), and finally the 
 * expression to execute if the condition is falsy. This operator is frequently used 
 * as a shortcut for the if statement.
 * 
 */ 
 
var num = 4, msg = "";
msg = (num === 4) ? "Correct!" : "Incorrect!";
alert(msg);
 