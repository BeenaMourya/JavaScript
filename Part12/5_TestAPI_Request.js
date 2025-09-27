//Testing API requests

//Tools :[to test api] : 
// *Hoppscoth 
// *Postman 

//link of Hoppscoth : https://hoppscothch.io


// --------------------------------------------
//--------------------Ajax----AJAJ-------------
// Asyncronous js and XML[now JSON]
// [process of calling api and receiving the response ]

//it is a web development technique used to create dynamic, fast, and interactive web applications.

//work :. It allows web pages to fetch or send data to a server asynchronously without refreshing the page     This enhances user experience by making web applications more responsive.

// . Common Use Cases of AJAX ---------------------
// * Live search suggestions (like Google search autocomplete)
// * Infinite scrolling (e.g., Facebook or Twitter feeds)
// * Auto-saving forms (Google Docs auto-save)
// * Fetching real-time data (weather updates, stock prices)
// * Updating parts of a webpage dynamically (comments, likes, etc.)

// ex  : [sending a request to api and receiving a response ] this is an asynchronous process  [this request and response cycle is called AJAX calls ] 
//since its async process ,so the calls/request send to or received  from api dont load to page 

//-----------------Http Verbs ----------------
//example:-
// *GET ,*POST , *DELETE

//---------Status Code ------------------
//example:-
//* 200 - OK
//* 404 - Not Found
//* 400 - Bad Request 
//* 500 -Internal Server Error


// -------Additional Information in URLs-----------
// Query Strings

// example:-   https://www.google.com/search?q=mango+shake
//q=mango+shake  .....its a query str in the form of key=value pair

// example 2 :- link?name=beena&marks=87
// here query str =>[ name =>key ,beena=>value]
// ex 3:-   https://api.ppotterdb.com
//  https://api.ppotterdb.com/v1/movies/harry+porter   ----routes
//  https://api.ppotterdb.com/v1/movies/:id  
//here id is variable (means some values are replace at the id positon)
// ---------Https Headers-----------------------
// Headers – Contains metadata about the req/response.
// Body – Contains actual data (JSON, HTML, etc.).
// Key to remember: HTTP follows a request-response cycle
// Headers,value

// ---------------our First Request ----------------
//using Fetch
// fetch(url)

//How Does Fetch Work With HTTP?
// fetch(url) → Sends an HTTP request.
// The server processes the request.
// The server sends back an HTTP response.
// fetch() returns a promise that resolves to a Response object.
// We call .json() to extract the actual data.

// before fetch we were using XMLHTTPREQUESTOBJECT



    // * fetch() does not return data directly – you must use .json() * Always log Respo.ok and Respo.status to check if the response is valid.


let url = "https://catfact.ninja/fact";
let fetchUrl=fetch(url);  // fetch return promise 

 
fetchUrl.then((Respo)=>{
    // console.log("response from API [Headers/metadata]",Respo); 
   
    // output:-              response from API Response {type: "cors", url: "https://catfact.ninja/fact", redirected: false, status: 200, ok: true, ...}

    // *The fetch() function returns a promise that resolves[success] to a Response object.
// *it does not directly give the API data; you must use .json() to extract it.
//* This is a Response object, which contains details about the HTTP request.
// * If you want the actual cat fact, you should use .json() like this



// console.log(Respo.json());

 //...... return promise obj
// ...... inside promise >object >data .
// ...... Respo.json : makes the data in readable format.



// Respo.json().then((data)=>{
// console.log(data);
// });

//or----------

return Respo.json();
})
// .then((data)=>{
//     // console.log(data);
//     console.log(data.fact);
// })

// .catch((er)=>{
//     console.log("error is : ",er);
// });


//-----example 2 :-chaining     ----------------------

// let endpoint = "https://dog.ceo/api/breeds/image/random";
// let fetching=fetch(endpoint);  

// fetching.then((Reso)=>{
//  return Reso.json();
// })
// .then((data)=>{ 
// console.log("data1 = ",data.message);
// return fetch(endpoint);
// })
// .then((data2)=>{ 
//     return data2.json();
// })
// .then((d2_json)=>{
//     console.log("data2 = ",d2_json.message);
// })
// .catch((er)=>{
//     console.log(er);
    
// })

// -----------------------------------------------------
// open inspect =>Network =>[(html,css,js files) with a fact/api] click on api/fact =>response section 
 

// ---------use of async and await with promises---------------

//using Fetch with async/await

let URL = "https://catfact.ninja/fact";

async function getFact(){
//    let respons = fetch(URL); 
//    console.log(respons);

// //fetch(URL) is not awaited
// fetch(URL) returns a Promise, but not using await, so respons will be a pending promise.

//fetch(URL); returns a Promise immediately, meaning it does not wait for the response to be received.
// Since you did not use await, respons will not contain the actual response but a Promise that is still pending.
// Logging respons will show a Promise object, not the actual fact.


//or----------
try{
    let respons =  await fetch(URL); 
    let data = await respons.json(); //since they are async function so we use await 
       console.log(data);
       console.log(data.fact);
    let respons2 =  await fetch(URL); 
    let data2 = await respons2.json(); 
       console.log(data2);
       console.log(data2.fact);
    
}
catch(e){
    console.log("err --- ",e  );
}
}

getFact();





