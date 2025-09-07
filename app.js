let gameSeq=[];
let userSeq=[];
let str=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector('h2');
/*document.addEventListener("keypress",function(){
    
    if(str==false){
        str=true;
        levelUp();
    }
    
});*/
//document.addEventListener("keypress", startGame);
//document.addEventListener("touchstart", startGame);
//document.addEventListener("click", startGame);
let strbtn=document.querySelector('#start');
strbtn.addEventListener("click",startGame);
function startGame() {
    if (str === false) {
        str = true;
        levelUp();
    }
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
   
    
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    let randbtn=document.querySelector(`#${randColor}`);
    
    
    btnflash(randbtn);


}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        
    },250);
    
    

}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
        
    },250);
    
    

}

function check(idx){
    //console.log(level,"curr level")
   
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
            
        }
        
    }else{
        let score=level-1;
        h2.innerHTML=`Game over! your Score was <b> ${score}</b> <br> Press any key to start again`;

        reset();

    }


}

function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    
    userSeq.push(userColor);
    
    check(userSeq.length-1);

}
let allbtn=document.querySelectorAll('.btn');
for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    str=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}