/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = "Amelia";
console.log(myName); // prints => Amelia

// 3. re-assignment //
myName = "Josh";
console.log(myName); // prints => Josh

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";




/**
 * VAR, LET, CONST:
 * 
 * 0. All of these keywords are containers, but they very in flexibility. 
 * 
 * 
 *  a. Var is the most loosly typed container. Variables are reassignable, 
 * hoisted to the top of the scope, globally scoped meaning they can be accessed 
 * anywhere, before or after declaration. Var is also locally scoped meaning that
 * when it's initalized inside of a function code block, you can't access it outside of that.
 * Var is not block scoped, meaning you can access it outside of if/else if/ else statements.
 * 
 *  b. Let
 * 
 * 
 *  c. Const
 *
 * 
 * 
 * 
 */ 