// Template Literals
// they are used to embeded expression in a string
let PencilPrice =5;
let rubber = 2;
let totalPrice = PencilPrice+rubber;
// console.log("the total price is " ,totalPrice," rupees");
//or 

// templateral literals example---------------
let output =`the total price is : ${totalPrice} rupess \n it includes prices of pen i.e. of ${PencilPrice} \n rubber of ${rubber} rupees`   //back tiks [``]
// console.log(output);

let a =4;
//  console.log(a++); // 4//print then increment
//  console.log(a); //1+a =5
//  console.log(++a); //1+5=6

let b =7;

//  console.log(b--); // 7//print then increment
//  console.log(b); //b-1 =6
//  console.log(--b); //1-b 6-1=5

// ---comparision Operators

console.log(a==b); //compare value
console.log(a===b);//compare both value and typeof 

console.log(0 ==" "); //0=false and [" "] empty = 0 therefore  0=0=true
console.log(0 ===" "); //false
console.log(null ==undefined ); //true //null is loosely equal to undefined.This means no type coercion occurs; it’s a predefined behavior in the JavaScript equality algorithm.
console.log(0 ==false); //false =0
console.log(NUL==SOH);