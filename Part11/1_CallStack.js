// BreakPoint -----------to debug the code------------
// Sources =>top => js file =>code => add breakpoints
//we can see the call stack

    //---------------------Call Stack-------------------
//Stack - DS - LIFO Principles .

    //explain with the help of example : ----------------------
    function hello() {
        console.log('hello to all.');//3
        
    }
    //hello(); // call
function bye() {
    console.log('bye by');//2
    hello();
    console.log('nice meeting you');//4
    
}
// console.log('nice!'); // 1

// bye();




//example 2:---------
function one() {
    return 1;
}
function two() {
    return one()+one(); //1 +1 =2
}
function three() {
    ans =  two()+one(); //2+1=3
    console.log(ans);
    
}

three();



//Complete Call Stack Flow Summary
// three() → Pushed onto call stack
// two() → Pushed onto call stack
// one() → Pushed onto call stack → Returns 1 → Popped
// one() → Pushed onto call stack → Returns 1 → Popped
// two() computes 1 + 1 = 2 → Returns 2 → Popped
// one() → Pushed onto call stack → Returns 1 → Popped
// three() computes 2 + 1 = 3, logs the result → Popped
// Call stack is empty, execution ends.





//Step-by-Step Call Stack Execution--------------------------------

//Step 1: three() is called------------------
// main()
// three()
//Step 2: two() is called inside three()--------------
// three() calls two(), so two() is pushed onto the call stack.
// main()
// three()
// two()
//Step 3: one() is called inside two()
// two() calls one() the first time.
// one() is pushed onto the call stack
// main()
// three()
// two()
// one()

//one() returns 1 and is popped from the stack.
// main()
// three()
// two()

//Step 4: one() is called again inside two()
// two() calls one() again.
// Another one() function execution is pushed onto the call stack.
// main()
// three()
// two()
// one()
// one() returns 1 and is popped from the stack

// main()
// three()
// two()

// Step 5: two() returns its result
// Now, two() has calculated
// two() returns 2 and is popped from the call stack

// Call Stack after two() returns 2:
// main()
// three()


//Step 6: one() is called inside three()
// Inside three(), we now have

// three() calls one(), so one() is pushed onto the call stack.

// main()
// three()
// one()

//one() returns 1 and is popped from the stack
// main()
// three()


//Step 7: three() calculates and logs the result

// After logging, three() finishes execution and is popped from the call stack.

// Final Call Stack:
//main()  // (now empty)


//final Output : 3



