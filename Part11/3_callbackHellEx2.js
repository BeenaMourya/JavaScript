//Callback hell example :-------------------------------



function saveToDaataBase(data,success,failure) {
    let internetSpped =Math.floor(Math.random()*10)+1;
    if (internetSpped > 4) {
        success();
        
    }
else{
    failure();
}
}

saveToDaataBase("Beena Mourya", // callback 1
    ()=>{
    console.log("Succes of 1 : data Saved");

saveToDaataBase("Work Place : Microsoft", // callback 2
    ()=>{
        console.log("Succes of 2 : Microsoft");

        saveToDaataBase("Work Place : Google", // callback 3
 ()=>{
    console.log("Succes of 3 : Google");
 },
 ()=>{
    console.log("failure  3: erocoa ");
 }

        )
    }, 
    ()=>{
        console.log("failure 2: of exo.co LTD");
    }
);


},
()=>{
    console.log(" failure 1 : weak connection ,data Not saved");
}

);

