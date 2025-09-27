//Todo App

//list - to show all todo
//add - to add a todo
//delete - to delete a todo
//quit - to exit the todo
// -----------------------------------------------

let todo =[];
let req = prompt("please enter your requests to [add ,delete ,list ,quit");
while (true) {
    if (req=='quit') {
        console.log("quitting the app");
        break;

    }
    if (req=='list'){
        if (todo==0) {
            console.log("empty list");
        //   break;  
        req = prompt("please enter your requests to [add ,delete ,list ,quit");
        }
        console.log("-----------------------");   
        for (let i = 0; i < todo.length; i++) {
           console.log(todo[i]);       }
        console.log("-----------------------");
        
    }
else if(req=='add'){

while (req!='quit') {
    let addTask = prompt("please enter your task to add & enter quit to stop adding");
    if(addTask=='quit'){
        console.log("quitting to add");
    break;
    }
  
todo.push(addTask);
console.log("task added");

}

}
else if(req=='delete'){

deleteTask = prompt("please enter your task to be deleted");

let tastExist = todo.includes(deleteTask);
if (tastExist==true) {
console.log("task element tobe deleted exist " , deleteTask);

let deleteStore =todo.indexOf(deleteTask);
todo.splice(deleteStore,1);
console.log("task deleted at index",deleteStore);

}
else{
    console.log("doesnt exist");
}



}

else{
   alert(" error in Task selection  ");
    
}
 req = prompt("please enter your request");

}





