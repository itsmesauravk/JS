const startEd = "22 MAY 2023 01:00 PM"
document.getElementById("strt-time").innerText = startEd

const timeEL = document.querySelectorAll("input")

function tillNow() {
    const start = new Date(startEd)
    const now = new Date()
    diff = Math.floor((now-start)/1000)
    timeEL[0].value = Math.floor(diff/86400)
    timeEL[1].value = Math.floor(diff/3600) %24
    timeEL[2].value = Math.floor(diff/60) %60
    timeEL[3].value = Math.floor(diff%60)
}
tillNow()

setInterval(
    () => {
        tillNow()
    },
    1000
)