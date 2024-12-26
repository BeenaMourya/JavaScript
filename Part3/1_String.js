// String Methods
//immutable ..
//No changes can be made to strings.
//whemever we try to make change, a new string is created and old ine remains same
 
let msg = "   he Llow Me  ";
console.log(msg.trim()); //trim() removes whitespace
console.log(msg);

// let password = prompt("set your pwd");
// console.log(password.trim());

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());

// String With Arguments-------------------------
//Arguments is a value that we pass to thr method.


// indexOf------
// returns the first index of occurrence of some value in string. or gives -1 if not found
let masg = "ILoveCoding";
// console.log(masg.indexOf("i"));//8
// console.log(masg.indexOf("o"));//2
// console.log(masg.indexOf("Lov"));//1


// Method chaining ---------------------------
let m ="    BeenaMourya";
let n = "12binsolo";
console.log(m.trim().toUpperCase());
console.log(m.trim().toUpperCase().indexOf("MOURYA"));

// Slice -------------------
console.log(n.slice(2,4)); //bi
console.log(n.slice(4)); //nsolo
console.log(n.slice(-3)); // n.length -3 => 9-3 =>6  //olo


// replace =------------------------
// searches a value in the string and return a new string with the value replaced 
let str = "LOveYou.";
console.log(str.replace("O","o"));

// repeat------------------------------
// returns a string with the number of copies of a string
let me = "ILoveYouBeena";
console.log(me.repeat(3));






