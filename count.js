let countEl=document.getElementById("count-el")
count=0

function present() {
count=count+1
countEl.innerText=count
}
function save() {
    console.log(count)
}
