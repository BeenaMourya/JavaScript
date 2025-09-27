//Await keyword
//work :- pauses the execution of its surrounding async function until the promise is settled (resolve or reject)

//No panding
function getNum() { //async fun..
    return new Promise((res,rej)=>{
 setTimeout(()=>{
    let num = Math.floor(Math.random()*10)+1; 
    console.log(num);
       res(); //signaling that the Promise is resolved.
 },1000);
    } );
}
// getNum();

async function giveNum() { 
  await  getNum(); //wait for 1000
  await   getNum(); // pause for the preious function to resolve then execute
    getNum(); 
    getNum();
}
giveNum();

// How await Works:-
// It makes JavaScript wait for the result of a Promise before proceeding to the next line.
// It helps avoid callback hell and .then() chaining.

// Key Points to Remember:-
// await can only be used inside an async function.
// It pauses execution until a Promise is resolved.
// It helps avoid the complexity of .then() and .catch().
// It works well with try...catch for error handling.
// If multiple await calls are independent, use Promise.all() for better performance

// Why is res(); called?
// The Promise needs to resolve at some point. Otherwise, the await would hang indefinitely.
// res(); tells JavaScript that the async operation is complete.
// If res(); were missing, await getNum(); would never resolve, and the next line in giveNum wouldn’t execute.

// ----------------------------------------------------
//example 2

div = document.querySelector('div');
function changeDiv(backColr, delay,) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.style.backgroundColor = backColr;
         resolve(`color changed to: ${backColr}`); //or + backColr
        }, delay);
    })
   
}
async function randomcolor(params) {
 await   changeDiv("blue",1000);
 await  changeDiv('orange',1000)
 await   changeDiv('purple',1000);
 await  changeDiv('pink',1000);
}
// randomcolor();


