class ForCard {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    varify(){
        console.log(`Hi, ${this.name} your age is ${this.age}.`)
    }
    unvarify(){
        console.log(`Hi, ${this.name} your age is not ${this.age}.`)
    }
}

let person1 = new ForCard("syam", 21)
let person2 = new ForCard("hott", 23)

person1.varify()
person2.unvarify()