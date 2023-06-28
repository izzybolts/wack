const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')
const btn = document.getElementById('reset')
const gameOver = document.getElementById('gameOver')

let result = 0
let hitPosition
let currentTime = 10

//Testing Function

let timerId = null


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}


// ADDING EVENT LISTENER
squares.forEach(square => {

    square.addEventListener('click',() => {

        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
        
    })
})

//ADDING EVENT LSITENER TO BUTTON

btn.addEventListener('click', () => {
    window.location.reload()
})

function moveMole() {
    // let timerId = null
    timerId = setInterval(randomSquare, 1000)
    


}

function countDown () {

    currentTime-- 
    timeLeft.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(counterDownTimerId)
        clearInterval(timerId)
        // GAME OVER FLASH
        gameOver.style.color = 'red'
    }
}

window.onload = () => {


    // let counterDownTimerId = setInterval(countDown, 1000)
    // moveMole()
}

function startGame() {
    console.log('working...')
}

