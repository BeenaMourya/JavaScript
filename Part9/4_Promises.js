// Refactoring with promises----------------------

//The promises object represents the eventual completion(or failure ) of an asynchronous operation and its resulting values

//resolve and reject ie.[success & failure] of callback


// . A Promise can be in one of three states:[Promise Lifecycle ]

// *Pending: The initial state, neither fulfilled nor rejected./ When the function starts execution.
// *Fulfilled: The operation completed successfully.
// *Rejected: The operation failed.


// The Promise constructor takes a function (known as the executor) with two parameters:
// resolve: A function to call if the operation succeeds.
// reject: A function to call if the operation fails.

function saveToDataBase(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("success : data was saved");
        }
        else {
            reject("Failure : weak connection-----------"); //error
        }
    }
    );
}
// console.log(saveToDataBase('Bina info marks 9.7 cgpa')); //The function returns a Promise object immediately.



//----------------Promise Method :-----------------

//Handling the Promise:
// To handle the asynchronous result of the Promise, you can use the .then() and .catch() methods:

// .then() is called if the Promise is fulfilled (i.e., resolve is invoked). It receives the success message as its argument.
// .catch() is called if the Promise is rejected (i.e., reject is invoked). It receives the error message as its argument.

// let request =saveToDataBase('Ranma Fan');


// request //request = promise object
// .then((msg)=>{
//     console.log("promise resolved..........");
//     console.log(msg);

// })
// .catch(()=>{
//     console.log("promise rejected");
//     console.log(request);
// });
//console.log(typeof request);  // "object"

//------------or------------
// .... in the below code the we are directly applying the then and catch method to the calling function 



// ----------------- chaining the then method-------------------
// saveToDataBase(' we love  Demon slayer ').then(
//     () => {
//         console.log("data 1 saved : promise resolved");

//         saveToDataBase("helloworld").then(
//             () => {
//                 console.log("data 2 saved ");

//             })
//     })
//     .catch(() => {
//         console.log("promise rejected");


//     });

// -------------Promise Chaining in proper way -------------------


saveToDataBase(' we love  Demon slayer ').then(
    () => {
        console.log("data 1 saved : promise resolved");
        return saveToDataBase("helloworld");
    })
.then(()=>{
    console.log('data 2 saved');
    return saveToDataBase("bina");
})
.then(()=>{
    console.log('data 3 saved');
})

    .catch(() => {
        console.log("promise rejected");
    });





// ------------------------------------------------------------
//what is promise object ?
// when you call a function that returns a Promise, the returned value is always a Promise object.

// The function returns a Promise.
// The Promise is now assigned to request.


