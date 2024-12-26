//Math Objects
//Methods
// Math.abs(n)
// Math.pow(a,b)
// Math.floor(n)  //roundoff nearest and smallest integer value
// Math.ceil(n)   //roundoff nearest and biggest integer value
// Math.random()  // random bumber between 0 to 1 ,where 1 is exclussive

//PRoperties : PI ,E

// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.abs(+12));
// console.log(Math.abs(-12.5));
// console.log(Math.pow(2,4));
// console.log(Math.floor(5.998));//5
// console.log(Math.floor(-5.998)); //-6

// console.log(Math.ceil(5.998));//6
// console.log(Math.ceil(-5.998)); //-5

// console.log(Math.random());




// Random integers------------------------------------------
// from 1 to 10

// Step 1: let var = Math.random(); //ans =0.97910884234116
// Srep 2 : var = var *10; 
// Srep 3 : var = Math.floor(num); 
// Srep 4 : var = var+1; 


let num = Math.random();
num = num*10;  // * 10 =>decides the max range of number 
num =Math.floor(num); //0-9
num =num+1; //..... to get 10  /include 10 also
console.log(num);
//or
console.log(Math.floor(Math.random()*10)+1);

//Qs genetate a random number between 1 and 100
console.log(Math.floor(Math.random()*100)+1);

//Qs genetate a random number between 1 and 100
console.log(Math.floor(Math.random()*5)+1);

//Qs genetate a random number between 21 and 29
console.log(Math.floor(Math.random()*9)+20);



