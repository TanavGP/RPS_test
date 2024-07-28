const resultDisplay = document.querySelector('#result-display');
const buttons = document.querySelectorAll('.btn');

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        displayResult("draw", computerChoice);
        return;
    }

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            displayResult("won", computerChoice);
        } else {
            displayResult("lost", computerChoice);
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            displayResult("won", computerChoice);
        } else {
            displayResult("lost", computerChoice);
        }
    } else {
        if (computerChoice == "paper") {
            displayResult("won", computerChoice);
        } else {
            displayResult("lost", computerChoice);
        }
    }
}

function displayResult(result, computerChoice) {
    let displayMessage = null;
    switch (result) {
        case "draw": displayMessage = `You Drew! The Computer chose ${computerChoice}`; break;
        case "won": displayMessage = `You Won! The Computer chose ${computerChoice}`; break;
        case "lost": displayMessage = `You Lost :( The Computer chose ${computerChoice}`; break;
    }

    resultDisplay.textContent = displayMessage;
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    return choice;
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const humanChoice = e.target.classList[1];
        playRound(humanChoice, getComputerChoice());
    })
}); 
