let playerSelection = null;
let computerSelection = null;
let playerScore = 0;
let computerScore = 0;

let btn = document.querySelectorAll('.btn');
let scoreDisplay = document.querySelectorAll('scoreDisplay');
btn.forEach(btn=>btn.addEventListener('click',(e)=>{
    playerSelection = e.target.value;
    console.log(playerSelection);
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
    if(check === 'draw'){ 
            alert('Draw\n\n'+'Player: '+playerSelection+'  '+'Computer: '+computerSelection); 
    }
    else if(check === 'computerWins'){
        alert('Computer Win\n\n'+'Player: '+playerSelection+'  '+'Computer: '+computerSelection);
        computerScore++;
    } 
    else{
        alert('You Win\n\n'+'Player: '+playerSelection+'  '+'Computer: '+computerSelection);
        playerScore++;
    }  
}

let displayOverallResult = (playerScore,ComputerScore) => {
    if(playerScore === computerScore) alert('Game is drawn.Try again\nPlayer: '+playerScore+'\nComputer: '+computerScore);
    else if(playerScore > computerScore) alert('You win !!Well played\nPlayer: '+playerScore+'\nComputer: '+computerScore);
    else alert('Computer Win.!!Better Luck Next Time\nPlayer: '+playerScore+'\nComputer: '+computerScore);
}

let game = function() {
    
    
    for(let i=0; i<5; i++){
        playerSelection = prompt('ROCK or PAPER or SCISSOR').toLowerCase();
        computerSelection = computerPlay();
        let check = playRound(playerSelection, computerSelection);
        displayEachRoundResult(check);
    }

    displayOverallResult(playerScore,computerScore);
}

//    game();