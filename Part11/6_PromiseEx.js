
h1 = document.querySelector('h1');

function changeColor(colr, backColr, delay) {
    setTimeout(() => {
        h1.style.color = colr;
        h1.style.backgroundColor = backColr;
    }, delay);
}
// changeColor('red', 'yellow', 1000);
// changeColor('blue', 'orange', 2000);
// changeColor('black', 'pink', 3000);
// changeColor('white', 'grey', 4000);


// --------------------------------------------------------
// resolve() takes only one argument. If you pass multiple, only the first is considered.
//Fix: Use string concatenation or template literals

div = document.querySelector('div');
function changeDiv(backColr, delay,) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.style.backgroundColor = backColr;
         resolve(`color changed to: ${backColr}`); //or + backColr
        }, delay);
    })
   
}

changeDiv("blue",1000)
.then((res)=>{
    console.log(res);
    return    changeDiv('orange',1000) // returns promise obj
.then((res)=>{
    console.log(res); //log the promiose obj
     return   changeDiv('purple',1000);
        })
.then((res)=>{
    console.log(res);
     return   changeDiv('pink',1000);
        })
.then((res)=>{
    console.log(res);
        })
.catch((er)=>{
    console.log(er);
})


    })







