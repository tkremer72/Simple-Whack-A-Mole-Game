const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent


function randomSquare() {
     square.forEach(className => {
          className.classList.remove('mole')
     })
     let randomPosition = square[Math.floor(Math.random() * 9)]
     randomPosition.classList.add('mole')

     //Assign the id of the randomPosition to hitPosition to use later
     hitPosition = randomPosition.id
}

//Listen for mouse up events
square.forEach(id => {
     id.addEventListener('mouseup', () => {
          if(id.id === hitPosition) {
               result = result + 1;
               score.textContent = result
          }
     })
})

//Move the mole 
function moveMole() {
     let timerId = null
     timerId = setInterval(randomSquare, 1000)
}
moveMole()
//Create a function for the countdown timer

function countDown() {
     currentTime--
     timeLeft.textContent = currentTime

     if(currentTime === 0) {
          clearInterval(timerId)
          alert('GAME OVER!  Your Final Score Is: ' + result)
          resetGame(2500)
     }
}
 function resetGame(t) {
      setTimeout("location.reload();", t)
 }
let timerId = setInterval(countDown, 1000)
