// Qs1.Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].

let diceRoll =Math.floor(Math.random()*6)+1;
console.log(diceRoll);

//Qs2.Create an object representing a car that stores the following properties for the car:name,model,color.Print the car’s name.

let Car= {
name : "BMW",
model :"Premium",
color :"Silver"
};
console.log(Car.name);
console.log(Car["name"]);


//Qs3.Create an object Person with their name,age and city.Edit their city’s original value to change it to“NewYork”.Add a new property country and set it to the UnitedStates
const person = {
    name:"Beena",
    age :19,
    city:"Tokiyo"
}
person.city="New York";
person.country= "United States";
console.log(person);