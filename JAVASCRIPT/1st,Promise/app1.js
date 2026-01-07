// let todo=[];
// let req=prompt("please enter your request");

// while(true){
//     if(req=="quit"){
//         console.log("Quitting the app");
//         break;
//     }

//     if(req=="list"){
//         console.log("----------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i, todo[i]);
//         }

//         console.log("-----");
//     } else if(req=="add"){
//         let task=prompt("enter the task to be added");
//         todo.push(task);
//         console.log("task added");

//     } else if(req=="delete"){
//         let idx=prompt("Ent the index which you want to delete");
//         todo.splice(idx,1);
//     } else{
//         console.log("wrong request");
//     }

//     req=prompt("please enter your request");

// }


// let form=document.querySelector("form");

// form.addEventListener("submit", function (e) {
    
//     e.preventDefault();

//     let user= document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     alert( `Hi, ${user.value} and your password is set to ${pass.value}`);


// });


function savetoDB(data){
    return new Promise((reslove, reject)=> {
        let internetSp=Math.floor(Math.random()*10) +1;
        if(internetSp > 4){
            resolve("Work Done! ");
        } else{
            reject("Failure!");
        }
    });

    
}

let request=savetoDB("apna college");
request.catch(()=> {
    console.log("PROMISE COMPLETED");
})
.catch(()=>{
    console.log("PRomise failed");
});


