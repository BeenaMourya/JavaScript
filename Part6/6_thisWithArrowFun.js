//this with Arrow functions----------------------

// ********** Regular Functions ***************** 
// this in Regular Functions:

// ......this depends on how the function is called.

// scope :- ..... If called as a method of an object, this refers to the current  object.

//......  If called as a standalone function, this is either undefined (in strict mode) or the global object (window in browsers).. 

//function scope me this means  current object

// function  [call ]=> obj.fun => student.getname =>student = object . so, this =student object



//this in Arrow functions :-

//........Arrow functions do not have their own this
//They inherit this from their lexical scope (the scope in which the function was defined means parents scope


const stu = { // by default global scope of stu obj so 'this' = global/window object 
    name :"Beena",
    marks :92,
    property :this, //window object for 
    getName : function () {
        return this.name; // this= calling obj for methods   .....  so "this" =stu
    },
getMarks:()=>{
    console.log(this);// 'this' =parent scope =>window
    return this.marks; // 'this' is called by =stu  iska 'this' [scope] = window so 'this' = window
},

};
// console.log(stu.getName);//[Function: getName]
// console.log(stu.getName());// Beena

// console.log(stu.getMarks());
//since we have defined this for stu obj and not for window obj ,our parent this = window .means we dont have any property of marks in window object therefore undefined

let a =3;                               //           ^
// console.log(this.a); //....undefined reason above |

// Example 2 :
// we have benefits of using this in arrow function while using the inbuild functions of window object

let data ={
 
    getInfo1: function(){
//..........arrow function key parent [function(){ ] ka this, this = data , ..... because parent[function()] ka this hai data object q ki ye ek normal function hai.

// setTimeout(callback , time) since arrow function is passed as callback so settimeout is not the parent function

        setTimeout(() => {
            console.log(this);// data obj
        }, 2000);      
    },

    getInfo2 : function()  {
        // in regular fun. :- this = calling object 
        //  so  the function is called by built in function i.e. setTimeout 
        // therefore calling object = setTimeout
        // since setTimeout is the function of window object
        //therefore this = window object
        setTimeout(function () { // window obj
            console.log(this);
            
        },2000);
    }
}

data.getInfo1();
data.getInfo2();
