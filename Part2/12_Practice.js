// Qs1.Write a JS program to delete all occurrences of element‘num’ in a given array.Example:if arr=[1,2,3,4,5,6,2,3]& num = 2 Result should be 
// arr=[1,3,4,5,6,3]

// let ary =[1,2,3,2,6,7,9,6,3,4];
// num=6;

// for (let i = 0; i < ary.length; i++) {
//    if (ary[i]===num) {
//     ary.splice(i,1);  
//    } 
// }
// console.log(ary);


// Q2. Write a JS program to find the no of digits in a number.Example:if number=287152,count=6
console.log("start");
let num = 123456; // Example number
let coun = 0;

while (num > 0) { 
    num = Math.floor(num / 10); // Drop the last digit
    coun++;
}

console.log("count:", coun); // Output: 6



// console.log("start");
// let number =123456;
// let count =0;
// while (number>0) {
// number%=10
// count++;
// number/=10;
//

// }
// console.log( "count :",count);
n=143;

console.log ( (n-( n%10))/10 );//14
console.log (  n%10);//3
console.log ( n/10 );//14.3

// ((143-(143%10))/10) =143 - 3 =140/10 =14

