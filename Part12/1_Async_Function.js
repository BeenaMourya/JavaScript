//Async Function----------------------------------
//async & await Keywords

// async and await are used to handle asynchronous operations more efficiently and in a readable manner
//They are built on top of Promises and provide a way to write asynchronous code that looks synchronous.


// The async Keyword :-
// The async keyword is used to define an asynchronous function. When a function is marked as async, it always returns a Promise.

// ---------------------------------------------

 async function gret() {
    return "hello"; 
}
// console.log(gret());

// ....... Promise { 'hello' }
//even though "Hello" is returned normally, JavaScript automatically wraps it in a Promise by default.

// ----------------------------------------------

async function greet() {
    // Abor.fd(); //promise {<rejected>}     reason :Abor is undefined
    // throw "throw some error----- ";//Promise {<rejected>: 'throw some error----- '}
    return "hello";
     
}
// console.log(greet());

// greet();
// -------------------------------------------
// async function grt() {
//     // return hello; //rejected
//     return 'hello'; 
// }
// grt()
// .then((res)=>{
//     console.log("promise was successful",res);
// })
// .catch((err)=>{
// console.log("rejected due to",err);

// })
// -------------------------------------------
let salve = async()=>{
    return '.....salve.........';
}
console.log(salve()); 
