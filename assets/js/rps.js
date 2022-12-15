const userScoreHtml = document.getElementById('rounds-won')
const computerScoreHtml = document.getElementById('rounds-lost')
const rockButton = document.getElementById('rock-button')
const paperButton = document.getElementById('paper-button')
const scissorsButton = document.getElementById('scissors-button')
const nextRoundButton = document.getElementById('computer-right')

function runRound(userInput) {
    nextRoundButton.style.visibility = 'visible';
    //returns string of 'rock', 'paper' or 'scissors'
    let computerInput = generateComputerInput()
    //returns string of 'win', 'draw' or 'loose'
    let roundResult = getRoundResult(userInput, computerInput)
    //Choose an appropriate respons-function based on state of isGameOver and roundResult
    if(isGameOver(roundResult)) {
        if (roundResult == 'win'){
            gameOverByWin(userInput, computerInput)
        } else {
            gameOverByLoose(userInput, computerInput)
        }
    } else {
        if (roundResult == 'win'){
            userWonRound(userInput, computerInput)
        } else if (roundResult == 'loose') {
            computerWonRound(userInput, computerInput)
        } else (
            roundDraw(userInput, computerInput)
        )
    }
}

function generateComputerInput() {
    let calc = Math.floor(Math.random() * (3));
    if (calc == 0){
        return 'rock'
    } else if(calc == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getRoundResult(user, computer){
    if (user == 'rock'){
        if (computer == 'rock'){
            return 'draw'
        } else if (computer == 'paper'){
            return 'loose'
        } else {
            return 'win'
        }
    } else if (user == 'paper'){
        if (computer == 'rock'){
            return 'win'
        } else if (computer == 'paper'){
            return 'draw'
        } else {
            return 'loose'
        }
    } else {
        if (computer == 'rock'){
            return 'loose'
        } else if (computer == 'paper'){
            return 'win'
        } else {
            return 'draw'
        }
    }
}

function isGameOver(roundResult) {
    let userScore = userScoreHtml.textContent
    let computerScore = computerScoreHtml.textContent
    if ((roundResult == 'win' && userScore == 2) || (roundResult == 'loose' && computerScore == 2)) {
        return true
    } else {
        return false
    }
}

//Respons functions to update html
function gameOverByWin(userInput, computerInput){
    colorButton(userInput)
    userScoreHtml.textContent = Number(userScoreHtml.textContent) + 1

}
function gameOverByLoose(userInput, computerInput){
    colorButton(userInput)
    computerScoreHtml.textContent = Number(computerScoreHtml.textContent) + 1

}
function userWonRound(userInput, computerInput){
    colorButton(userInput)
    userScoreHtml.textContent = Number(userScoreHtml.textContent) + 1
}
function computerWonRound(userInput, computerInput){
    colorButton(userInput)
    computerScoreHtml.textContent = Number(computerScoreHtml.textContent) + 1
}
function roundDraw(userInput, computerInput){
    colorButton(userInput)
}
function startNewGame() {
    userScoreHtml.textContent = 0
    computerScoreHtml.textContent = 0

    //let container = document.getElementById('hej')
    //container.innerHTML = `<i class="fa-solid fa-hand-fist"></i>`

}
function colorButton(userInput){
    if (userInput == 'rock'){
        rockButton.style.backgroundColor = "darkslategray"
    } else if (userInput == 'paper'){
        paperButton.style.backgroundColor = "darkslategray"
    } else {
        scissorsButton.style.backgroundColor = "darkslategray"
    }
}