const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')
const soundOff = document.querySelector('.sound-off')
const soundOn = document.querySelector('.sound-on')

const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let timerTimeOut

function countdown(){

    timerTimeOut = setTimeout(() => {

        minutes = minutesDisplay.textContent
        seconds = secondsDisplay.textContent
        
        if(minutes <= 0 && seconds <= 0){

            resetControl()
            resetTimer()
            timerEnd()
            return
        }

        if(seconds <= 0){
            seconds = 60
            minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds -1).padStart(2, "0")

        countdown()
    }, 1000);
}

function timerEnd(){
    kitchenTimer.play()
}

function musicOff(){
    bgAudio.pause()
}

function musicOn(){
    bgAudio.play()
}

function resetTimer(){
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"

    clearTimeout(timerTimeOut)
}

function resetControl(){
    btnStop.classList.add('hide')
    btnSet.classList.remove('hide')
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    
    resetTimer()
}

btnPlay.addEventListener('click', function(){
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnStop.classList.remove('hide')
    btnSet.classList.add('hide')

    countdown()
})

btnPause.addEventListener('click', function(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')

    clearTimeout(timerTimeOut)
})

btnStop.addEventListener('click', function(){
    resetControl()
})

soundOff.addEventListener('click', function(){
    soundOff.classList.add('hide')
    soundOn.classList.remove('hide')
    musicOn()
})

soundOn.addEventListener('click', function(){
    soundOn.classList.add('hide')
    soundOff.classList.remove('hide')
    musicOff()
})

btnSet.addEventListener('click', function(){
    minutes = prompt('Quantos minutos?') 

    if (minutes <= 1) {
        alert('teste')
        return
    }

    if(isNaN(minutes)){
        alert('Por favor, insira apenas números.')
        return
    }
   
    if(minutes >= 100){
        alert('Um número entre 0 e 100')
        return
    }
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
})







