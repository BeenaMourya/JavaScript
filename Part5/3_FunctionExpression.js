// function Expressions : another way of writing functions
// Not Hoisted: Only accessible after its declaration.

// let name =function(a,b){
//     return a-b;
// }


name =function(n){
    // console.log(n*n);
    return n*n;
    
}
// name();

// Higher Order Funtions-------------------------
// A function that does one or both:
//*takes one or multiple functions as arguments
// * returns a function

// example 1. 
let greet = function(){
    console.log("salve");
}
let wishes = function(){
    console.log("All the Best");
}
// function multipleGreet(funct,m) {
//     for (let i = 1; i <=m; i++) {
//     funct(i);
//     ; }   
// }
function multipleGreet(funct,time) {
    let res =[];
    for (let i = 1; i <=time; i++) {
    res.push(funct(i));
     }  
     return res; 
}

// multipleGreet(greet,2);//salve salve

// multipleGreet(wishes,3);  //All the Best *3

// multipleGreet(function () {
//     arr=[1,2,5];
//     console.log(arr); 
// },4);
num =function(n){
    // console.log(n*n);
    return n*n;
    
}
console.log(multipleGreet(num,6));//num  definition
// nam (without parentheses)-----------
// When you use nam without parentheses, you're passing the function reference (i.e., you're not calling it, just referencing it).
// This is useful when you're passing the function as an argument to another function, like in multipleGreet(nam, 6):

console.log(multipleGreet(num(),6));//calling num  
// 1. nam() (with parentheses)-----------
// When you use nam(), you are calling the function nam immediately.
// This means you're invoking the function, and it will execute and return a result.



 
//here we are not passing the function as an argument instead we are  calling the function  which will only be do calling of that function . 
//pass function as argument by name only no parenthesis
//if () parenthesis are passed with name it will work as calling of funtion


// nam(): This invokes the function and runs its code, returning the result immediately.
// nam:  This passes the function as a reference so it can be invoked later by something else (like multipleGreet).


// To Avoid Undefined----------------------------------------------------------
// If a function doesn't return anything explicitly, its return value is undefined by default
// * Returning something is essential when you need the function's output elsewhere.
// * Without a return, you lose the result of the function's computation


function gr(name) {
    console.log("Hello " + name); 
}
// let message = gr("Alice"); // Logs "Hello Alice"

// console.log(message);
 // Output: undefined (because greet doesn't return anything)


// ccorrect code --------
function grr(name) {
    let G = "hello"+name;
    // console.log(G);
    return G;
}
// let msg   = grr("Sakura");
// console.log(msg);




//Example 2. 
function OddEven(req) {
    if (req=="odd") {
     return  function (n) {
            console.log((n%2!=0));   
        }
    } else if (req == "even"){
       let even = function (n) {
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong request");
        
    }
}
let req = "odd";
// let req = "even";
let fun =OddEven(req);
fun(3);
fun(4);




// Methods ------------------------------------------
//  Actions that can be performed on an object
//  jis function ko hum objects ke andar initialise/define kartey hai  us function ko method boltey hai


const obj ={
    add : function (a,b) {
        return a+b;
    },
    sub : function (a,b) {
        return a-b;
    },
     multi: function (a,b) {
        return a*b;
    }
}
 console.log(obj.add(2,3));

// similarly the methods we use usch as : Math.random ,Math.PI, array.push( ) , etc which are typeof objects internally 
//  ex .   arr = [1,2,3,4];   arr.push(6);  
// here, arr.push   =>   [ array] = object   for which  we are using .push method 

//Method Shorthand -------------

let cal = {
    modulo(a,b){
        return a%b;
    },
divide(a,b ){return a/b}
}


