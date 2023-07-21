let display = document.querySelector(".result")
let rGenerator = document.querySelector("#generatorX")

class RandomGenerator{
    constructor(len){
        this.len = len
    }
    passwordGenerator(){
        if (this.len < 4 || this.len>10){
            return ("Invalid password range: range(4-10)")
        }else{
            let chars = "abcdefghijklmnopqrstuvwxyz"
            let nums = "1234567890"
            let specialChars = "!@#$%^&*()"
            this.password = ""
            let i = 0
            while (i < this.len){
                this.password += chars[Math.floor(Math.random()* chars.length)]
                this.password += nums[Math.floor(Math.random()* nums.length)]
                this.password += specialChars[Math.floor(Math.random()* specialChars.length)]
                i += 3
            }
            return this.password
        }
    }
}

rGenerator.addEventListener("click",()=>{
    let inputValue = document.querySelector("#inputR").value
    let pass = new RandomGenerator(inputValue)
    display.textContent = pass.passwordGenerator()
    console.log(inputValue)
})