let gameseq = [];
let userseq = [];
let btns = ["yellow", "purple", "green", "red"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(!started){
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 300);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randCol = btns[randIdx];
    gameseq.push(randCol);

    let randBtn = document.querySelector(`.${randCol}`);
    btnFlash(randBtn);
}

function checkAns(){
    let idx = userseq.length - 1;

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        }, 200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userCol = btn.getAttribute("id");
    userseq.push(userCol);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
