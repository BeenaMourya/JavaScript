// Qs1. Create a number variable num with some value.Now,print“good”if  the number is divisible by 10 and print“bad” if it is not.
let num =20;
if (num%10==0) {
    console.log("Good");
}
else{
    console.log("Bad");
}

// Qs2.Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert(by substituting their name & age):name is age years old.[Use template Literals to print this sentence]

// let userName= prompt("Enter name");
// let userAge= prompt("Enter Age");

// console.log(alert(`${userName} is ${ userAge} years old`));



// Qs3.A string is a golden string if it starts with the character‘A’or‘a’ and has a total length greater than 5.For a given string print if it is golden or not
let str = "application";
if ((str[0]=='a'||str[0]=='A')&& str.length>5) {
    console.log("Golden");
}else{
    console.log(" Not a Golden String");
}

//Qs5.Write a program to find the largest of 3 numbers
let n1 =129;
let n2 =17;
let n3 =53;
if ((n1>n2) && (n1>n3)) { //1>7 && 1>5
    console.log(n1);
}
else if( n2>n1 && n2>n3  ){ // 7>1 && 7>5
    console.log(n2);
}
else{
    console.log(n3);
}

// Write a program to check if 2 numbers have the same lastdigit.Eg:32 and 47852 have the same lastdigit i.e. 2

let num1=321;
let num2=478521;

if((num1%10)== (num2%10)){
console.log(`last Digit : ${num2%10} and their lastDigits are same`);
}else{
    console.log("Not same");
}

