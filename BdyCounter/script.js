const submit = document.getElementById("submit");
const timeEl = document.querySelectorAll(".dataDis");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const changeD = document.getElementById("changeD");
const conti = document.getElementById("continue");
const card0 = document.querySelector(".card0");
const card3 = document.querySelector(".card3");
const gift = document.getElementById("gift");
const wish = document.getElementById("wish")

function endd() {
    const date = document.querySelector("#date").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    const timeHour = document.querySelector("#timeHour").value;
    const timeMinute = document.querySelector("#timeMinute").value;
    const ampm = document.querySelector("#ampm").value;

    const endTime = `${date} ${month} ${year} ${timeHour}:${timeMinute} ${ampm}`;
    document.getElementById("end-time").innerText = endTime;

    // Return the calculated endTime
    return endTime;
}

function timer() {
    // Recalculate endTime every time timer is called
    const endTime = endd();
    const end = new Date(endTime);
    const start = new Date();
    const diff = (end - start) / 1000;

    // Check if diff is less than or equal to 0
    if (diff <= 0) {
        // Display 0 for all time elements
        timeEl[0].value = 0;
        timeEl[1].value = 0;
        timeEl[2].value = 0;
        timeEl[3].value = 0;
        // Show the gift
        gift.style.display = "flex";
        // Return to stop further execution (optional)
        return;
    }else{
        gift.style.display = "none";
    }

    // Update time elements as before
    // for days
    timeEl[0].value = Math.floor((diff / 3600 / 24));
    // for hours
    timeEl[1].value = Math.floor(diff / 3600) % 24;
    // for minutes
    timeEl[2].value = Math.floor(diff / 60) % 60;
    // for seconds
    timeEl[3].value = Math.floor(diff) % 60;
}

// Initial calculation of endTime and timer
timer();


// for name check
function nameCheck() {
    const name = document.getElementById("name").value;
    const specialChars = "!@#$%^&*()_-+={}[]`~";

    if (!name) {
        alert('Please enter your Name');
        return false; // Return false to indicate the name is not valid
    } else {
        for (const char of name) {
            if (specialChars.includes(char)) {
                alert('Special characters are not allowed');
                document.getElementById("name").value = ""; // Clear the input field
                wishy(name);
                return false; // Return false to indicate the name is not valid
            }
        }
        return name; // Return true to indicate the name is valid
    }
}



submit.addEventListener("click", () => {
    // When the submit button is clicked, check if the name is valid
    
    const isValidName = nameCheck();
    if (isValidName) {
        // If the name is valid, calculate endTime and update the timer
        timer();
        card1.style.display = "none";
        card2.style.display = "flex";
        console.log(nameCheck())
    }
});

changeD.addEventListener("click", () => {
    card1.style.display = "flex";
    card2.style.display = "none";
});
conti.addEventListener("click",()=>{
    card0.style.display = "none";
    card1.style.display = "flex"
})

gift.addEventListener("click",()=>{
    card2.style.display = "none";
    card3.style.display = "flex";
    wishy(nameCheck())
})
//for displaying the wish 

function wishy(fullName){
    wish.textContent = `🎈 HappY BirthdaY ${fullName} 🎈`
}

document.getElementById("scanqr").addEventListener("click",()=>{
    document.getElementById("qrscan").style.display = "flex";
    card3.style.display = "none"
})
document.getElementById("watchv").addEventListener("click",()=>{
    document.getElementById("video").style.display = "flex"
    card3.style.display = "none"
})

document.querySelector("#backg").addEventListener("click",()=>{
    card3.style.display = "flex";
    document.getElementById("qrscan").style.display = "none";
})
document.querySelector("#backg1").addEventListener("click",()=>{
    card3.style.display = "flex";
    document.getElementById("video").style.display = "none"
})
document.querySelector("#backkk").addEventListener("click",()=>{
    card3.style.display = "none";
    card2.style.display = "flex";

})
//settimeout


// Refresh the timer every 1000 ms = 1 second
setInterval(() => {
    timer();
}, 1000);

