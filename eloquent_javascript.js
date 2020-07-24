// Mathews Monoo - Document made while reading Eloquent JavaScript by Marijn Haverbeke.
// Started @ July/2020
//-------------------------------------------------------
/* CHAPTER 1 
VALUES, TYPES AND OPERATORS
    - 'this is a string' "that is \n a new line"
    - "con" + 'cat' + "e" + 'nate'
    - inside ${} in a template literal, its result will be computed, converted to a string, and included at that position:
        'half of 100 is ${100 / 2}' --> half of 100 is 50
    - logical operators
        && ; || ; ! ; 
    - ternary operator
        console.log(true ? 1 : 2);      --> 1
        console.log(false ? 1 : 2);     --> 2 
    - Comparison
        < ; > ; <= ; >= ; === ; !==
*/

/* CHAPTER 2
Program Structure
    * Bindings
    - let variable = value;
        let caught      =  5 ;
        let notCaught   = 5*5;
    
    * Functions
    - console.log(Math.max(2,4)); --> 4
    - console.log(Math.min(2,4)); --> 2 

    * Control FLow
    - if (condition){
          action if condition is met
      } else if (condition2) {
          action if condiiton2 is met
      } else {
          action if neither condition is met
      }
      
        let theNumber = Number(prompt("Pick a Number"));
        if (!Number.isNaN(theNumber)){
            console.log("Your number is the square root of " + theNumber * theNumber);
        }

    - while (condition){
        action if condition is met
    }

    - do {
        condition if requirement is met , goes here at least once
    } while (condition);

    - for (let number = x ; number <= y ; number++){
        action for each iteration on loop ;
        (optional : if() {break;})
    }

    - switch (variable){
        case foo: 
            do something;
            break;
        case bar:
            do something;
            break;
        default:
            if variable not in cases, do this;
            break;
      }
*/

/* CHAPTER 3
FUNCTIONS
1 - Define f to hold a function value:
      const f = function(a){
          console.log(a+2);
      };

2 - Declare g to be a function
      function g(a,b){
          return a*b*3.5;
      }

3 - A less verbose function value
      let h = a => a % 3 ;
...............................................
1st way: 
   - const <variable> = function(<parameters>){
       actions;
       return ;
    }
        const square = function(x){
            return x * x ;
        }
        const makeNoise = function() {
            console.log("Pling!");
        }
Arrow Functions:
    const square1 = (x) => {return x*x; };
        ^ const square2 = x => x * x ;

Optional Arguments:
    "If you pass too many arguments, the extra ones are ignored."
    "This can be used to adapt one function to many cases"
    
    function minus(a,b){
        if (b === undefined) return -a;
        else return a - b ; 
    }
    minus(10) -->  -10 ;   minus (10,5) --> 5 

    function power(base, exp = 2){
        let result = 1 
        for (let count = 0; count < exp; count++){
            result *= base;
        }
        return result;
    }

*/

/* CHAPTER 4
DATA STRUCTURES: OBJECTS AND ARRAYS
*Data Sets
    let listOfNumbers = [2,3,5,7,11];
        ^ zero-based counting.
*Properties
    Accessing properties:
    . (dot) : word after dot is the literal name of property.
    []      : expression between [ ] is evaluated to get property name.
    !! .x : property of value named 'x' 
       value[x] evaluate expression x and uses result, converted to STRING as property name

*Methods
    typeof x.toUpperCase  --> function
    x.toUpperCase         --> 'X'

    let sequence = [1,2,3]
    sequenche.push(4)
        > sequence is now 1,2,3,4
    console.log(sequence.pop());
        >sequence is now 1,2,3
        >output is 4

*Objects
    -Declaration
        let day1 = {
            squirrel : false,
            events   : ['work','touch tree','pizza','run']
        }
        console.log(day1.squirrel);  -->  false
        console.log(day1.wolf);      -->  undefined
        day1.wolf = false;
        console.log(day1.wolf);      -->  false
    
    - Delete
        delete day1.squirrel;
        console.log(day1.squirrel);         -->  undefined
        console.log("squirrel" in day1);    -->  false
        console.log(day1.wolf);             -->  false

    - Object.keys
        let myObject = {
            wolf : false,   bird : false,   bear : false,
            run  : true,    nuts : 12,
        }
        console.log(Object.keys(myObject)); --> ["wolf" ,"bird" ,"bear" ,"run" ,"nuts"] 

    - Object.assign
        let objectA = {a: 1, b: 2};
        Object.assign(objectA, {b: 3, c: 4});
        console.log(objectA); --> {a: 1, b: 3, c: 4}
    
    - MUTABILITY
        * Objects CAN have their preoperties changed, causing 
          A SINGLE OBJECT VALUE to have DIFFERENT CONTENT sometimes.
        * Difference between having TWO REFERENCES to SAME OBJECT and
          having TWO DIFFERENT OBJECTS that contain same properties.

          let object1 = {
            value:10    };
          let object2 = object1;
          let object3 = {
            value:10    };
          console.log( object1 === object2); --> True
          console.log( object3 === object1); --> False
          object1.value = 15;
          console.log(object1)  --> 15
          console.log(object2)  --> 15
          console.log(object3)  --> 10
          // Object1 and Object2 have the same identity
        
    - If a property name in brace notation isn’t followed by a 
      value,it's value is taken from the binding with the same name.
            let journal = [];
            function addEntry(events,squirrel){
                journal.push({events,squirrel});
            }
    - Correlation is expressed in a range from -1 to 1. 
        -1 = Opposites ;    0 = Not related;     1 = Identical;
    
    - ARRAY LOOPS
        for (let i = 0 ; i < LIST.length; i++){
            let myVar = LIST[i];
            // Do something with myVar
        }
        for (let myVar of LIST){
            console.log('${ myVar.property.length } properties.');
        }
        * With the word 'of' after a var definition, it will loop
          over the elements of the value after 'of' (here, LIST).

    - SHIFT and UNSHIFT
        let todoList = [];
        // Adds tasks to todoList
        function  remember(task){
            todoList.push(task);
        } 
        // Get and Remove front item from queue
        function getTask(){
            return todoList.shift();
        }
        // Adds a task also, but to the front of the list.
        function rememberUrgently(task){
            todoList.unshift(task);
        }

    - indexOf and lastIndexOf
        console.log(LIST.indexOf('something'))
        console.log(LIST.lastIndexOf('something'))
    - slice
        console.log(ARRAY.slice(start,end));  
            ! The start index is inclusive, the end index exclusive.
        console.log([0,1,2,3,4].slice(2,4));    --> [2,3]
        console.log([0,1,2,3,4].slice(2));      --> [2,3,4]
    - trim
        console.log("      okay \n   ".trim()); --> okay
    - padStart
        console.log(String(6).padStart(3,"0")); --> 006
    - repeat
        console.log("LA".repeat(3));            --> LALALA
    
    - REST PARAMETERS
    // Rest parameter(...) is bound to an array containing all further arguments.
        function max(...numbers) {
            let result = -Infinity;
            for (let number of numbers) {
                if (number > result) result = number;
            }
            return result;
        }
        console.log(max(4, 1, 9, -2));          --> 9 
    
    // Similar three-dot notation to call a function with an array of arguments:
        let numbers = [5, 1, 7];
        console.log(max(...numbers));           --> 7
       

       
    - THE MATH OBJECT
        console.log(Math.random())              --> 0.36993729369714856
        // This is a function that returns anew pseudorandom number between zero (inclusive) and one (exclusive)
        
        Math.floor(Math.random() * 10           --> 2
        // Math.floor()  rounds down to the nearest whole number

    
    - DESTRUCTURING
    //1:
       function phi(table) {
           return (table[3] * table[0] - table[2] * table[1]) /
            Math.sqrt((table[2] + table[3]) *
                      (table[0] + table[1]) *
                      (table[1] + table[3]) *
                      (table[0] + table[2]));
        }
       
        function phi([n00, n01, n10, n11]) {
            return (n11 * n00 - n10 * n01) /
             Math.sqrt((n10 + n11) * (n00 + n01) *
                       (n01 + n11) * (n00 + n10));
        }
    //2:   
        var first  = someArray[0];
        var second = someArray[1];
        var third  = someArray[2];
      // is the same as:
        var [first, second, third] = someArray;
      
    //3:
        let a, b, rest;
        [a, b] = [10, 20];
        console.log(a);                    --> expected output: 10
        console.log(b);                    --> expected output: 20
        [a, b, ...rest] = [10, 20, 30, 40, 50];
        console.log(rest);                 --> expected output: Array [30,40,50]
        
        
    - JSON
        // SERIALIZING the data. That means it is converted into 
           a flat description. A popular serialization format is 
           called JSON(“Jason”), which stands for JavaScript Object Notation.
        // "property name" 's are surrounded by ""; only simple data expressions
           no function, bindigns, or anything that computes something.
        
        JSON.stringify : takes JS value and returns JSON-enconded string
        
        JSON.parse : takes string and converts to value it encodes
    
        let string = JSON.stringifyO({squirrel: false,
                                      events:   ["weekend"]});
        console.log(string);                     --> {"squirrel":false,"events":["weekend"]}
        console.log(JSON.parse(string).events);  --> ["weekend"]
    

    - SUMMARY
    // Properties are accessed usingvalue.proporvalue["prop"]
    // 
*/
    

/*
*/

/*
*/