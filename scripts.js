let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botaoInfo = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

console.log(botaoSom)

botaoSom.addEventListener("click", ligarSom)
botaoInfo.addEventListener("click", mostrarModal)
modal.addEventListener("click",esconderModal)


function ligarSom(){
    video.muted = !video.muted
}

function mostrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}

function tocarAudio(){
    audio.play()
}

window.addEventListener("load", tocarAudio) 