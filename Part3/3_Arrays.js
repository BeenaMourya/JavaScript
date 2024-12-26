//Arrays are Mutable----------------------
// let arr =[2,"bin",4,5.3,6,7];
// console.log(arr[0]);
// console.log(arr[1][0]); 
// console.log(arr.length);
// console.log(arr);
// ---------------------
// let empty = [];
// empty[0]="Zero";
// empty[1]="one";
// empty[2]=2;
// empty[3]=null;
// empty[6]=342;

// console.log(empty);

// empty[0]="Zo";
// empty[0][1]="Z";

// console.log(empty);

// console.log(empty[0][1]); 
// console.log(empty[0].length); 


// Methods---------------------------------
// push :add to end 
// pop: delete end and return
// unshift : add to start 
// Shift : delete from start and return it

// indexOf : return index of something ,or -1 if not found
//includes : search for a value [true or false ]

//concat : merde 2 arrays 
//reverse: reverse an array

//slice : copies a portion of an array

//splice : removes/replace/add elements in place [ splice(start,deleteCourt,item0...itemN)] change in original array 

// sort : sort the arr



let cars = ["audi","BMW","Safari"];
// console.log(cars);
// cars.push("toyota");
// cars.push("XZC");
// console.log(cars);
// cars.pop();
// console.log(cars);
// console.log(cars.unshift("benzi")); //5
// console.log(cars.unshift("jagwar")); // length : 6
// console.log(cars);
// cars.shift(); 
// console.log(cars);
 
// console.log(cars.indexOf("BMW")); //1
// console.log(cars.indexOf("B M W")); // -1   : not found
// console.log(cars[0].indexOf("i")); //3
// console.log(cars.includes("Safari")); 
// console.log(cars.includes("toy")); 


let con1 =["90car"];
let con = ["1carozox","2car","3car","4car","5car"];
// console.log(con1.concat(con));
// console.log(con.reverse());


// console.log(con.slice()); //copies whole array
// console.log(con.slice(2));
// console.log(con.slice(1,3)); //"2car","3car"
// console.log(con[0].slice(1,6));//caroz
// console.log(con.slice(con.length-1)); // 5car
// console.log(con);
// console.log(con.slice(-2)); //         from last 


let col_Splice = ['pink','yellow','green','orange','purple'];
console.log(col_Splice.splice(2)); //start
console.log(col_Splice.splice(2,4)); //start,deleteCount [........deleter elements form start to deletecount ]
console.log(col_Splice); //[ 'pink', 'yellow' ]

console.log(col_Splice.splice(1,0,"Black","grey","blue" )); //start,deleteCount ,add element
console.log(col_Splice);

console.log(col_Splice.splice(3,0,"brown" )); 
console.log(col_Splice);

console.log(col_Splice.splice(4,1,"yoyo"));
console.log(col_Splice);



let num = [ 12, 13,14,43,52,25,100];
let days = ["mon","tue","wed","thurs","fri","sat"];
console.log(days);
days.sort();
console.log(days);
console.log(num);
num.sort();
console.log(num); // convert the number into characterd then character wise arrange of num


// -----------practice q------------------
// change the state of array
let months =['jan','jul','mar','aug'];
// months.shift(); 
// months.shift(); 
// console.log(months);//[ 'mar', 'aug' ]
// console.log(months.unshift('jun')); //3
// console.log(months.unshift('jul')); //4
// console.log(months);

// console.log(months.splice(0,2,"jul","jun"));
// console.log(months);

// return the index of "javascript " from the arrat if it was reversed

let language = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(language.reverse());
console.log(language.indexOf('javascript'));

