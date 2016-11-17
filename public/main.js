const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const incrementPlayerCount = () => {
  console.log('Player Wins')
  const playerTextScore = $('.scores .player').textContent
  const playerScore = parseInt(playerTextScore) + 1
  $('.scores .player').textContent = playerScore
  if (playerScore === 2) {
    boutOver(true)
  }
}

const incrementComputerCount = () => {
  console.log('Computer Wins')
  const computerTextScore = $('.scores .computer').textContent
  const computerScore = parseInt(computerTextScore) + 1
  $('.scores .computer').textContent = computerScore
  if (computerScore === 2){
    boutOver(false)
  }
}
//button clicking fun
const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`


  if (player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock'){
    incrementPlayerCount()
  }


  // computer win
  if (player === 'scissors' && computer === 'rock' || player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors') {
    incrementComputerCount()
  }
  //draw
  if (player === computer) {
    console.log('Draw')
  }
}
  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const boutOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the bout!'
  } else {
    $('.dialog h3').textContent = 'You lost the bout!'
  }
  $('body').className = 'modal'
}



const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('.scores .player').textContent = 0
  $('.scores .computer').textContent = 0
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}


const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
