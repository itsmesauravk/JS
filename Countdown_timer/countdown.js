const endTime = "26 January 2024 04:15 PM"

document.getElementById("end-time").innerText = endTime

const timeEl = document.querySelectorAll("input")

function timer() {
    const end =new Date(endTime);
    const start =new Date()
    const diff = (end - start) / 1000
    // for stopping time after diff becomes zero
    if (diff<0) return;
    // above difference is in second after dividing by 1000
    // for days
    timeEl[0].value= Math.floor((diff/3600/24))
    // for hours
    timeEl[1].value = Math.floor(diff/3600) %24
    //for minutes
    timeEl[2].value = Math.floor(diff/60) %60
    // for second
    timeEl[3].value = Math.floor(diff) %60
}
// recalling the function
timer()
// to refresh time in every 1000 ms = 1ses
setInterval(
    () => {
        timer()
    },
    1000
)
