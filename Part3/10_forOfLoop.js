let fruits = [ 'mango','apple','banana','litchi','orange','guava']
for (Fr of fruits) {
    console.log(Fr);//mango   apple   banana   litchi   orange  guava
}
for (Fr of fruits) {
    console.log(fruits);//[mango   apple   banana   litchi   orange  guava ]X 6 times
}
for (Name of 'Beena Mourya') {
    console.log(Name);}


    // Nested for of loop ---------------------
    let heroes =[['ironman','spiderman','thor'],['superman','wonder women','flash']];
for (list of heroes) {
    for (list2 of list) {
        console.log(list2);
    }
}