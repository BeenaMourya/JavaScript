// What is Type Conversion in JavaScript?
//.......... Type conversion in JavaScript refers to the process of converting a value from one data type to another. It can occur in two ways:

//--------------Implicit Type Conversion (Type Coercion:---------------

// .........Automatically performed by JavaScript when using certain operators or expressions.
//example :
console.log(5 + '5'); // "55" (Number is coerced to a String)  and concatenation occurs.
console.log(5 * '2'); // 10 (String is coerced to a Number) and arithmetic is performed.
console.log(5 / '2');//2.5

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

// Example 3: Equality Comparison---------------

//.... With == JavaScript tries to coerce types to make them comparable:

console.log(5 == '5'); // 5==5 true (String is coerced to a Number)
console.log(false == 0); // true (Boolean is coerced to a Number)


//...... With ===, no coercion happens:
console.log(5 === '5'); // false (values are same but Types are different) 
console.log(false === 0); // false  [=== checks both the value and the type of the operands. ]
//false is a Boolean type.    and   0 is a Number type.
//Since the types are different, false === 0 evaluates to false

console.log(Number(false) === 0);//true

// Boolean-------------------------
// When used in  Conditiinal  JavaScript coerces values into booleans:
if ('hello') {
    console.log('This is truthy');
  }
  //The expression 'hello' is a non-empty string.
// non-empty strings are considered truthy value
// Truthy means the value is treated as true in a Boolean context.

//Truthy Values:  -----------------------------

// In JavaScript, the following are considered truthy (treated as true in a Boolean context):

// Non-empty strings: 'hello', '0', 'false', etc.
// Non-zero numbers: 1, -1, 3.14, etc.
// Objects: {}, [] (even empty objects or arrays are truthy)
// true
// Any value that is not explicitly falsy.

console.log([] == false); // true (Type coercion: [] becomes an empty string, which is falsy)
// console.log([] === false); // false (Strict equality: no type coercion)


// Falsy Values: -------------------------------------

// The following are considered falsy (treated as false in a Boolean context):

// false
// 0 (the number zero)
// -0
// '' (an empty string)
// null
// undefined
// NaN (Not a Number)




//----------- Explicit Type Conversion: ----------------

// /Manually converting a value using functions or methods like Number(), String(), Boolean(), etc.

console.log(Number('123')); // 123 (String to Number)
console.log(String(123));   // "123" (Number to String)
console.log(Number('abc'));   // NaN (Not a Number)
console.log(parseInt('123')); // 123 (Integer)
console.log(parseFloat('123.45')); // 123.45
//To String------------------
console.log(String(123));   // "123"
console.log((123).toString()); // "123"
// To Boolean------------
console.log(Boolean(0));  // false
console.log(Boolean(1));  // true
console.log(Boolean('')); // false (Empty string is falsy)
console.log(Boolean('hello')); // true



//Key Difference Between == and ===:------------------
// Loose Equality (==):-
//......... == performs type coercion if the types are different (e.g., 5 == '5' is true because the string '5' is coerced to the number 5).
// Allows type coercion.
// Converts both operands to a common type before comparison

//Strict Equality (===):-
//............ === does not perform type coercion, so types must also match (e.g., 5 === '5' is false because the types are different).


// No type coercion.
// Both the value and the type must be the same to evaluate as true



