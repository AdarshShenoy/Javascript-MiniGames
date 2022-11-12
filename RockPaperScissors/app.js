const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoiceList =['rock', 'paper', 'scissors']
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()* possibleChoices.length)
    computerChoice = computerChoiceList[randomNumber]
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    
    if(computerChoice === userChoice){
        result ="It's a Draw!"
    }
    if(computerChoice === "rock" && userChoice === "paper"){
        result = 'You Win!'
    }
    if(computerChoice === "paper" && userChoice === "scissors"){
        result = 'You Win!'
    }
    if(computerChoice === "scissors" && userChoice === "rock"){
        result = 'You Win!'
    }
    if(computerChoice === 'rock' && userChoice === "scissors"){
        result = 'You Loose!'
    }
    if(computerChoice === 'paper' && userChoice === "rock"){
        result = 'You Loose!'
    }
    if(computerChoice === 'scissors' && userChoice === "paper"){
        result = 'You Loose!'
    }
    resultDisplay.innerHTML = result
}