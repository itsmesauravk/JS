const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const display = document.getElementById("dis")
const userwin = document.getElementById("playerwin")
const computerWin = document.getElementById("computerwin")
const drawMatch = document.getElementById("draw")
const choices = document.getElementById("choices")
const defult = document.querySelector(".defult")
const totalGame = document.getElementById("total")

let total = 0
let userw = 0
let  comp = 0
let draw = 0

let computerChoice = ()=>{
    let choice = ["rock","paper",'scissor']
    let computer = choice[Math.floor(Math.random()*choice.length)]
    return computer
}
function playGame(user,computer){   
    if(user === computer){
        console.log('Tie')
        draw +=1
        display.textContent = "Tie"
    }else if(user === "rock" && computer === "scissor"){
        console.log('You win')
        userw +=1
        display.textContent = "You win"
    }else if(user ==="paper"&& computer ==="rock"){
        console.log("You win")
        userw +=1
        display.textContent = "You win"
    }else if (user === "scissor" && computer === "paper"){
        console.log("You win")
        userw +=1
        display.textContent = "You win"
    }else{
        console.log("Computer win")
        comp+=1
        display.textContent = "Computer win"
    }
    console.log(user)
    drawMatch.textContent ='Draw : '+ draw
    computerWin.textContent ="Computer : "+ comp
    userwin.textContent ="Player : "+ userw
    choices.innerHTML = `Player : ${user} <br>
                        Computer : ${computer}`
    defult.style.display = "none"
    totalGame.textContent = "Total games : "+(draw+userw+comp)
}
rock.addEventListener("click",()=>{
    playGame('rock',computerChoice())
})
paper.addEventListener('click',()=>{
    playGame('paper',computerChoice())
    
})
scissor.addEventListener("click",()=>{
    playGame('scissor',computerChoice())
})