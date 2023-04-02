let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
count=0

function present() {
count=count+1
countEl.innerText=count
}
function save() {
    countStr=" - " + count
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
    console.log(count)
}
