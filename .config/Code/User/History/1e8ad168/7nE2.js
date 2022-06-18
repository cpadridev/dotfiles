
// ********** Script para el reproductor del video **********

const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("play").addEventListener('click',handlePlay);
    document.getElementById("pause").addEventListener('click',handlePause);
    document.querySelector('#backward').addEventListener('click',handleBackward)
    document.querySelector('#forward').addEventListener('click',handleForward)
    document.querySelector('#video').addEventListener('loadedmetadata',handleLoaded)
    document.querySelector('#video').addEventListener('timeupdate',handleTimeUpdate)
    document.querySelector('#progress').addEventListener('input',handleInput)
    
}


function handlePlay(){
    document.querySelector('#video').play()
    document.getElementById("play").hidden = true
    document.getElementById("pause").hidden = false
}

function handlePause(){
    document.querySelector('#video').pause()
    document.getElementById("play").hidden = false
    document.getElementById("pause").hidden = true
}

function handleBackward(){
    document.querySelector('#video').currentTime -= 10
}

function handleForward(){
    document.querySelector('#video').currentTime += 10
}

function handleLoaded(){
    document.querySelector('#progress').max = document.querySelector('#video').duration
}

function handleTimeUpdate(){
    document.querySelector('#progress').value=document.querySelector('#video').currentTime
}

function handleInput(){
    document.querySelector('#video').currentTime = document.querySelector('#progress').value
}


// ********** Script para el reproductor del video **********
