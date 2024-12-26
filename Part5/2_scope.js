// scope : determines the visibility of variables ,objects and functions from different pats of code.
// type of scopes: function ,block ,lexical, global 

// Function scope : Variables defined inside a function are not accessible (visible) from outside the function

function sum(){
    let s = a+b; // function scope
}
// console.log(s); 
// console.log(sum(1,2)); 

//Global scope : 
let Sum =43;

//Block scope:
// variable declared inside a () block cant be accessed from outside the block
{
    let block = "diablo"; 
    const con = "di";
    var bk = "diab"; //......block scope does'nt apply on block scope
}
// console.log(block); //....... error :not defined
// console.log(con);//..... error :not defined
// console.log(bk);//......diab


//lexical scope:
// a variable defined outside a function can be accessible inside another function defined after the variable declaration
// means : parent cant access child property but child can access

function outerFun(){
    let x,y;
    x=10;
    y=30;
function innerfun() {
    let a = "access outside the function";
    console.log(x);
    console.log(y);
    console.log(hoisting);
    
}
console.log(a); // error : not accessible from child function

let hoisting = "can access before initializatino";
// innerfun(); // function scope : 
}

// outerFun(); //invoking the function

//Qs. what will be the output ?
let greet = "hello";  //global scope
function changeGreet() {
    let greet ="nameste"; //function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); //lexical scope
        
    }
}

console.log(greet); //hello
changeGreet(); //nameste






