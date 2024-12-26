// trim it & convert it to uppercase
let msg ="help!";
console.log(msg.trim().toUpperCase());

// for the string-> let name = ApnaCollege",predict the outcome for the following:
// name.slice(4,9);name.indexOf("na"); name.replace("Apna","Our");
let name = "ApnaCollege";
console.log(name.slice(4,9)); //Colle
console.log(name.indexOf("na"));//2
console.log(name.replace("Apna","Our"));//OurCollege

// Separate the "College" part in above string 'l' with 't' in it------

// console.log(name.slice(4).replace('l','t'));//Cotlege

let newname = name.slice(4).replace('l','t');//Cotlege
console.log(newname.replace('l','t'));//Cottege