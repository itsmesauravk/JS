// object orentied programming

let a  = {
    'name':"donkey",
    'car':'bugatti'
}
let p= {
    run: ()=>{
        alert("run is runned")
    }
}
p.__proto__ = {
    'fruit':"mango"   //this will be inside p or prototype of p
}
a.__proto__ = p  //this will  add p prototype in a
a.run()       //and run will be executed
console.log(a.fruit)  //so it will display mango