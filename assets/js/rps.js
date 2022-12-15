const userScoreHtml = document.getElementById('rounds-won')
const computerScoreHtml = document.getElementById('rounds-lost')

function runRound(userInput) {
    //returns string of 'rock', 'paper' or 'scissors'
    let computerInput = generateComputerInput()
    //returns string of 'win', 'draw' or 'loose'
    let roundResult = getRoundResult(userInput, computerInput)
    //returns true if point awarded for the round gives player or computer three point and win the game
    console.log(isGameOver(roundResult))
    //Choose an appropriate respons-function based on state
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
    userScoreHtml.textContent = Number(userScoreHtml.textContent) + 1

}
function gameOverByLoose(userInput, computerInput){
    computerScoreHtml.textContent = Number(computerScoreHtml.textContent) + 1

}
function userWonRound(userInput, computerInput){
    userScoreHtml.textContent = Number(userScoreHtml.textContent) + 1
}
function computerWonRound(userInput, computerInput){
    computerScoreHtml.textContent = Number(computerScoreHtml.textContent) + 1
}
function roundDraw(userInput, computerInput){

}