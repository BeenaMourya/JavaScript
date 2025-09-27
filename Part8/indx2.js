// here we will learn to manipulate the element in the html document

//using properties & Methods-------------------------

//innerText : shows the visible text contained in a node [text show on users screen is printed ]

//textContent : Shows all the full text  [show how we have written code in out html file and what we have written in our file including the hidden contents  ]

//innerHtml : shows the full markup  [text show on programmer screen is printed means file me kya likha hai including elements ,inshort program code]

// innerHTml
// Retrieves the HTML content inside the <h2> element.
// Since there’s no nested HTML inside <h2>, it returns just the inner text.
// Result: About.

//innerText
// Retrieves the visible text inside the <h2> element. It respects CSS properties like display: none and does not include hidden content.
// Result: About.

//textContent
// Retrieves the raw text inside the <h2> element, including hidden content (ignores CSS visibility or display styles).
// Result: About

let para = document.querySelector('p');
 
// console.dir(para.innerText);
// console.dir(para.innerHTML);
// console.dir(para.textContent);
//output of innerText:------------------------
//Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays
 
//output of innerHTML:-------------------------------
//...parent ke andar uske child ke sath uske elemenmt name bhi print hongey 


// <b>Spider-Man</b> is a superhero appearing in American comic books
// published by
//<a href="https://www.google.com/search?q=Marvel+Comics">Marvel Comics</a>.
//Created by writer-editor <b>Stan Lee</b> and artist <b>Steve Ditko</b>, he
//first appeared in the anthology comic book
//<a href="https://www.google.com/search?q=Amazing+Fantasy">Amazing Fantasy</a>
//#15 (August 1962) in the <a href="#">Silver Age of Comic Books</a>. He has
//been featured in comic books, television shows, films, video games,
//novels, and plays



//output of textContent :------------------------------
// Spider-Man is a superhero appearing in American comic books
// published by
// Marvel Comics.
// Created by writer-editor Stan Lee and artist Steve Ditko, he
// first appeared in the anthology comic book
// Amazing Fantasy
// #15 (August 1962) in the Silver Age of Comic Books. He has
// been featured in comic books, television shows, films, video games,
// novels, and plays


// -------------------------------------------------

let hto = document.querySelector('h2');
console.log(hto);// <h2>About</h2> (the element as it is in the DOM).
console.log(hto.innerHTML); //About 
console.log(hto.innerText);//About 
console.log(hto.textContent);//About

//Manipulation ---------------------------------------
hto.innerText="abcd";
hto.innerText="Hi,I am Peter Parker!";
hto.innerHTML="Hi,I am <b> Peter Parker!</b>";
let heading = document.querySelector('h1');
heading.innerHTML="<u> Spider Man </u>";
heading.innerHTML=`<u> ${heading.innerHTML} <h6>Robin Hood</h6></u>`;

//Manipulation Attributes----------------------------
//Attributes : eg : id,class,style,img,src
// Note : if we change the value of any attribute then their applying properties will not work like css property will not work if their id's value got changed

// ......  if we set a new class to element then their old/previous/existing classes will be removed/deleted


//syntax :
// obj.getAttribute(attr)
// obj.setAttribute(attr,val)
let mainimg =document.querySelector('img');
console.log(mainimg);// <img src="/Part8_/spiderman_img.png" id="mainImg" alt="Spider-Man"></img>

console.log(mainimg.getAttribute('alt'));//Spider-Man"
mainimg.setAttribute('alt','momotaro sujito' )
console.log(mainimg.getAttribute('alt'));//momotaro sujito

mainimg.setAttribute('src','/Part8_/creation_3.jpeg')
mainimg.setAttribute('class','blackSpy')

console.log(mainimg);//<img src="/Part8_/creation_3.jpeg" id="mainImg" alt="momotaro sujito" class="blackSpy">



//Manipulation Styling----------------------------
//obj.style
// using this styling property we can't change or access the external css  properties but only inline css is changed and can be accessed 

let head = document.querySelector('h1');
head.style;//CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

head.style.color="red";
head.style.backgroundColor="black";

//changing the backgroungcolor:
colors =["pink","green","yellow","pink"];

let link =document.querySelectorAll(".nav a");
for (let i = 0; i <link.length; i++) {
    link[i].style.color =colors[i];
}
//or using forOf loop
// for (const lik of link) {
//     lik.style.color ="blue";
    
// }


//Manipulation Styling----------------------------
//using classList
//syntax : obj.classList
// using this class list we can add multiple class to a single  element
//methods in Classlist :
// obj.classList   : to check the list
//classList.add()to add new classes
//classList.remove()to remove classes
//classList.contains()to check if class exist
//classList.toggle()to toggle beteween add & remove


let imgg =document.getElementById("h2Id");
console.log(imgg.classList); //gives the names of class
console.log(imgg.classList.add('c7')); //adding the new name to the existing class list 
console.log(imgg.classList); 

//example:
let btn = document.querySelector('button');
btn.classList.add('green'); 
console.log(btn.classList);//added the green class to btn 

btn.classList.remove('green'); 
// console.log(btn.classList.contains(' olpo'));//false

//toggle()  : if class exist then remove and doesnot exixt then add the class
console.log(btn.classList);
console.log(btn.classList.toggle("green"));//since the green class was not their so toggle added the green class and gives/print true to console
console.log(btn.classList.toggle('olpo'));//was not in the btn classList so added and return true
console.log(btn.classList.toggle("green"));// false means it was already their but now removed

 //practice example------------------------------------------
let boxx = document.querySelector(".box");
// console.log(boxx.classList);
boxx.classList.add("BoxBackground"); //adding the class 
console.log(boxx.classList);

// ..... note : the class which we are adding their css properties must be defined after the existing/old class css properties in the css file

 


// Navigation :---------------------------------------
//.........  it allows you to traverse between elements in the DOM hierarchy
// parenmtElement
// children
//previousElementSibling/nextElementSibling

// parenmtElement examples :

let hfour =document.querySelector('h4');
console.log(hfour.parentElement);//<div class="box BoxBackground">…</div>

//  children ex :-

 let boxDiv =document.querySelector('.box');
 console.log(boxDiv.children);//HTMLCollection(2) [h4, ul] 0: h4 ,  1: ul   length: 2  [ [Prototype]]: HTMLCollection
 console.log(boxDiv.children[1]);//<ul>...</ul>

 console.log(boxDiv.childElementCount);//2
 

//previousElementSibling/nextElementSibling example:

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.childElementCount);//3
console.log(ul.children);
// console.log(ul.children[1]);
console.log(ul.children[0].previousElementSibling);//null : reason - no previous child is their
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[0].nextElementSibling);
console.log(ul.children[1].nextElementSibling);

//changing the style of h1 by accessing the sibling of h1 ie. img

let img = document.querySelector('img');
let previousElement =img.previousElementSibling ;
previousElement.style.color ="Orange";
// or
// img.previousElementSibling.style.color ="aqua";



// Adding elements-----------------------------------

// functions :
// appendChild (element)  
// append (element)
//  prepend (element)
//  insertAdjacent (where,element)



// appendChild (element)--------  
// elements are insterted at last of parent's child elements
 // .... elemnts are inserted inside a parent element 
// syntax :  .......   document.createElement('p');

//ex 
let newPara =document.createElement('p');
newPara.innerText ="Hi im new to this IIt college."; //...we had created a paragraph with the text but still not visible in the document

let parentEle = document.querySelector('.box')
parentEle.appendChild(newPara);

// append (element)-----------------------
let buttn =document.createElement('button');
buttn.innerText ="say Hii";
newPara.append("\n ....myself Sakura",buttn,"nice to meet you");


//  prepend (element)-----------------------
parentEle.prepend("prepend to pretend for pretty potty");


//  insertAdjacent (where,element)-------------------
// position Parameters:
// where : 
// 'beforebegin' : before the reference/targettElement itself  
// 'afterbegin' : just inside the targetelement, before its first child
//'beforeend' : just inside the targetElement,after its last child
//'afterend' : After the targetElement itslef

let butn = document.querySelector('.olpo');
butn.style.color="red";
butn.style.backgroundColor="pink";


let newEle = document.createElement("p" );
newEle.innerText = "i'm learning new concepts and revising it";
newEle.style.color="black";
newEle.style.backgroundColor="yellow";

// butn.insertAdjacentElement("beforebegin",newEle); //before the element

// butn.insertAdjacentElement("afterbegin",newEle); //inside the parent as a child

// butn.insertAdjacentElement("beforeend",newEle); //inside ele but at last

// butn.insertAdjacentElement("afterend",newEle); //end of ele


//Removing Elements------------------------------
//removeChild(element)
//remove(element)

//removeChild(element)------------

let bdy = document.querySelector("body");
// bdy.removeChild(butn);
//or
// butn.remove();

