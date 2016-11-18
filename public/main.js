const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const memory = { lastMove: '', lastWin: false }

const incrementPlayerCount = () => {
  console.log('Player Wins')
  const playerTextScore = $('.engage .player').textContent
  const playerScore = parseInt(playerTextScore) + 1
  $('.engage .player').textContent = playerScore
  memory.lastWin = true
  console.log(memory)
  if (playerScore === 2) {
      gameOver(true)
    }
}

const incrementComputerCount = () => {
  console.log('Computer Wins')
  const computerTextScore = $('.scores .computer').textContent
  const computerScore = parseInt(computerTextScore) + 1
  $('.scores .computer').textContent = computerScore
  memory.lastWin = false
  console.log(memory)
  if (computerScore === 2) {
    gameOver(false)
  }
}

//bout scores
const incrementPlayerBout = () => {
  console.log('Player Wins Bout')
  const playerTextBout = $('.bout .player').textContent
  const playerBout = parseInt(playerTextBout) + 1
  $('.bout .player').textContent = playerBout
  if (playerBout === 2) {
    matchOver(true)
  }
}

  const incrementCompBout = () => {
    console.log('Computer Wins Bout')
    const compTextBout = $('.bout .computer').textContent
    const compBout = parseInt(compTextBout) + 1
    $('.bout .computer').textContent = compBout
    if (compBout === 2){
      matchOver(false)
    }
}


//button clicking fun
const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`

  memory.lastMove = player
  if (player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock'){
      $('figure.player').className = 'player win'
      $('figure.computer').className = 'computer lose'
      incrementPlayerCount()
    }

    if (player === 'scissors' && computer === 'rock' || player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors') {
        $('figure.player').className = 'player lose'
        $('figure.computer').className = 'computer win'
        incrementComputerCount()
      }
  //draw
  if (player === computer) {
    $('figure.player').className = 'player draw'
    $('figure.computer').className = 'computer draw'
    console.log('Draw')
  }
}
  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.

const getComputerMove = () => {
  // const moves = ['rock', 'paper', 'scissors']
  // return moves[Math.floor(Math.random() * moves.length)]

  // if the player played scissors last time and won, then I throw rock
  if (memory.lastMove === 'scissors' && memory.lastWin === true) {
    return 'rock'
  }
  // if the player played paper last time and won then I throw scissors
  if (memory.lastMove === 'paper' && memory.lastWin === true) {
    return 'scissors'
  }
  // if the player played rock and won then I throw paper
  if (memory.lastMove === 'rock' && memory.lastWin === true) {
    return 'paper'
  }
  // if the player played rock and lost then i throw rock
  if (memory.lastMove === 'rock' && memory.lastWin === false) {
    return 'rock'
  }
  //if the player played paper and lost then I throw paper
  if (memory.lastMove === 'paper' && memory.lastWin === false) {
    return 'paper'
  }
  //if the player played scissors and lost then i throw scissors
  if (memory.lastMove === 'scissors' && memory.lastWin === false) {
    return 'scissors'
  }
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}


// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the bout!'
      console.log('Player won 2 out of 3')
      console.log(memory)
    incrementPlayerBout()

  } else {
    $('.dialog h3').textContent = 'You lost the bout!'
    console.log('Computer won 2 out of 3')
    console.log(memory)
    incrementCompBout()
  }
  $('body').className = 'modal'
}

const matchOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the match!'
      console.log('Player won the Match!')
      console.log(memory)

  } else {
    $('.dialog h3').textContent = 'You lost the match!'
    console.log('Computer won the Match!')
    console.log(memory)
  }
  $('body').className = 'modal'
  resetMatch()
}


const resetGame = () => {

  console.log(memory)
  $('.engage .player').textContent = 0
  $('.engage .computer').textContent = 0
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}
const resetMatch = () => {

  console.log(memory)
  $('.bout .player').textContent = 0
  $('.bout .computer').textContent = 0
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
