//Axios : its a library to make HTTP requests
//its more compact to send request to api ,internally it uses the fetch method 

//to use axios library :-
// write the source of axois CDN library in the script tag 

//why to use axios insted of fetch : ?
//=> in fetch method the data was  in json 

// With fetch, you must manually parse the response using .json().
// With axios, it automatically parses JSON responses.
// *. Better Error Handling :-
// fetch only rejects on network errors, not HTTP errors (like 404 or 500).
// axios automatically rejects for non-2xx responses.

// -------------------------------------------

let btn =document.querySelector('#button1');
btn.addEventListener('click',async()=>{
   let  store_Fact = await getFact();
    console.log(store_Fact);
    
    let para = document.querySelector('#facto');
    para.innerText =store_Fact;
    

})

let btn2 =document.querySelector('#button2');
btn2.addEventListener('click',async()=>{
   let  store_IMg = await getImg();
    // console.log(store_IMg);
    
    let IMG = document.querySelector('#img');
let src= IMG.getAttribute('src')
    // console.log(src);
    
IMG.setAttribute('src',store_IMg);
    

})






// --------------------------------------------
let url1= "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url1); 
        return (res.data.fact);
        
    } catch (error) {
        console.log("error : ",error);
     return "NO FACT FOUND";
    }
}
getFact();
// --------------------------------------------
let url2= "https://dog.ceo/api/breeds/image/random";

async function getImg() {
    try {
        let imgresponse = await axios.get(url2); 
        return (imgresponse.data.message);
        
    } catch (error) {
        console.log("error : ",error);
     return "NO FACT FOUND";
    }
}
getImg();



// -----------------------------------

// // --------------------------------------------
// let url= "https://catfact.ninja/fact";

// async function getFact() {
//     try {
//         let res = await axios.get(url);
//         console.log(res);
//         console.log(res.data.fact);
        
//     } catch (error) {
//         console.log("error : ",error);
    
//     }
// }
// getFact();



// // -----------------------------------









