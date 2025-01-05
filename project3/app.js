let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
let allbtns=document.querySelectorAll(".btn");
document.addEventListener("keydown",function(){
    if(start==false){
        console.log("started");
        start=true;
    }
    levelup();
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //choose random button
    let randomcolor=btns[Math.floor(Math.random()*3)];
    let btn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnflash(btn);
}
function checkans(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        
    }else{
        h2.innerHTML=`game over your score was<b>${level}</b><br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }
}
function btnpress(){
   let btn=this;
   userflash(btn);
   let usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   checkans(userseq.length-1);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
