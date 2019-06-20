// Initial variable requires to begin game
let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0; //track number of times game played

//Selecting DOM elements to update them dynamically
let container = document.querySelector('#container');
let btn = document.querySelectorAll('.btn'); //Create NodeList of player buttons
let scoreDisplay = document.querySelectorAll('.scoreDisplay');
let logMsg = document.querySelector('#logMsg'); //Display the msg at bottom when user click on button
let roundIteration = document.querySelector('#roundIteration');
let itemInsert = document.querySelector('.itemInsert'); //To insert the image on basis on computerSelection

btn.forEach(btn=>btn.addEventListener('click',(e)=>{
    playerSelection = e.target.parentNode.value;
    beginGame();
}));

let computerPlay = () => {
    let computerChoice = ["rock","paper","scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

let playRound = (playerSelection,computerSelection) => {
    roundCounter++;
    if(playerSelection == computerSelection) 
        return "draw";
    else if(playerSelection === 'rock'){
        return computerSelection === 'paper'? "computerWins" : "playerWins"; 
    }
    else if(playerSelection == 'paper'){
        return computerSelection == 'scissors'? "computerWins" : "playerWins";
    }
    else {
        return computerSelection == 'rock'? "computerWins" : "playerWins";
    }
}

let displayEachRoundResult = (check) => {
    logMsg.textContent = '';
    roundIteration.innerHTML = `<h1>Round ${roundCounter}<h1>`;
    itemInsert.innerHTML = `<img src="img/${computerSelection}.svg">`;
    if(check === 'draw'){
        logMsg.textContent = "Oh gosh!! Its tie";
    }
    else if(check === 'computerWins'){
        scoreDisplay[1].textContent = ++computerScore;
        switch(computerSelection){
            case 'rock'     :   logMsg.textContent = "You loose!! Rock beats Scissor"; break;
            case 'paper'    :   logMsg.textContent = "You loose!! Paper beats Rock"; break;
            case 'scissors'  :   logMsg.textContent = "You loose!! Scissor cuts Papper"; break;
        }   
    } 
    else{
        scoreDisplay[0].textContent = ++playerScore;
        switch(playerSelection){
            case 'rock'     :   logMsg.textContent = "You win!! Rock beats Scissor"; break;
            case 'paper'    :   logMsg.textContent = "You win!! Paper beats Rock"; break;
            case 'scissors'  :   logMsg.textContent = "You win!! Scissor cuts Papper"; break;
        }
    }  
}

let gameOver = (playerScore,ComputerScore) => {
    let hakePage = document.getElementById('page-hack');
    hakePage.style.top = "0"; //Allow to display Game Over page.
    let div = document.createElement('div'); 
    let button = document.createElement('button');

    div.setAttribute('id','gameOver')
    div.innerHTML = "<h1>Game Over</h1>";
    if(playerScore > computerScore){
        div.innerHTML += "<p>Well Played!! YOU WIN<p>"
    }else{
        div.innerHTML += "<p>Computer Win!! Better luck next time<p>"
    }
    button.innerText = "Play Again";
    div.append(button);
    hakePage.append(div);
    button.addEventListener('click',gameReset);
}

let gameReset =  () => {
    playerSelection = null;
    computerSelection = null;
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0; //track number of times game played
    let hakePage = document.getElementById('page-hack');
    hakePage.style.top = '-100%';
    hakePage.innerHTML = "";
    
    logMsg.textContent = '';
    roundIteration.innerHTML = `<h1>Round 0<h1>`;
    scoreDisplay.forEach( item=> item.textContent = '0');
}

let beginGame = function() {
    computerSelection =  computerPlay();
    let check = playRound(playerSelection, computerSelection);
    displayEachRoundResult(check);  
    if(playerScore === 5 || computerScore ===5){
      gameOver(playerScore,computerScore);  
    }
}
