//Await keyword :-
//handlinmg Rejection with await



div = document.querySelector('div');
function changeDiv(backColr, delay,) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

let rnd = Math.floor(Math.random()*5)+1;
if (rnd >3) {
    reject("promise rejected...---");
}
            div.style.backgroundColor = backColr;
            console.log(`color changed to ${backColr}`);
            
         resolve(`color changed to: ${backColr}`); //or + backColr
        }, delay);
    })
   
}
// async function randomcolor(params) {
//  await   changeDiv("blue",1000);
//  await  changeDiv('orange',1000)
//  await   changeDiv('purple',1000);
//  await  changeDiv('pink',1000);

//  let a =5;
//  console.log(a);
//  console.log("new number= ",a+3);
 
// }
// randomcolor();


//Note : if any error occurs in the asyncronious code the remaining code will not run

// -----------------------------------------------
// use try and catch block to handle the error
async function randomcolor(params) {
    try{
    await   changeDiv("blue",1000);
    await  changeDiv('orange',1000)
    await   changeDiv('purple',1000);
    await  changeDiv('pink',1000);
   
   
    }
    catch(err){ console.log("error caught in the code");
        console.log(err); //promise rejected...---
   }
   let a =5;
   console.log(a);
   console.log("new number= ",a+3);
}
   randomcolor();