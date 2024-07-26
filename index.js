function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        alert("Draw!");
        return;
    }
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            alert("You Won!");
        } else {
            alert("You Lost!");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            alert("You Won!");
        } else {
            alert("You Lost!");
        }
    } else {
        if (computerChoice == "paper") {
            alert("You Won!");
        } else {
            alert("You Lost!");
        }
    }
}

function getHumanChoice() {
    let isOk = false;
    let choice = null;
    while (!isOk) {
        choice = prompt("Rock, Paper or Scissors?: ");
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors")
            isOk = true;
        else
            alert("Invalid Choice!");
    }
    
    return choice;
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    alert(`The Computer Chose ${choice}!`);
    return choice;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
