const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
        
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Le diste click al botón de play')
}

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Le diste click al botón de pause')
}
    
function handleBackward(){
    $video.currentTime -=10 
    console.log('Para atrás 10 segundos', $video.currentTime)
}

function handleForward(){
    $video.currentTime += 10
    console.log('Para adelante 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', hendleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate )

function hendleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    //console.log('Tiempo Actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    //console.log($progress.value)
}