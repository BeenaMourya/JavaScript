//Qs1.Write an arrow function named array Average that accepts  an array of number and returns the average of those numbers
let arrayAvg =(arr)=>{
let sum =0;
for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return (sum/arr.length);
}

let array =[1,2,3];
// console.log(arrayAvg(array));

//Qs2.Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not

let isEven =(n)=>{
    if (n%2==0) {
        console.log("Even");
    }
     else{   console.log("Odd");
     }
}
// isEven(5);

//Qs3.What is the output of the following code
const obj ={
    message:'Hello,World!' ,

    logMessage(){
        console.log(this.message);//'Hello,World!'
    }
};
// setTimeout(obj.logMessage,1000); 
//......undefined
//calling obj =setTimeout= window inbuilt property  , ...window obj doesnt have  property :logMessage  ,...so undefined



//Qs4.What is the output of the following code:

let length=4;//global scope
function callback(){
    console.log(this.length); //undefined 
}
const object={
    length:5, 
   methd (callbk){
        callbk(); // regular function
        // this in a plain function defaults to the global object.
        //Since this is the global object:   In the global scope, length is 4 
        //this.length evaluates to 4.
    },
};
object.methd(callback,1,2); //
//In object.method(callback, 1, 2);, the extra arguments are ignored because the method only accepts one parameter (callbk).
// callback();
