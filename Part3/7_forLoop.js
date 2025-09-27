//Q1.     odd-------------------------------

// 1st way..............................
// for (let i = 1; i <=15; i++) {
//     if( (i%2!=0)) {
//   console.log(i);       
//     } 
// }
// 2nd way..........................
// for (let j = 1; j <=15; j+=2) {
//   console.log(j);       
// }
 //Q2. backward odd loop-----------------------------

//  for (let i = 15; i >=1; i-=2){ 
//     console.log(i);       
//  }

// Q3. ----Even ------------------------------------

// for (let i = 2; i <= 10; i+=2) {
//    console.log(i);   
// }
// for (let i = 20; i >= 2; i-=2) {
//    console.log(i);   
// }

// Q4. Multiplication----------------------------
// 1st way-----------
// for (let i = 5 ; i <=50; i+=5) {
//     console.log(i);   
//  }
 //2nd way----------------------
// for(let i=1;i<10;i++){
// console.log(i*5);
// }
//take input from user----------------
// let input = prompt("write your number");
// for (let i = 1; i < 10; i++) {
//   console.log(input*i);
    
// }

// -----------nested loop-----------------------------------------------------Nested for Loop-------------------------
for (let i = 1; i <=3; i++) {
  console.log(`outer loop for i = ${i}`);

  for (let j = 1; j <=3; j++) {
  console.log(j);
  
  }
  
}

// Nested loops with nested arrays

let heroes =[['ironman','spiderman','thor'],['superman','wonder women','flash']];

for (let i = 0; i < heroes.length; i++) {
  console.log(`list ${i}`);
  for (let j = 0; j < heroes[i].length; j++) {
   console.log(heroes[i][j]);
  }
}




