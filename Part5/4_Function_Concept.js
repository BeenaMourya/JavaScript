//**1. Function Declarations, Expressions, and Arrow Functions

//*Function Declaration:
function add(a,b) {
    return a+b;
}
// ....Hoisted: The function is hoisted to the top of its scope.   This means they can be called before they are defined in the code.

function greet() {
    console.log("Hello!");
}
greet(); // .....Outputs: Hello!
//.......In this example, greet() can be called before its declaration because it’s hoisted.



// Function Expressions----------------------------
let multiply = function(a, b) {
    return a * b;
};
//.....Not Hoisted: Only accessible after its declaration.



//Arrow Functions------------------------------
let ArrowFun =(a,b,c)=>{a-b*c};

//....... Implicit return: If only one expression is present, it returns the result implicitly.


// **2. Function Expressions  ======================

//....... First-Class Functions: 
// In JavaScript, functions are treated like other variables (they can be assigned to variables, passed as arguments, and returned from other functions).
let ad = function addition(a, b) {
    return a + b;
};
console.log(ad(3, 5)); // Outputs: 8
//or
let gree = function() {
    return "Hello!";
};
console.log(gree()); // Outputs: Hello!


 
// .....Not Hoisted: Unlike function declarations, function expressions are not available before their definition.
// console.log(square(4)); //..... ReferenceError: Cannot access 'square' before initialization
let square = function(n) {
    return n * n;
};


// 2. Passing a Function Expression as a Callback ..........Function expressions are commonly used as arguments in higher-order functions like .forEach(), .map(), or .filter().
let numbers = [1, 4, 3];
numbers.forEach(function(n,indx) {//callback function
    console.log(indx," : " +n*n);
});

//we can write the callback function outside the loop
// example:
let a =['a','b','c','d','e'];

a.forEach(aLoop);

function aLoop(value,i,j) {
    console.log(i," : ",value,j);
}

//Rest and Spread Operators-------------------------------------

// Rest Parameters (...args): Allows functions to accept a variable number of arguments

// 1.Rest Operator (...)
// The rest operator collects multiple elements into a single array or object. It is typically used in function parameters or destructuring.

// The rest parameter is used to collect multiple arguments into a single array. It is primarily used in function definitions to handle an arbitrary number of arguments.

// Key Points:
// Used in function parameter lists.
// Collects arguments into a single array.
// Must always be the last parameter in the function.
//ex 1.
function adNu(a,b,c,...othe) {
    console.log(othe); //[ 7, 6, 8 ]
    return a+b+c; ////21
}
let ress =adNu(12,4,5,7,6,8); 
console.log(ress); 


//2. In Destructuring Arrays-----------------
// It collects the remaining elements of an array into a new array.


const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(rest); // Output: [30, 40, 50]

//3. In Destructuring Objects----------------
// It collects the remaining properties into a new object.


const { name, ...details } = { name: "Alice", age: 25, location: "NY" };
console.log(name); // Output: "Alice"
console.log(details); // Output: { age: 25, location: "NY" }

// Spread 
// The spread operator is used to expand an array or object into individual elements or properties.

// Key Points:
// Used in function calls, array literals, or object literals.
// Breaks down a collection (array, object) into its components.
let names=['Beena','Yone','Mikey','Inosuke']
function getNames(n1,n2,n3) {
    console.log(n1,n2,n3);
    
}

getNames(names[0],names[1],names[2]);
getNames(...names);//...names syntax in JavaScript is the spread operator. It is used to unpack an iterable (like an array) into individual elements. Let’s break down how it works with your code example
// The spread operator ...names takes the elements of the names and "spreads" them into individual arguments. So, the function call becomes
getNames(names)

//ex 2.
// Example 1: Expanding an array in a function call
let arr = [1, 2, 3];
console.log(...arr); // Equivalent to console.log(1, 2, 3);

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...arr)); // Output: 6

// Example 2: Merging arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4]

// Example 3: Expanding an object
let obj = { a: 1, b: 2 };
let copy = { ...obj, c: 3 };
console.log(copy); // Output: { a: 1, b: 2, c: 3 }



//. Callback Functions----------------------------------------

// Definition: Functions passed as arguments to other functions and executed at a later time.
//ex 1.
function doOperation(a,b,callback) {
    let ans = a+b;
    callback(ans);
}
doOperation(3,5,function (ans) {
    console.log(ans);         
    
})

//ex 2.
function nextnumber(dice) {
    dice(); // Calling the callback function
}
function infunction() {
    let s = Math.floor(Math.random()*6)+1;
    console.log(`the dice roll gives ${s}`);
}

nextnumber(infunction);

//ex 3.
function greeting(namee) {
    console.log(`hello, ${namee}`); 
}
function goodbye(namee) {
    console.log(`goodBye, ${namee}`); 
}
function userName(callbackfunction) {//function callback as parameter
    const name ="Sakura";
    callbackfunction(name);
}
userName(greeting);
userName(goodbye);

// Function Composition-------------------------------
// Composition involves combining functions to create new functions.

function double(x) {
    return x*2;
}function increment(x) {
    return x+1;
}
function doubleTheIncrement(x) {
    return increment(double(x)); //3*2=6 (6+1) = 7
}
console.log(doubleTheIncrement(3));

//Function Binding and Context (this)--------------------------

//this keyword: The value of this inside a function depends on how and where the function is called.

let obje ={ num:123};
function show() {
    console.log(this.num);
}
show.call(obje);





