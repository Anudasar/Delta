let gameSeq= [];
let userSeq= [];
let highSc = [];
let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");
let btns = ["yellow","red", "green","purpel"];
//start game
let started =false;
let level = 0;
document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

//flash button

function gameFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelUp(){
    userSeq= [];
    level++;
    h3.innerText = `level ${level}`;

    //random btn choose 
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);
}

function checkAns(idx){
    //console.log("current level", level);
    // let idx = level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game over! Your score was <b>${level}<b/> <Br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    highSc.push(level);
    let max = Math.max(...highSc);
    level = 0;
    h2.innerText =`Highest Score :${max}`;
}