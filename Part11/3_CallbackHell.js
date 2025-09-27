//What is Callback Hell?
// Callback Hell occurs when multiple nested callback functions make the code unreadable and difficult to manage. It often happens when handling asynchronous operations like file reading, database queries, or API calls in JavaScript.
h1=document.querySelector('h1');
function changeColor(colr,backColr,delay) {
    setTimeout(()=>{
    h1.style.color = colr;   
    h1.style.backgroundColor = backColr;  
},delay); 
}
    changeColor('red','yellow',1000);
    changeColor('blue','orange',2000);
    changeColor('black','pink',3000);
    changeColor('white','grey',4000);

div =document.querySelector('div');
function changeDiv(backColr,delay,nextColorChange) {
    setTimeout(()=>{
    div.style.backgroundColor = backColr;  
   
if (nextColorChange) {  // This is false because it's undefined (falsy)
    nextColorChange();   // Will not execute (prevents error in the below calls  )
}
},delay); 
}

changeDiv("blue",1000,()=>{
    changeDiv('orange',1000,function (){
        changeDiv('red',1000,function () {
            changeDiv('green',1000,function () {
                changeDiv('red',1000)
            })
        })
    });
}
);
// changeDiv('green', 1000);
// No callback is passed here. So nextColorChange is undefined.
// The condition if (nextColorChange) is false because nextColorChange is undefined.
// Since the condition is false, the callback is not called, and the code inside the if block is skipped.

