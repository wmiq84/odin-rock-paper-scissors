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

console.log(getComputerChoice());