//API : [Application Programming Interface]

//APIs are essential components in software development that allow different applications, services, or systems to communicate with each other. They define a set of rules and protocols for how software components should interact.


// search on website a URL => [request]=>server =>[response]=>Html,css,js =>[convert the response into webpage]

//similarly we are going to send request to API's   insted of srever
// and reesponse from API will be in raw form not in html,css,js

//example : we like the insta account of someone    in this case the page is not reloaded but the change occur using request response cycle using API's 


// -----------Real-Life Analogy-----------------------------

//exaple :----------------------------------
//suppose we are in the hotel we order some food from the waiter the waiter takes the order ,prepare the recipe in the kitchen and serve the order
//relate:-
//so, from this we can relate that : we are the user[js] => the order was request => waiter was the API =>kitchen is the server => the food served by waier was the response of request from the waiter
//waiter was the interface between user and server

//or
// Think of an API as a restaurant menu:
// The menu lists all available dishes (functions/services).
// The customer (client) orders a dish (makes a request).
// The kitchen (server) prepares and returns the dish (response).
// The customer doesn't need to know how the dish is prepared; they just receive the result.
// ---------------------------------------------------------------

// we are going to study the work and usage of web  API's

// A Web API (Application Programming Interface) is a set of rules that allows different software applications to communicate over the internet. It enables data exchange between a client (e.g., a web browser or mobile app) and a server.

//this web api gives the response [data] in the in the json formatc 


//user[client]=>(req)=>API[URL =link(endpoint)]=> response(data in json )


//example of API's :
// https://catfact.ninja/fact (send random cat facts)
//https://www.boredapi.com/api/activity (sends an activity to do when bored)
//https://dog.ceo/api/breeds/image/random (sends cute dog img)



// Based on Communication Style:  Most commonly used, follows HTTP and CRUD operations.

//  REST API – The Most Common Type
// Principles of RESTful APIs
// Stateless – Each request must contain all the necessary information (no session storage).
// Client-Server Architecture – Separation between frontend (client) and backend (server).
// Cacheable – Responses can be stored to improve performance.
// Uniform Interface – Follows standard HTTP methods:
// GET → Retrieve data
// POST → Send data
// PUT → Update data
// DELETE → Remove data




// ----------------------------------------
//JSON [JavaScript Object Notation] 
//its a format of data which is the response from APi

// json is similar to js obj but the key of json is a string . we cant use the 'undefined' as a vlue to a key in json

// more detail visit : www.json.org

//-------------------- JSON----------------------

// -------- Accessing data from Json-------------
//*Json.parse(data)Method :-
//   To parse a string data into a js [json data =>js obj]

//*json.stringify(json)Mrthod:-
//    To parse a js obj data into json  [js obj =>json data]

//response from API  are in [json data ]the json data  are in string format
// parse = converting data format into another data format [eg. :- str to obj , obj to str]



// example :-
let jsonresponse ='{"fact":"The ancestor of all domestic cats is the African Wild Cat which still exists today.","length":83}'; //string format json
console.log(jsonresponse); //we get the whole string  
console.log(jsonresponse.fact);//undefined          reason = json[response data ]its not obj still its a string

//to get the data into js object use :Json.parse
let objJson = JSON.parse(jsonresponse);
console.log(objJson);
console.log(objJson.fact);


// example 2 :-
let stu ={
    name : "beena",
    age :19,
    marks :80
}
let JsnStr = JSON.stringify(stu);
console.log(JsnStr);//{"name":"beena","age":19,"marks":80}
