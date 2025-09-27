let x0 = [ ['x',null,'0'], [null,'x',null] ,['0',null,'x']];
// console.log(x0);
// console.log(x0[0][1]='0');
// console.log(x0);


//Qs1.Write a JavaScript program to get the first n elements of an array.[ n can be any positive number].For example:for array[7,9,0,-2] and n=3 Print,[7,9,0]

let arr =[9,8,7,6,-5,4,3,2,1];
let n =6;
arr.length=n; //1 way
let ans = arr.slice(0,n); //2nd way
console.log(arr);
console.log(ans);


//Qs2.Write a JavaScript  program to get the last n elements of an array.[n can be any positive number].For example:for array[7,9,0,-2]and n =3 Print,[9,0,-2]
let a =[6,5,4,3,2,1];
let lastN=3;
let storeAns=a.slice(a.length-lastN); //6-2=4
console.log(storeAns);
console.log(a);

//Q3 Write a js program to check whether a string is empty or not
let str = " ";
// if(str==""){
// console.log("empty string");
// } 
if(str.length==0){
console.log("empty string");
}else{
console.log(" not empty string");
}


// Qs4.Write a JavaScript program to test whether the character at the given(character)index is lowercase
let char = ['A','d','f','F','w','Q','B'];
let indx =0;
let checK = char[indx].toLowerCase()//q
if(char[indx] == checK){ //Q==q
console.log(" is lowercase");

}else{
console.log(" Uppercase");

}

//Qs5. strip leading and trailing spaces from a strin
let st= "   Hello, World!   ";
let trimmedStr = st.trim();
console.log(trimmedStr); // Output: "Hello, World!"

//Qs6. element exist or not
let array=[1,2,3,5,6,4,7,8,9];
element = 10;
exist = array.includes(element);
if(exist==true){
    console.log("exist");
}
else{
    console.log(" not exist");
}
//or
if(arr.indexOf(element) != -1){
    console.log("exist");
}
else{
    console.log(" not exist");
}