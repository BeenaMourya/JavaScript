//functions

function Name(n) {
    console.log(n);
    
}
// Name("null");


function avg(a,b,c) {
    console.log((a+b+c)/3);
    
}
// avg(2,4,31);

// multiplication------------
function multi(n) {
 for (let i = 1; i <=10; i++) {
   console.log(n*i);
 }  
 console.log("--------");
   
}
// multi(73);

// ---------------return -------------------------
//return some value from the function

function sum(a,b) {
  return a+b;
}
// console.log(sum(sum(4,3),5));
// console.log(sum(3,2));

// return sum of 1 to n------------------------

function Sum_N(n) {
let sum =0;
  for (let i = 1; i <=n; i++) {
 sum+=i;
console.log(sum);
  }
  return sum;
}
console.log(Sum_N(14));



//create a function that returns the concatenation of all stringin an array
function concat(n,m,o) {
  let result = n.concat(m,o);
  return result; 
}

// console.log(concat("this is me "," Beena","mourya"));

let str =[ "hi","Hello","chao","bye"];
function conCat(str) {
  let resul ="";
  for (let i = 0; i < str.length; i++) {
  resul+=str[i];
    
  }
  return resul;
}
console.log(conCat(str));



// chatGPT practice --------------------------------
