// -----------Selecting Elements--------------------

//1. getElementById -[DOM methods]------------------
//Returns the Element as an object or null(if not found)
// to manipulate or access elements in a web page.
//Syntax:
//document.getElementById(id)

let imgbj=document.getElementById("description");//returns object :<p id="description">…</p>

//2. getElementByClassName-------------------------
//Returns the Elements as an HTML Collection or empty collection(if not found)
let clasnam = document.getElementsByClassName("oldImg");
 //HTMLCollection(3) [img#cre1.oldImg, img.oldImg, img.oldImg, cre1: img#cre1.oldImg] 
//  0: img#cre1.oldImg 
//  1: img.oldImg 
// 2: img.oldImg cre1:
// 3: img#cre1.oldImg length: 3
// [[Prototype]]: HTMLCollection

//.... every index element is an object
let objindex0 =document.getElementsByClassName("oldImg")[0];
let objindex2 =document.getElementsByClassName("oldImg")[2];// accessing obj indx 2 of collection


// for (let i = 0; i <clasnam.length; i++) {
// console.dir(clasnam[i]);    
// console.dir(clasnam[i].src);    
// clasnam[i].src="/Part8_/spiderman_img.png";  
// console.log(`value of img no. ${i} is changed`); 
// }



//getElementByTagName:-----------------------
// Returns the element as an Html Collection or empty collevction (if not found)
let TagCollectinoObj =document.getElementsByTagName("p");//
// let paraIndx1 =document.getElementsByTagName("p")[1].innerText="Put Your Head On my shoulder";




//Query Selectors
//Allows us to use any css selector
//it is use to select single element 
//note :- while selecting a property which have same  multiple classes ,id,elements name then the query Selectors will select the first one
let q1= document.querySelector('p');
let q2= document.querySelector('#myid');
let q3= document.querySelector('.myclass');//since we are selecting the class called myclass here class only represent a sing object but while using getElementsByClassName we are selecting all the class name at a time

// let q4= document.querySelectorAll('.allclass');

// console.dir( document.querySelector('div a'));//.....single a

// console.dir( document.querySelectorAll('div a'));//.....all a











