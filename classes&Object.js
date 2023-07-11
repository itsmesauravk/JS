class Attandence {
    present(name) {
        alert (`${name} is present`)
    }
    abscent() {
        alert("is abscent")
    }
}

let man1 =new Attandence()
let man2 = new Attandence()

man1.present("Ram")
man2.abscent()

class Attandence1 {
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
//creating form 
let form1 = new Attandence1()
//assigning variables
form1.fill("GOd",123)

let form2 = new Attandence1()
form2.fill("zzz")
//running the details
form1.present()
form2.abscent()
