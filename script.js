"use strict";

const checkBtn = document.querySelector(".check")
const guessMessage = document.querySelector('.guess-message')
const body = document.querySelector('body')
let secretNumber = Math.trunc(Math.random() * 20) + 1
const numberInput = document.querySelector('.number-input')
const labelScore = document.querySelector(".label-score span")
const again = document.querySelector('.again')
const question = document.querySelector('.question')
let high = document.querySelector('.highscore')

let attempts = 20
let highscore = 0

again.addEventListener("click", newGame)
checkBtn.addEventListener("click", guessNumber)
numberInput.addEventListener("input", enteringNumber)

function guessNumber() {
   const guessNumber = Number(document.querySelector('.number-input').value)
   
  if (!guessNumber) {
      guessMessage.style.cssText = 'color: red; font-size: 20px;'
      getAnAnswer('Введите число!')
      numberInput.value = ''
      if (attempts > 1) {
         attempts--
         labelScore.textContent = attempts
      }
      else
      {
         guessMessage.style.cssText = 'color: red; font-size: 20px;'
         getAnAnswer('Игра окончена!')
         labelScore.textContent = 0
         question.textContent = secretNumber
      }
  }
  else if(secretNumber !== guessNumber)
  {
      guessMessage.style.cssText = 'color: red; font-size: 20px;'
      getAnAnswer('Не верно!')
      numberInput.value = ''
      attempts--
      labelScore.textContent = attempts
  }
  else if(secretNumber === guessNumber)
      {
      question.style.cssText = 'width: 28rem; height: 28rem; font-size: 6rem; display: flex; align-items: center; justify-content: center;'
      question.textContent = secretNumber
      body.style.backgroundColor = 'rgb(9, 250, 21)';
      guessMessage.style.cssText = 'color: #fff; font-size: 20px;'
      getAnAnswer('Вы угадали!')
      console.log(attempts, highscore);
      if (attempts > highscore) {
         highscore = attempts
         high.textContent = highscore
      }
  }
}

function enteringNumber() {
   getAnAnswer('Начни угадывать!')
   guessMessage.style.cssText = 'color: #fff;'
}

function newGame() {
   attempts = 20
   labelScore.textContent = attempts
   getAnAnswer('Начни угадывать!')
   body.style.backgroundColor = 'rgb(0, 0, 0)';
   question.textContent = '???'
   guessMessage.style.cssText = 'color: #fff;'
   question.style.cssText = ''
   numberInput.value = ''
   secretNumber = Math.trunc(Math.random() * 20) + 1
}

function getAnAnswer(message) {
   guessMessage.textContent = message
}