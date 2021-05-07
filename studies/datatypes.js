/**
 *DATATYPES:
 * 
 * 0. Datatypes in coding can be broken down into two main categories - simple and complex.
 * 
 *  a. Simple datatypes are immutible meaning they cannot hold anything other 
 * than the assigned value because they have a limited amount of space available. 
 * Simple datatypes copy by value meaning they can only copy the assigned value 
 * to the next variable. Operations on simple datatypes return a new value, not 
 * an alterted version of the original variable.
 * 
 * 
 *  b. Complex datatypes are mutible meaning they have an unlimited amount of
 * space avalible to hold many things in their memory. Complex datatypes copy
 * by reference meaning they reference the storage container in which the value is held not
 * the actual value itself. Complex datatypes can each hold many different kinds of datatypes
 * inside of them.
 */
 
 //SIMPLE DATATYPES//
 
 /**
  * 1. NUMBERS:
  * 
  *  a. A numeric value.
  * 
  */ 
 
 var number = 12;
 console.log(number) //=> prints 12 to the console.
 
 /**
  * 2. STRINGS:
  * 
  *  a. Character data inbtween a set of quotation marks
  */ 
  
  var string = "Amelia Neville";
  console.log(string); // => prints Amelia Neville to the console.
  
  /**
   * 3. BOOLEANS
   * 
   *  a. A true or false value.
   * 
   */ 
   
   var boolean1 = true;
   console.log(boolean1); //=> prints true to the console.
   
   var boolean2 = false;
   console.log(boolean2); //=> prints false to the console.
   
   
   
   /**
    * 4. NAN (not a number) 
    * 
    *  a. defined by using the typeOf operator, returns a string number 
    * 
    */ 
    
    console.log(typeof NaN) // => prints "number" to the console.
    
    
    /**
     * 5. UNDEFINED:
     * 
     *  a. an uninitilized variable. 
     */ 
    
    var randomValue;
    console.log(randomValue); //=> prints undefined to the console because the variable isn't set to a value.
    
    /**
     * 6. Null:
     * 
     *  a. no value.
     * 
     * 
     */ 
    
    
    var notAValue = null;
    
    
    //COMPLEX DATATYPES//
    
    /**
     * 1. ARRAYS:
     * 
     *  a. The data will always  be inside of two brackets. Arrays are an ordered list of data types.
     * Within the array there are elements. Elements are anything that is inside the array.They are 
     * indexed(numbered) starting at 0. You can find any number index using bracket notation 
     * meaning the name of the variable with brackets next to it with the indexed number of the 
     * array element you’re trying to find. They will always have a .length property.
     * 
     * 2. METHODS:
     * 
     *  a. There are different kinds of methods you can use with arrays.
     * Some examples are:
     *    
     *    1. .push() - pushes a new element onto the end of the array
     *    2. .unshift() - adds a new element to the beginning of the array
     *    3. .shift() - removes an element from the beginning of the array
     *    4. .pop() - removes an element from the end of the array
     * 
     */ 
     
     var array = ["string", true, 12];
     console.log(array); //=> prints the entire array to the console.
     
     console.log(array[3]); // => prints 12 to the console.
     
     array.push("josh");
     console.log(array); //=> prints the new array with josh at the end
     
     array.unshift("lauren");
     console.log(array); //=> prints the new array with lauren at the beginning of the array
     
     array.shift();
     console.log(array); //=> prints the new array with the first index removed
     
     array.pop()
     console.log(array); //=> prints the new array with the last element removed
     
     console.log(array.length) //=> prints the number of how many elements are inside of the array
     
     
      /**
       * 2. OBJECTS:
       * 
       *  a. An object(a collection of key/value pairs), will always be inside of two curly braces, 
       * the different groupings key value pairs, are separated by a comma.
       * 
       * b. Think of an object like a file cabinet. You have your files organized by signing them 
       * with different names those are the keys. Then you have your values, separated from the keys 
       * by a colon, they are the information stored within those keys. An object is considered a complex 
       * data type because it can hold many different other kinds of data types within the object’s values.
       * Objects are unordered and you can use either dot or bracket notation to access the key/value pairs.
       * You can also use bracket or dot notation to add elements to the object.
       * 
       */ 
       
       var personObj = {
        name: "Amelia Neville",
        age: 24,
        hobbies: ["playing music", "photography", "cooking"]
       };
       console.log(personObj); //=> prints the entire object to the console
       
       console.log(personObj.name) //=> prints "Amelia Neville" to the console.
       
       console.log(personObj["hobbies"]); // => prints the hobbies array to the console.
       
       
       personObj.city = "new orleans";
       personObj["ward"] = 13;
       console.log(personObj); //=> prints new object with the city and ward key/value pairs added.
       
       
     
     /**
      * 3. FUNCTIONS:
      * 
      *  a. Think of a function like a conveyor belt. Starting with this input value, change it, and 
      * return a different output. It’s a list of instructions given to the parameters (input values) 
      * that when you invoke or call the function, they perform the instructions given inside of the 
      * function codeblock.
      * 
      * b. Functions can be called by using the function keyword, a pair of (), and a pair of curly braces, or
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