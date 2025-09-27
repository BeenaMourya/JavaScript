// promises are rejected and resolve with some data(valid result or errors)




function saveToDataBase(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("success : data was saved");
        }
        else {
            reject("Failure : weak connection-----------"); //error
        }
    }
    );
}

saveToDataBase('we love  Demon slayer').then(
    (result) => {
        console.log("data 1 saved : promise resolved",result); //result will print the return value of promise object
        return saveToDataBase("helloworld");
    })
.then((res2)=>{
    console.log('data 2 saved',res2);
    return saveToDataBase("bina");
})
.then((res3)=>{
    console.log('data 3 saved',res3);
})

    .catch((err) => {
        console.log("promise rejected",err);
    });




