// JS is Single Threaded 

// JavaScript was designed to be single-threaded to make it simpler and safer for handling web pages. It ensures that:
// ✅ Only one operation runs at a time (avoiding conflicts).
// ✅ The DOM is manipulated safely without race conditions.
// ✅ The execution is predictable and easy to debug.

//Imagine if JavaScript had multiple threads modifying the same web page at the same time—it could cause unexpected behavior like buttons disappearing while you're clicking them!

// 🚀 The Purpose of JavaScript Being Single-Threaded
// JavaScript is mainly used for:
// ✔️ Handling User Interactions (Clicks, Keypresses, Form Submissions)
// ✔️ Updating the DOM (Changing Content, Animations)
// ✔️ Fetching Data from Servers (APIs, Databases)

// For these tasks, a single-threaded execution ensures smooth UI updates and consistent behavior.

// What Does Single-Threaded Mean?
// JavaScript can only execute one task at a time in the main thread.
// It does not execute multiple operations in parallel.
// If one task takes too long, it blocks the execution of other tasks.


// ❌ What Are the Cons of Being Single-Threaded? -------------

// ❌ Blocking the UI – If a function takes too long, the whole page freezes (e.g., infinite loops).

// 🚫 Blocking Operations: If one task takes too long (e.g., a large loop), it freezes everything, including user interactions.

// 🚫 Delayed Asynchronous Execution: Even with setTimeout(0), tasks must wait until the Call Stack is empty before they execute.

// ❌ Slow Performance – If JavaScript had to wait for every slow task (like fetching data), it would be inefficient.
// ❌ Not Ideal for Heavy Computation – Processing large data in one thread slows everything down.

//------------ How Do We Overcome These Issues?-------------------
// JavaScript is single-threaded, but it has ways to handle long tasks without blocking execution:  JavaScript provides asynchronous solutions:

// Callbacks
//  Promises
//  async/await


// let a = 23;
// console.log(a); //synchronous nature : line wise execution

// let b = 100;
// console.log(b);
// console.log(a+b);

//Example 2---------------------------------------

function fetchData(Callback) { //Parameter: Callback
    setTimeout(()=>{
        console.log("Data Fetched!");
        // Callback("Here is the data ");
    },3000);
}
function processData(data) { //parameter
    console.log("processing",data);
 
}
// fetchData(processData);
//Argument: processData → Here, processData is the argument passed to fetchData.
//  This means Callback = processData inside fetchData.
// since, Callback holds processData, this line is equivalent to:
// processData("Here is the data ");

fetchData(processData("call")); // to execute this 1st comment Callback("Here is the data "); 
 





// Why Use Callbacks?
// Callbacks are used to handle asynchronous operations (like fetching data).
// Without callbacks, JavaScript would execute synchronously, blocking the execution of further code.



















// ------------------------------------------------------------
// Conclusion: Should JavaScript Be Multi-threaded?
// ❌ Not by default, because it would break the synchronous execution model that makes web development simple.
// ✅ But we can use Web Workers and asynchronous programming to handle long tasks efficiently.