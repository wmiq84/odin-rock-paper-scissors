// variables and constants

const gameEndEvent = new Event('gameEnd')

let humanScore = 0;
let computerScore = 0;

// functions 
function getComputerChoice() {
    let rand = 3 * Math.random();
    if (rand >= 2) {
        return "rock";
    }
    else if (rand >= 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("What will you choose?");
    if (choice == "rock") {
        return "rock";
    }
    else if (choice == "paper") {
        return "paper";
    }
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    var win = false;

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + " !";        
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice + " !";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice + " !";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + " !";    
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + " !";    
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice + " !";
    } else if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
}

function playGame(humanSelection) {
    // for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    displayRound(humanSelection, computerSelection);
    displayScores();
    checkScores();

    // }
}   

// a round of rps for each button click
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let humanSelection = event.target.id;
        playGame(humanSelection);
    });
});

function displayRound(humanSelection, computerSelection) {
    const results = document.querySelector("div");
    const round = document.createElement("p");
    round.textContent = playRound(humanSelection, computerSelection);
    results.appendChild(round);
}

function displayScores() {
    const results = document.querySelector("div");
    const scores = document.createElement("p");
    scores.textContent = "Human score: " + humanScore + ", Computer score: " + computerScore;
    results.appendChild(scores);
}

document.addEventListener('gameEnd', (over) => {
    const gameOver = document.createElement("p");
    const results = document.querySelector("div");
    gameOver.textContent = "Game Over!"

    results.appendChild(gameOver);
    document.removeEventListener('GameEnd', over);
});

function checkScores() {
    if (humanScore == 5 || computerScore == 5) {
        document.dispatchEvent(gameEndEvent);
    }
}
