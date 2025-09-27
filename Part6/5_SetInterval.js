//setInterval(functino,timeout)

// setInterval() in JavaScript is a built-in function used to repeatedly execute a function or a block of code after a specified interval of time (in milliseconds).

// The function continues to execute at the defined interval until it is explicitly stopped using clearInterval();

// setInterval(() => {
//     console.log("Hello, world!");
//   }, 1000); //....... Executes every 1 second
  
//  ........ You can stop an interval using clearInterval() and the ID returned by setInterval().
//example:-------------

// let count=0;
// let id =setInterval(() => {
//     console.log("Hello, kitty!");
//     count ++;

//     if (count>=5) {
//       clearInterval(id);
//       console.log("Interval stopped !"); 
//   }
//   },2000);
// console.log(id);


// Passing Parameters---------------------------

function greet(name) {
  console.log(`Hello, ${name}!`);
}

setInterval(greet, 2000); // Passes "Sakura" as an argument to `greet`

// Key Points------------------------------------

//..... Asynchronous Nature: setInterval runs asynchronously, allowing other code to execute while waiting for the interval.
// ....Delay Accuracy: The delay specifies the minimum time between executions, but actual execution depends on the system's performance.
// ....Clear Intervals: Always use clearInterval() to avoid memory leaks or undesired behaviors, especially in web applications.
// ....Browser Compatibility: Supported in all modern browsers and Node.js.