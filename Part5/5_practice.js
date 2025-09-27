//write a js function that returns array elememts largaer than a number--------------------------

// let arr = [1,2,3,5,6,4,7,9,8,10];
// let num =8;
// function GreatrNums(num,arr) {
//     for (let i = 0; i <arr.length; i++) {
//        if (arr[i]>num) {
//         console.log(arr[i]);
//        }  
//     }

// }

//Qs2.Write a JavaScript function to extract unique characters from a string.Example:
// str=“abcdabcdefgggh”
// ans=“abcdefgh
// ----------------------------------

 let str="abcoabcdefgggh";

let unique = function (str) {
    let ans="";  
    for (let i = 0; i < str.length; i++) {
    
   if (ans.indexOf(str[i])=== -1) { 
    ans += str[i]; 
}     
} 
return ans;
}
// console.log(unique(str));  

    // ans.indexOf('a')===-1  --> "".indxOf('a')===-1 //true       
    // ans = a;
   // ans.indexOf('b')===-1  --> "a".indxOf('b')===-1 //true 
   // ans =ab;
   // ans.indexOf('c')===-1  --> "ab".indxOf('c')===-1 //true 
   // ans =abc;
   // ans.indexOf('o')===-1  --> "abc".indxOf('o')===-1 //true 
   // ans =abco;
   // ans.indexOf('a')===-1  --> "abco".indxOf('a')===-1 //false 
   // ans =abco;   --> skip "a".

   

//Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// example : 

// Example:
// country=["Australia","Germany","UnitedStatesofAmerica"]output:"UnitedStatesofAmerica
 
// ---------------------------------------------
let country=["Australia","India","brazil","Germany","UnitedStatesofAmerica"];

let largestCountryName = function (county) {
    let indx =0;
    for (let i = 1; i < country.length; i++) {
        
     if (country[i].length > country[indx].length ) { 
       indx =i;
       }      
    }
    console.log(" at index :",indx);
return  country[indx];
}
// console.log(largestCountryName(country));



// Write a JavaScript function to count the number of vowels in a String argument ---------------------

let string = "beena";
let vowls = function (str) {
   let count =0;
   const vowels =['a','e','i','o','u'];

   str.toLowerCase().split('').forEach(currentChar=>{

if (vowels.includes(currentChar)){
    count++;
    console.log(currentChar); 
}
   }

);
console.log(count);

}
// vowls(string);


// split(''), it splits the string into an array of its individual characters.
// console.log(string.split(''));


//Write a JavaScript function to generate a random number with in a range(start,end).--------------

let start =4;
let end =9;
let random = function (start,end) {
 let r =Math.floor((Math.random()*(end-start)+1))+start; //we added +1 to include end 
    console.log(r);

// let s1 =Math.random();
//  let s2 = s1 *(end-start); //7
// let s3 =s2+1;//8
// let s4= Math.floor(s3);
// let s5 =s4+start; 
// console.log(s1," ",s2," ",s3," ", s4 ," ",s5);



let s =Math.floor((Math.random()*10)+54);
console.log(s);//54-63 =10

}


random(start,end);
// start=2 ,end =9  ( random * 9-2 )+1 )+2 





