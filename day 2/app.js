/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let playerScore,activePlayer,currentScore,dice;

playerScore =[0,0];
currentScore =0;
activePlayer = 0;



document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

// 1 roll dice 
document.querySelector(".btn-roll").addEventListener("click",function(){
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").src = "dice-"+dice+".png";
    document.querySelector(".dice").style.display = "block";

});

//2 display dice
//3 switch if 1