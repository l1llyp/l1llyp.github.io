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
 