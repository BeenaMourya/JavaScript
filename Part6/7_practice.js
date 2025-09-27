//Write an arrow function that returns the square of a number 'n'
let square = (n)=>{return n*n};
let squ = (n)=> n*n;
// console.log(square(3));
// console.log(squ(4));

// write a function that prints "Hello World" 5 times at intervals of 2s each

let fun = function s() {
    // let count=0;
  let id =  setInterval(() => {
        console.log("Hello World");
    // count++;

    // if (count == 6) {
    //     clearInterval(id);
    //     console.log("Interval stopped!");
    // }
    //---------- or ---------
  



    }, 2000);
    console.log(fun);//[Function: s]
    console.log(id);//1
    
    setTimeout(()=>{
        clearInterval(id);
        console.log("Interval stopped!");

    },10000);
    
}
fun();