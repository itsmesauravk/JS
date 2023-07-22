// var emailInput = document.getElementById("input1").value
// var detailsInput = document.getElementById("input2").value
let printResult = document.querySelector("#btn")
let outputForm = document.querySelector(".output")

class Form {
    constructor(email,details){
        this.email = email
        this.details = details
    }
    output(){
        let aa = `Dear sir/mam, Your email is ${this.email} and your provided details is : ${this.details}.`
        let ab = "  Thank You for filling this form.. :)"
        let result = aa + ab
        return result
    }
    
}


printResult.addEventListener("click",()=>{
    let emailInput = document.getElementById("input1").value
    let detailsInput = document.getElementById("input2").value
    console.log(emailInput)
    console.log(detailsInput)
    outputForm.style.display = "flex"
    let a = new Form(emailInput,detailsInput)
    outputForm.textContent = a.output()
})

