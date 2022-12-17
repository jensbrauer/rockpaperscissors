//score card items
const userScoreHtml = document.getElementById('rounds-won')
const computerScoreHtml = document.getElementById('rounds-lost')

//game area display items
const rockButton = document.getElementById('rock-button')
const paperButton = document.getElementById('paper-button')
const scissorsButton = document.getElementById('scissors-button')
const whoWins = document.getElementById('win-loose-msg')

//computer's choice display items
const nextRoundButton = document.getElementById('computer-right')
const computerMsg = document.getElementById('computer-msg-center')
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
    //returns string of 'rock', 'paper' or 'scissors'
    let computerInput = generateComputerInput()
    //returns string of 'win', 'draw' or 'loose'
    let roundResult = getRoundResult(userInput, computerInput)
    //Choose an appropriate respons-function based on state of isGameOver and roundResult
    if (isGameOver(roundResult)) {
        updateGameArea(userInput, roundResult, computerInput)
        gameIsOver(roundResult)
    } else {
        nextRoundButton.style.visibility = 'visible';
        updateGameArea(userInput, roundResult, computerInput)
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

function startNewGame() {
    
    document.getElementById('score-table').style.backgroundColor = '#333333'
    userScoreHtml.textContent = 0
    computerScoreHtml.textContent = 0
    nextRound()
    document.getElementById('game-area').style.filter = "grayscale(0%)";
}

function updateGameArea(userInput, roundResult, computerInput){
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
        computerMsg.textContent = "ROCK"
        console.log(computerInput)
    } else if (computerInput == 'paper'){
        computerChoiceDisplay.innerHTML = paperLogo
        computerMsg.textContent = "PAPER"
        console.log(computerInput)
    } else {
        computerChoiceDisplay.innerHTML = scissorsLogo
        computerMsg.textContent = "SCISSORS"
        console.log(computerInput)
    }
    if (roundResult == 'win') {
        computerChoiceDisplay.style.backgroundColor = 'red'
        playerButtonClicked.style.backgroundColor = 'green'
        whoWins.textContent = "You win the round!"
        userScoreHtml.textContent = Number(userScoreHtml.textContent) + 1
    } else if (roundResult == 'loose') {
        computerChoiceDisplay.style.backgroundColor = 'green'
        playerButtonClicked.style.backgroundColor = 'red'
        whoWins.textContent = "Computer wins the round!"
        computerScoreHtml.textContent = Number(computerScoreHtml.textContent) + 1
    } else {
        computerChoiceDisplay.style.backgroundColor = 'gold'
        computerChoiceDisplay.style.color = 'black'
        playerButtonClicked.style.backgroundColor = 'gold'
        playerButtonClicked.style.color = 'black'
        whoWins.textContent = "Its a draw!"
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
    whoWins.textContent = "Pick your weapon to battle!"
    computerMsg.textContent = "TBA"
}

function gameIsOver(roundResult) {
    if (roundResult == 'win'){
        document.getElementById('game-area').style.filter = "grayscale(60%)";
        document.getElementById('score-table').style.backgroundColor = 'green'
    }
    else {
        document.getElementById('game-area').style.filter = "grayscale(60%)";
        document.getElementById('score-table').style.backgroundColor = 'red'
    }
}