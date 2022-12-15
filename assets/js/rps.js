function runRound(userInput) {
    console.log(userInput)
    let computer = generateComputerinput()
    console.log(computer)
    let roundResult = getResult(userInput, computer)
    console.log(isGameOver(roundResult))
}

function generateComputerinput() {
    let calc = Math.floor(Math.random() * (3) );
    if (calc == 0){
        return 'rock'
    } else if(calc == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }

}

function getResult(user, computer){
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
    let userScore = document.getElementById('rounds-won').textContent
    let computerScore = document.getElementById('rounds-lost').textContent
    if ((roundResult == 'win' && userScore == 2) || (roundResult == 'loose' && computerScore == 2)) {
        return true
    } else {
        return false
    }
    return userScore
}