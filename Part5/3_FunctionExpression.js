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
function multipleGreet(funct,m) {
    let res =[];
    for (let i = 1; i <=m; i++) {
    res.push(funct(i));
     }  
     return res; 
}

// multipleGreet(greet,2);

// multipleGreet(wishes,3);

// multipleGreet(function () {
//     arr=[1,2,5];
//     console.log(arr); 
// },4);

console.log(multipleGreet(name,6));


//here we are not passing the function as an argument instead we are  calling the function  which will only be do calling of that function .
//pass function as argument by name only no parenthesis
//if () parenthesis are passed with name i will work as calling of funtion





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
