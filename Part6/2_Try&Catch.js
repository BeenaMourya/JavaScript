//try & catch
// ..... the try statement allows you to define a block of code to be tested for errors while it is being executed

// .... the catch statement allows you to define a bloc of code to be ec=xecuted , if an error occurs in the try block



// ex :------------------

console.log("hellome");
// console.log(a);  // ReferenceError: a is not defined. At this point, JavaScript stops execution.

console.log("hello to all");   //Since the execution has already stopped due to the error on the previous line, this line is never reached, so "hello to all" is not printed.


// How to Prevent This-----------------------
  
// To ensure that subsequent code runs even when there is a potential error, you can use a try...catch block:

console.log("salve");
// console.log(chama);

try {
    console.log(chama);
    
} catch (e) {
    console.log("Error : chama is not defined by you\n",e.message);
    
} 

console.log("Bye bye Naruto");


