//js Object Literals
//used to store keyed collections and complex entities
//objects are a collection of properties

//example-

let student={
name : "Beena",
age:19,
marks : 89.9,
city : 'Mumbai',
colors : ["purple","Blue","Black","pink"],
};
// console.log(student);
// console.log(student.name);



// Qs  create an object literals for the properties of thread /twitter post which includes -
// username , content ,likes ,reposts ,tags

const post ={
    username: "@BeenaMourya",
    content:"This is my #firstPost",
    likes:1324,
    reposts:23,
    tags:["#MicrosoftOfficosl","#Google"],
};

// console.log(post);
// console.log(post.username);
// console.log(post['likes']);
// console.log(post["tags"]);

// let id = "username";
// console.log(post[id]); //@BeenaMourya"
// console.log(post.id); //undefined



// -------Get values---------------------------

//JS automatically converts objects keys to strings.

//Even if we made the number as a key ,the number will be converted to string 

const obj ={
12 :"bin",// all keys are string
32 : 3434, //
 null : "NULLL", // here null is not the js keyword  it is a string 
undefined : "UN",
box :[123,"bob","nigi","mikiy"],
true: false,
greet: function() {  // Function
    console.log("Hello!");
},

details: { //........ nested object
    grade: "A",
    subjects: ["Math", "Science"]
}
        };

// console.log(obj);
console.log(obj[12]); //converted to string then compare with keys then print the values
// console.log(obj.12);  //gives an error :- .12 is assume as number not taken as string 
console.log(obj[null]);
console.log(obj.null);

obj.undefined ="uundefined"; //modify/update
obj.add ="added a new property"; //adding new property
obj["myself"] = "Bom";
delete obj.true;  // delete obj.keyname;
console.log(obj.undefined , obj.add  , obj["myself"]);
console.log(obj);


obj.greet();//hello

obj["greet"]();//obj["greet"]():  =>   obj["greet"] retrieves the function. =>  () invokes the function


obj["greet()"]; //wrong :- Interpret "greet()" as a single string literal, which means it will look for a property with the exact key name "greet()" in the object.        ........     In your object, there is no property named "greet()", so it would return undefined.

//     obj["greet()"]: Looks for a property named "greet()" (does not exist).
//       obj[greet()]: Executes greet() and tries to use its return value as the key.

console.log(obj.details.grade); //A
console.log(obj.details.subjects[0]); //

// ---------Array of objects--------------------------------------
const classInfo=[
    {name:"bindi",
    grade:"O+",
    city:"Mumbai"
    },
    {
        name:"bing-pring",
grade:"O+",
city:"Mumbai"
    },
    {name:"bla-bla",
        grade:"O+",
        city:"Mumbai"
    }
];
console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[1].grade);
classInfo[1].city ="INDORE";
console.log(classInfo[1].city);

// short hand of object literals----------------------
let name = "Charlie";
let age = 30;
let person = { name, age }; // Equivalent to { name: name, age: age }
console.log(person); // { name: "Charlie", age: 30 }


//. Using this in Object Literals
// The this keyword refers to the current object.

let pers = {
    name: "Alice",
    greet() {
        console.log(`Hi, I'm ${this.name}!`);
    }
};
pers.greet(); // "Hi, I'm Alice!"
console.log(pers);
