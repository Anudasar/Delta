let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(() => {
        btn.classList.remove("userFlash")
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;
    let randomIndex = Math.floor(Math.random() * 3) + 1;
    let randomColor = btns[randomIndex];
    let randBtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1500);
        }
    } else {
        h2.innerHTML = `Game Over !, <b>Your Score was ${level}</b> <br> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);

        highScore();
        reset();
    }
}


function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (allbtns of allBtns) {
    allbtns.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let HighScore = true;
let highScoreValue = 0;


function highScore() {
    if(HighScore == true){
     let h3 =  document.querySelector("h3");
     h3.innerText = `Your HighScore = ${highScoreValue}`;
    }
    if (level > highScoreValue) {
      HighScore = true;
      highScoreValue = level;
      let h3 = document.querySelector("h3");
      h3.innerText = `New High Score = ${highScoreValue}`;
    } else {
      HighScore = false;
     }
};

