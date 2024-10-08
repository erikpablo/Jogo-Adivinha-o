// variaveis 
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const span = document.querySelector('span')
let randomNumber = Math.round(Math.random() * 10)   
let dunbAudio = document.querySelector("#myAudio"); 
let winnerAudio = document.querySelector("#myAudio2"); 


let xAttempts = 1;
let totalAttempts = 2;

// função callback
function handleTryClick(event) {
    event.preventDefault() // Não faca o padrao desse evento

    let inputNumber = document.querySelector('#inputNumber')
    
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        document.querySelector('.screen2 h2').innerText = `Parabéns você acertou em ${xAttempts} tentativas`
        winnerAudio.play()
    }
    numberOfAttempts()
    
    inputNumber.value = ""
    
}

function numberOfAttempts() {
    if(isNaN(inputNumber.value) || inputNumber.value === '' || inputNumber.value < 0 || inputNumber.value > 10) {
        alert("Por favor, insira um número válido.")
    }
    else{
        if(totalAttempts == 2) {
            span.innerText = `Nao desista, você possui ${totalAttempts} tentativas, let's GO`
            span.style.color = 'orange'
        } 
        if(totalAttempts == 1) {
            span.innerText = `Poxa, você possui ${totalAttempts} tentativa (⊙＿⊙)`
            span.style.color = 'red'
        } 
        else if(totalAttempts == 0) {
            screen1.classList.add('hide')
            screen2.classList.remove('hide')
            document.querySelector('h2').innerText = `Ruim, sua tentativas acabaram`
            dunbAudio.play()
        }
        xAttempts++
        totalAttempts--
    }

}

function handleResetClick() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')

    xAttempts = 1
    totalAttempts = 2;

    span.innerText = `Você possui ${totalAttempts + 1} tentativas, let's GO`
    span.style.color = '#027202'

    randomNumber = Math.round(Math.random() * 10)
    dunbAudio.pause()
    winnerAudio.pause()
}

// eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

