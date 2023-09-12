// <!---class js ------->>

class Attendene {
    present(name){
        console.log(name +" is present.")
    }
    abscent(name,roll){
        console.log(`${this.name} of roll number ${this.roll} is abscent.`)
    }
    late(){
        console.log("Late")
    }
    fill(name,roll){
        this.name = name
        this.roll = roll
    }
}

let sanjeet = new Attendene();
sanjeet.fill("THapa",7)
sanjeet.abscent()
sanjeet.present("helloworld")
let kazi = new Attendene();
let sau = new Attendene();
// sanjeet.present("Sanjeet")
kazi.fill("nothuman",11)
kazi.abscent()
sau.late()
let help = new Attendene()
help.abscent("hello",12)