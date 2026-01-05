// let btns=document.querySelectorAll("button");
// // console.dir(btn);

// // btn.onclick= function(){
// //     console.log("Button was clicked");
// // }

// function sayHello(){
//     prompt("Say My Name !!");
// }

// function sayName(){
//     alert("You are GodDamm right !!!");
// }

// for(btn of btns){
//     // btn.onclick=sayHello;

//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);

// }


let btn=document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("generated random color");
    let h3=document.querySelector("h3");
    let ran=getRandomColor();
    h3.innerText=ran;

    let div=document.querySelector("div");
    div.style.backgroundColor=ran;
});

function getRandomColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);

    let color= `rgb(${red}, ${green}, ${blue})`;

    return color;
}