//"This" keyword refers to an obj that is executing the current piece of code.
const student ={
name : "Beena",
age : 19.4,
City :"Mumbai",
country :"India",
eng :89,
math :88,
phy :90,
 // this == sudent object[calling object]
getEvg(){
    console.log(this);
    
    let avg = (this.eng +this.math+this.phy)/3;
    console.log(` ${this.name} from ${this.City} the avg marks ${avg}`); 

//.........  we cant directly acces the other property  defined outside method   in the method   
// use 'this' keyword to access other property that are outside the  method but inside the object
// this means the calling object [jo object is method ko call car rahi hai]
// this.eng  ==> this is called by student object in which the eng property is accessed by this property 
// this keyword ko jo object call kar raha hai uska property 
}
}
student.getEvg();


 function get(){
    console.log(this);//  bydefaultwindow object
}
    get();
