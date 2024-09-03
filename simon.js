let userSeq = [];
let gameSeq = [];

let btns = ["red","yellow","green","purple"];

let h2 = document.querySelector('h2');

let level = 0;
let started = false;

document.addEventListener('keypress',function(){
    if(started == false){
        started = true;
        
        levelUp();
    }

});

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function levelUp(){
    
    userSeq = [];
    
    ++level;

    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*3);

    let randomColor = btns[randomIndex];

    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameflash(randomBtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)
;}


function btnPress(){
    let btn = this;
    let btnColor = btn.getAttribute('id');
    userSeq.push(btnColor);
    console.log(userSeq);
    userflash(btn);
    checkAns(userSeq.length-1);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText = `Game Over! Your score is ${level-1}`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },150);
        setTimeout(reset,5000);
    }
}

function reset(){
    h2.innerText = "Press any key to start";
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}



