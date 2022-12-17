//score card items
const userScoreHtml = document.getElementById('rounds-won')
const computerScoreHtml = document.getElementById('rounds-lost')

//game area display items
const rockButton = document.getElementById('rock-button')
const paperButton = document.getElementById('paper-button')
const scissorsButton = document.getElementById('scissors-button')

//computer's choice display items
const nextRoundButton = document.getElementById('computer-right')
const computerMsg = document.getElementById('msg-center')
const computerChoiceDisplay = document.getElementById('computers-choice-button')

//innerHTML logo for button
const rockLogo = `<i class="fa-solid fa-hand-fist"></i>`
const paperLogo = `<i class="fa-solid fa-hand"></i>`
const scissorsLogo = `<i class="fa-solid fa-hand-scissors"></i>`
const laptopLogo = `<i class="fa-solid fa-laptop"></i>`

function instructionsToggle(num) {
    if (num){
        document.getElementById('first-instructions').style.visibility = 'hidden'
    } else {
        document.getElementById('first-instructions').style.visibility = 'visible'
    }
}

function isRoundActive(){
    if (nextRoundButton.style.visibility != 'visible'){
        return true
    } else {
        return false
    }
}
function runRound(userInput) {
    if(isRoundActive()){
        nextRoundButton.style.visibility = 'visible';
    //returns string of 'rock', 'paper' or 'scissors'
    let computerInput = generateComputerInput()
    //returns string of 'win', 'draw' or 'loose'
    let roundResult = getRoundResult(userInput, computerInput)
    //Choose an appropriate respons-function based on state of isGameOver and roundResult
    if(isGameOver(roundResult)) {
        if (roundResult == 'win'){
            gameOverByWin(userInput, computerInput, roundResult)
        } else {
            gameOverByLoose(userInput, computerInput, roundResult)
        }
    } else {
        if (roundResult == 'win'){
            userWonRound(userInput, computerInput, roundResult)
        } else if (roundResult == 'loose') {
            computerWonRound(userInput, computerInput, roundResult)
        } else (
            roundDraw(userInput, computerInput, roundResult)
        )
    }
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
function gameOverByWin(userInput, computerInput, roundResult){
    colorButton(userInput, roundResult, computerInput)
    userScoreHtml.textContent = Number(userScoreHtml.textContent) + 1

}
function gameOverByLoose(userInput, computerInput, roundResult){
    colorButton(userInput, roundResult, computerInput)
    computerScoreHtml.textContent = Number(computerScoreHtml.textContent) + 1

}
function userWonRound(userInput, computerInput, roundResult){
    colorButton(userInput, roundResult, computerInput)
    userScoreHtml.textContent = Number(userScoreHtml.textContent) + 1
}
function computerWonRound(userInput, computerInput, roundResult){
    colorButton(userInput, roundResult, computerInput)
    computerScoreHtml.textContent = Number(computerScoreHtml.textContent) + 1
}
function roundDraw(userInput, computerInput, roundResult){
    colorButton(userInput, roundResult, computerInput)
}
function startNewGame() {
    userScoreHtml.textContent = 0
    computerScoreHtml.textContent = 0
    nextRound()
}

function colorButton(userInput, roundResult, computerInput){
    let playerButtonClicked
    if (userInput == 'rock'){
        playerButtonClicked = rockButton
    } else if (userInput == 'paper'){
        playerButtonClicked = paperButton
    } else {
        playerButtonClicked = scissorsButton
    }
    if (computerInput == 'rock'){
        computerChoiceDisplay.innerHTML = rockLogo
        console.log(computerInput)
    } else if (computerInput == 'paper'){
        computerChoiceDisplay.innerHTML = paperLogo
        console.log(computerInput)
    } else {
        computerChoiceDisplay.innerHTML = scissorsLogo
        console.log(computerInput)
    }
    if (roundResult == 'win') {
        computerChoiceDisplay.style.backgroundColor = 'red'
        playerButtonClicked.style.backgroundColor = 'green'
    } else if (roundResult == 'loose') {
        computerChoiceDisplay.style.backgroundColor = 'green'
        playerButtonClicked.style.backgroundColor = 'red'
    } else {
        computerChoiceDisplay.style.backgroundColor = 'gold'
        computerChoiceDisplay.style.color = 'black'
        playerButtonClicked.style.backgroundColor = 'gold'
        playerButtonClicked.style.color = 'black'
    }
}
function nextRound() {
    nextRoundButton.style.visibility = 'hidden'
    rockButton.style.backgroundColor = 'salmon'
    rockButton.style.color = 'white'
    paperButton.style.backgroundColor = 'salmon'
    paperButton.style.color = 'white'
    scissorsButton.style.backgroundColor = 'salmon'
    scissorsButton.style.color = 'white'
    computerChoiceDisplay.style.backgroundColor = 'darkcyan'
    computerChoiceDisplay.style.color = 'white'
    computerChoiceDisplay.innerHTML = laptopLogo
}