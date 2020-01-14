/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

//challenge kalo dapet 6 in a row lost all score and nextPlayer turn

//make initialize function 


let playerScore,activePlayer,currentScore,dice,flag,lastDice;

function init(){
    playerScore =[0,0];
currentScore =0;
activePlayer = 0;
flag = true;
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("name-0").textContent = "player 1"
document.getElementById("name-1").textContent = "player 2"

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

}

init();

function switchPlayer(){
    document.querySelector(".dice").style.display = "none";
    activePlayer= activePlayer===0? activePlayer=1 : activePlayer=0; //ternery to change active player
    currentScore = 0; 
        document.getElementById("current-0").textContent= currentScore;
        document.getElementById("current-1").textContent= currentScore;
        document.querySelector(".player-0-panel ").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
}


// 1 roll dice btn
document.querySelector(".btn-roll").addEventListener("click",function(){

    if(flag){
        dice = Math.floor(Math.random() * 6) + 1;

    //2 display dice
    document.querySelector(".dice").src = "dice-"+dice+".png";
    document.querySelector(".dice").style.display = "block";
    currentScore+= dice ;
    document.getElementById("current-"+activePlayer).textContent = currentScore;
      
    //challenge if dice get 6 in 2 row, lose all scores
    if(dice===6&lastDice===6){
        playerScore[activePlayer]=0;
        document.getElementById("score-"+activePlayer).textContent = "0";
        switchPlayer();
    }


    //if dice got one 
    if (dice===1) {
        switchPlayer();
    }
    };
    
    //challenge
    lastDice = dice;
    
});

//hold button upgrade display //if point reached come winner
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(flag){
playerScore[activePlayer] += currentScore;
document.getElementById("score-"+activePlayer).textContent = playerScore[activePlayer];
// winner point here example 20
if (playerScore[activePlayer]>=50){
    document.getElementById("name-"+activePlayer).textContent="Winner";
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
    flag = false;
}
else {
    switchPlayer();
}
    }
})

//btn new reset game state 
document.querySelector(".btn-new").addEventListener("click",init)
    