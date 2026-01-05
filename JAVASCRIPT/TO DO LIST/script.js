let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");


btn.addEventListener("click" , function(){

    let item=document.createElement("li");
    item.innerText=inp.value;

    let btnel=document.createElement("button");
    btnel.innerText="press if done";
    btnel.classList.add("delete");
    item.appendChild(btnel);

    ul.appendChild(item);
    
    console.log(inp.value);
    inp.value="";
});


// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click" , function(){
//         let par= this.parentElement;
//         par.remove();
//     });
// } it doesnt work due to event delegation

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listi= event.target.parentElement;
        listi.remove();
        
    }
});
