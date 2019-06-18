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

btn.forEach(btn=>btn.addEventListener('click',(e)=>{
    playerSelection = e.target.value;
    roundCounter++;
    computerSelection =  computerPlay();
    let check = playRound(playerSelection, computerSelection);
    displayEachRoundResult(check);
}));

let computerPlay = () => {
    let computerChoice = ["rock","paper","scissor"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

let playRound = (playerSelection,computerSelection) => {
    if(playerSelection == computerSelection) 
        return "draw";
    else if(playerSelection == 'rock'){
        return computerSelection == 'paper'? "computerWins" : "playerWins";
    }
    else if(playerSelection == 'paper'){
        return computerSelection == 'scissor'? "computerWins" : "playerWins";
    }
    else {
        return computerSelection == 'rock'? "computerWins" : "playerWins";
    }
}

let displayEachRoundResult = (check) => {
    logMsg.textContent = '';
    roundIteration.innerHTML = `<h1>ROUND ${roundCounter}</h1>`
    if(check === 'draw'){
        logMsg.textContent = "Tie";
    }
    else if(check === 'computerWins'){
        scoreDisplay[1].textContent = ++computerScore;
        logMsg.textContent = "Computer Win"
    } 
    else{
        scoreDisplay[0].textContent = ++playerScore;
        logMsg.textContent = "You Win"
    }  
}

let displayOverallResult = (playerScore,ComputerScore) => {
    if(playerScore === computerScore) alert('Game is drawn.Try again\nPlayer: '+playerScore+'\nComputer: '+computerScore);
    else if(playerScore > computerScore) alert('You win !!Well played\nPlayer: '+playerScore+'\nComputer: '+computerScore);
    else alert('Computer Win.!!Better Luck Next Time\nPlayer: '+playerScore+'\nComputer: '+computerScore);
}

let game = function() {
    let check = playRound(playerSelection, computerSelection);
    displayEachRoundResult(check);
    displayOverallResult(playerScore,computerScore);
}

//    game();