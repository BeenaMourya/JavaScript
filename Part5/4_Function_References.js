// function references refer to a way to treat functions as first-class entities, meaning you can assign them to variables, pass them as arguments to other functions, or return them from functions

//or


// A function reference refers to a way of referring to a function without calling it. In programming, it allows you to pass the function itself (not the result of the function) to another function, assign it to a variable, or store it in a data structure.


// Key Concepts:
//1. First-Class Functions: Functions are treated like any other variable. You can store a function in a variable and call it later.

//..... You can store a reference to a function in a variable without executing it.

// example :-
function sayHello() {
    console.log("Hello, world!");
}

// ...........Assigning the reference
const greet = sayHello;
//...... Here, greet holds a reference to the sayHello function.
// ........Calling the function via its reference
greet(); //....... Output: Hello, world!

// -----------------------------------------------------------
//2. Passing Functions as Arguments: You can pass a function to another function as an argument.
// example:-
function sayHello() {
    console.log("Hello, world!");
}

function executeFunction(func) {
    func(); // Call the passed function
}

// Passing the reference
executeFunction(sayHello); // Output: Hello, world!

// ------------------------------------------------------------
//3. Returning Functions from Another Function: A function can return another function as its result.       or
// A function reference can also be returned from another function.


//example :

// ......... Function Definition: Defines the 'multiplier' function that returns another function
function multipler(factor) {
    //....... This inner function is also a function definition
   return function (n) {
       return n*factor;
   };
}

// ....Function Reference: Calls 'multiplier' to get a reference to the returned function
let double = multipler(2);//.You are calling the multiplier function and passing 2 as an argument to it. The parentheses () with 2 mean you are executing the function multiplier immediately. This is not a reference; this is an actual function call.

//************ */ Why is This a Function Call?*****************
// When you write multiplier(2), here's what happens:---------- The multiplier function is executed with factor = 2.            The multiplier function returns another function
//....... function (number) { return number * factor;}             This returned function is then assigned to the variable double.


//.. Function Call: Executes the function referred to by 'double'
console.log(double(4));// ....Outputs: 8 (Executes the inner function with 'n = 4')


// ..........You need to call multiplier to execute it and get the function it returns.
// ...If you did not include the parentheses, you would just be referencing the multiplier function itself, not invoking it.
//... If you then tried to use double(5), it would throw an error because double is not the inner function yet. You’d need to call double(2)(5) to use it properly.





// ----------------------------------------------------------------

//4. Using Function References: Instead of calling a function immediately, you reference it (without parentheses) to pass it around or store it

//example 1:
function gree(name) {
    return `Hello,${name}`;
}
const sayhelo =gree;//function reference
console.log(sayhelo('Bindi')); 
// You’re not calling gree. Instead, you’re storing its reference in  sayhelo, and you can call it later


//example 2: -----Passing Function as Argument---------
function operate(n1,n2,operation) {
    return operation(n1,n2);
}
function sub(a,b) {
    return a-b;
}
console.log(operate(6,2,sub));



//5.  Storing Function References in Data Structures
// You can store multiple function references in an array or object.

function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
// Storing references in an object
const operation ={
    // (add and subtract) as values to its properties:
    addition:add,  //operations.addition points to the add function.
    subtract : sub,
    name: "Alice",
    gq() {
        console.log(`Hello, ${this.moon}!`);
    },
};
// Access and use function references
console.log(operation.addition(5, 3));
console.log(operation.subtract(5, 3));

// The operations.addition property is accessed, which holds a reference to the add function.
// The add function is then called with arguments 5 and 3.
// The function executes: return 5 + 3;.
// The result (8) is returned and logged to the console.