// basically inheritance is for making large number of classes with additional with same features also

class Animal {
    constructor(name,age,color){
        this.name = name
        this.age = age
        this.color = color
    }

    colorX(){
        console.log(`${this.name} is of color ${this.color}`)
    }
    ageX(){
        console.log(`${this.name} is now turns to age ${this.age}`)
    }
    walk(){
        console.log(this.name +" didnot walk")
    }
}

// so if i want ot continue this call with adding other catagories i haveto use inheritence to so easily
//children class have self created constructor super()
class Bear extends Animal {
    eatMeat(){
        console.log(`${this.name} eats meat at age of ${this.age}`)
    }
    
}

let a = new Animal("leo",3,'brown')
let b = new Bear("pyaru",5,'black-white')

a.colorX()
b.ageX()
b.eatMeat()
b.colorX()
b.walk()
a.eatMeat()  ///parent class cannot acess child function so //will throw error

