// Array References : reference => Adderess in memory

// console.log('name'=='name');// ..........true
// console.log('name'==='name');//.......true
console.log('5'*4);//.......true [string 5 is is(Implicit Type Conversion )type coerced to a number ]
console.log('5'-3); //2

console.log([1,3,2]==[1,2]);//..........false
//... Reason : Each array ([1, 3, 2] and [1, 2]) is a distinct object in memory.
//....The == operator compares references when dealing with objects, and since these arrays have different references[address], the comparison returns false.

// console.log([2]===[2]);
//.....Similar to the first case, each [2] is a separate object in memory with a unique reference.
//.....The === operator checks both the type and the reference for equality. Since the references are different, it also evaluates to false.

// console.log([]==[]);//........false
// console.log([]===[]); //........This condition will always return 'false' since JavaScript compares objects by reference, not value.


// let arr =[1,2,3,4]; //...arr =>reference variable
// let arr2 =arr;
// arr2.push(6);
// console.log(arr2);
// console.log(arr2==arr);//....true
// console.log(arr2===arr);//.....true




// ---------------constant array--------------------

// the variables/refernece var are constant not the values    
//  ...because the [ref.var.] stores the address of values  
// but we can change the values of const var 
// in const reference variable  we cant reassign the address/reference of another var 



const ary = [1,2,3,4,5];
// console.log(ary.push(12));// ........6
//  console.log(ary.push(11)); //.......7
// console.log(ary); //..... 1,  2,  3, 4, 5, 12, 11
// console.log(ary.pop()); //..11
// console.log(ary);  //[ 1, 2, 3, 4, 5, 12 ]

// ary = [1,4,8,12,16,18]; //...... dont assign new values to constant var 
let a =[1.2,32];
a =ary; //.......posible to assign const var to normal var
console.log(a ,"wfp,d,c");

const co =a;
console.log(co);
const n =[12,13,13,15];
console.log(n = ary); //we cannot assign a var/address of another var to constant variable 







