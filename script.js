const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

function handleTryClick(event) {
    event.preventDefault() // Não faca o padrao desse evento

    let inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.toggle('hide')
        screen2.classList.toggle('hide')
        document.querySelector('.screen2 h2').innerText = `Parabens você em ${xAttempts}`
    }
    inputNumber.value = ""
    xAttempts++
}

// eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// função callback
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    xAttempts = 1
})