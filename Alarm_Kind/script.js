
let nowTime = document.querySelector(".nowtime")
let countDown = document.querySelector(".countdown")
let endTime = document.querySelector(".endTime")
let setTime = document.querySelector("#setTime")
let missed = document.querySelector(".missed")
let alrm = document.querySelector(".alrm")
let setAlarm = document.querySelector(".setAlarm")
let setValue = document.querySelector("#setVlaue")
let okay = document.querySelector("#okay")
let cancelBtn = document.querySelector("#cancel")
//for global time
function timeN(){
    let disp = new Date()
    nowTime.textContent = disp
 }
 setInterval(()=> timeN())


 //sound function
function play(){
    let sound = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3")
    sound.play()
}
// main function
function present(date,hour,min) {
    const alarmIn =new Date(`Jun ${date}, 2023 ${hour}:${min} `)
    let now = new Date()
    let result = alarmIn.getTime() - now.getTime()
    if (result > 0){
        endTime.textContent = alarmIn
        milli = Math.floor(result/1000)
        min = Math.floor(milli/60)
        second = Math.floor(milli%60)
        countDown.textContent = `Time left : ${min}min ${second}second`  
    }else if(result<0 && result > -5000){
        countDown.textContent = `Alarm ! Alarm !! Alarm !!!`
        play()
    }else{
        countDown.textContent = `Set another Alarm   :)`
    }
   
}
// setInterval(()=>{
//     present("28","23","25")
// },100)

setValue.addEventListener("click",()=>{
    setAlarm.style.display = "none"
    alrm.style.display = "flex"
    let date = document.querySelector("#date").value
    let hour = document.querySelector("#hour").value
    let min = document.querySelector("#min").value
    console.log(date,hour,min)
    setInterval(()=>{
        present(date,hour,min)
    },100)
    
})
cancelBtn.addEventListener("click",()=>{
    // setAlarm.style.display = "none"
    // alrm.style.display = "flex"
    let date = 0 //document.querySelector("#date").value
    let hour = 0 //document.querySelector("#hour").value
    let min = 0 //document.querySelector("#min").value
    console.log(date,hour,min)
    setInterval(()=>{
        present(date,hour,min)
    },100)
})
setTime.addEventListener("click",()=>{
    setAlarm.style.display = "flex"
    alrm.style.display = "none"
})
okay.addEventListener("click",()=>{
    missed.style.display = "none" 
    alrm.style.display = "flex" 
})

// setValue.addEventListener("click",()=>{
//     let date = document.querySelector("#date").value
//     let hour = document.querySelector("#hour").value
//     let min = document.querySelector("#min").value
//     return date,hour,min
// })



