let firstName  = "beena";
if(firstName=="beena"){
    console.log(`Welcome ${firstName} at this place`)
}
//Q1. create a traffic light system that shows what to do based on color
let color ='green';
if (color =='red'){
    console.log(`the color is ${color} you must Stop`);
}
else if (color =='yellow'){
    console.log(`the color is ${color} you must slow down`);
}
else if (color =='green'){
    console.log(`the color is ${color} you must Go`);
}
else{
    console.log(`the signal is break`);
}

// Q2 create a system to calcuate popcorn prices based on the size customer asked for
// if sixe is 'XL. price=250rs.
// if sixe is 'L. price=200rs.
// if sixe is 'M. price=100rs.
// if sixe is 's. price=50rs.
let popcorn_size='S';
if (popcorn_size==='XL' ) {
    console.log(`'${popcorn_size}, price is Rs.250`)
}
else if (popcorn_size==='L' ) {
    console.log(`'${popcorn_size}, price is Rs.200`)
}
else if (popcorn_size==='M' ) {
    console.log(`'${popcorn_size}, price is Rs.100`)
}
else {
    console.log(`'${popcorn_size}, price is Rs.50`)
    
}
//Nested if-else
let marks=45;
if(marks>35){
    console.log("pass");
    if(marks>80){
        console.log("Grade : O");
    
    }
    else if(marks>70){
        console.log("Grade : A");
    }
    else if(marks>60){
        console.log("Grade : B");
    }
    else {
        console.log("Grade : C");
    }

}
else{
    console.log("better luck next time");
}

// Logical Operator :combine expression
//&& ,|| ,!
if (!(marks >=35 || marks>=80)) {
    console.log("pass");
    console.log("Grade : A");
    
}
// Qs A good string is a string that starts with the letter 'a' and has a letter >3.write a program to find if a string is good or not
let str = "apple";
if( str[0]=='a'&& str.length>3 ){
console.log("good");
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[str.length-1]);


}
else{
console.log("Bad");}


// predict the output of following code :
let num=12;
if((num%3===0) &&( (num+1==15)||(num-1 == 11))){
    console.log("safe");
}else{
    console.log("un safe");

}
// truthy & falsy------------------
// everything in js is true or false (in boolean context).
//this doesn't mean their value itelf is false or true,but they are treated as false or true if taken in boolean context 
//falsy vslues : false,0,-0,On(Bigint value),""(empty String) ,null, undefined,NaN

let first =""; //false
if (first) { 
    console.log("str is not empty");
}else{
    console.log("str is  empty");
}
// -----------Switch Statement-------------------
alert("type color"); 
console.error("found the error in file");
console.warn("found the warning msg for  file password");

let Colour =prompt("enter color");
switch(Colour){
    case "Red" : console.log(`Color : ${Colour} love , energy `);
    break;
    case "Green" : console.log(`Color : ${Colour}  "peace , nature`);
    break;
    case "Blue" : console.log(`Color : ${Colour} trust , wisdom`);
    break;
    case "Orange" : console.log(`Color : ${Colour} warmth , happiness`);
    break;
    case "Purple" : console.log(`Color : ${Colour} royalty , mystery`);
    break;
    case "Black" : console.log(`Color : ${Colour}  Power , evil`);
    break;
    case "White" : console.log(`Color :  ${Colour} purity , innocence`);
    break;
    default :  console.log("no color");
}