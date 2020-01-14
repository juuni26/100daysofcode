/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

//challenge double the dice
//make initialize function 


let playerScore,activePlayer,currentScore,dice1,dice2,flag;

function init(){
    playerScore =[0,0];
currentScore =0;
activePlayer = 0;
flag = true;
document.getElementById("dice1").style.display="none";
document.getElementById("dice2").style.display="none";
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
    document.getElementById("dice1").style.display="none";
document.getElementById("dice2").style.display="none";
    activePlayer= activePlayer===0? activePlayer=1 : activePlayer=0; //ternery to change active player
    currentScore = 0; 
        document.getElementById("current-0").textContent= currentScore;
        document.getElementById("current-1").textContent= currentScore;
        document.querySelector(".player-0-panel ").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
}


// 1 roll dice button
document.querySelector(".btn-roll").addEventListener("click",function(){

    if(flag){
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

    //2 display dice
    document.getElementById("dice1").src = "dice-"+dice1+".png";
    document.getElementById("dice2").src = "dice-"+dice2+".png";

    document.getElementById("dice1").style.display= "block";
    document.getElementById("dice2").style.display= "block";
    
    currentScore+= dice1+dice2 ;
    document.getElementById("current-"+activePlayer).textContent = currentScore;
      


    //if dice got one 
    if (dice1===1 && dice2===1) {
        switchPlayer();
    }
    };
    

    
});

//hold button upgrade display //if point reached come winner
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(flag){
playerScore[activePlayer] += currentScore;
document.getElementById("score-"+activePlayer).textContent = playerScore[activePlayer];
// winner point here example 20
if (playerScore[activePlayer]>=50){
    document.getElementById("name-"+activePlayer).textContent="Winner";
    document.getElementById("dice1").style.display="none";
document.getElementById("dice2").style.display="none";
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
