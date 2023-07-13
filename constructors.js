class Attandence1 {
    constructor(name,num){  //constructor is that method that runs every time when the class is called , it is like finally in error handling
        console.log("called constructor" +name + num) //it is called automatically
        this.name = name
        this.num = num
    }
    present() {
        alert (this.name + "is present" + this.num)
    }
    abscent() {
        alert(this.name + "is abscent")
    }
    fill(yourName,num){
        this.name = yourName
        this.num = num  //can be saame
    }
}
//creating and fill form   //doesnot required fill 
let form1 = new Attandence1("sauravb",123)
let form21 = new Attandence1("zzz ")
let form22 = new Attandence1("omg ",123)

form1.present()
form21.abscent()
form22.present()
