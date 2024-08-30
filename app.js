
let humanScore = 0;
let computerScore = 0;

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
        return "You lose! " + computerChoice + " beats " + humanChoice + " !";        } else if (humanChoice === "rock" && computerChoice === "scissors") {
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}


playGame();
console.log("Human score: " + humanScore)
console.log("Computer score: " + computerScore) 