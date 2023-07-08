let sound =document.querySelector("#sound")

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    // let audio = new Audio("car_horn.wav")
    console.log("button clicked")
    return audio.play();
}
sound.addEventListener("click", ()=>{
    play()
})