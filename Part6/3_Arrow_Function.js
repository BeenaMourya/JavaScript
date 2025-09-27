//Arrow Functions
const funcSum =(a,b)=>{
    console.log(a+b); 
} 
funcSum(2,4);
funcSum(funcSum(1,0),funcSum(2,0));

//------------What Happens Step-by-Step-------------
// funcSum(1, 0) is Called:
// The function executes and logs 1 + 0 = 1 to the console.
// However, funcSum does not return a value; it only logs the sum.
// By default, if a function doesn’t return anything, it implicitly returns undefined.


// The outer funcSum is called with the results of the two inner calls as arguments
// funcSum(undefined, undefined);

// Inside funcSum, the a + b expression becomes:
// undefined + undefined
// Adding two undefined values in JavaScript results in NaN (Not-a-Number).


// Why undefined?
// The root cause is that your funcSum function does not return a value:

// When funcSum is used as an argument, its implicit return value (undefined) is passed instead of the computed sum.

//How to Fix It?
// If you want funcSum to return the sum so that it can be used in nested calls, you need to explicitly return the result:
//ex: 
const funcSu = (a, b) => {
    return a + b; // Return the sum
};

// Now the function works as expected
console.log(funcSu(2, 4)); // Output: 6
console.log(funcSu(funcSu(1, 0), funcSu(2, 0))); // Output: 3

//or
const cube =(n)=>n*n*n;
console.log(cube (2)); // Output: 8
console.log(cube (cube (2),cube (2))); 
// Output: cube(8,8)  =  
//since we can only pass a one valid argument the other argu are ignored by the js so,1st args is only considered therefore cube(8)=512

//to calculate the cube of each argument
let cub =(...num)=> num.map(n=>n*n*n);
console.log(cube(2)); // Output: [8]
console.log(cube(2, 3, 4)); // Output: [8, 27, 64]