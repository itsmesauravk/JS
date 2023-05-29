// for var

var varNumber = 2

varNumber = 4
console.log(varNumber)

//in this value can be changes and can be called or logout from out of the funchtion

// instead of var most recommended is to use let or const
// there are not much difference between let and var 
/* some of the dfferences are 
let value can be changed and const value cannot be changed 
or object type can be changed in let but cannot in const. */

//for exaple of let and const

let letNum = 3
letNum = 4
console.log(letNum)
// here in above it log outs value 4

let letValue = 5
letValue = "changed"
console.log(letValue)
// here in above it log outs (changed)
console.log (typeof(letValue))
// so using let we can change data type of variables


const constNum = 5
constNum = 6
console.log(constNum)
// it throw the error because constant value cannot be changed

const constValue = {user:"Before"}

console.log(constValue)
// it logs out the whole {user:"Before"}
console.log(typeof(constValue)) 
// the type is object

constValue.user = "After"
console.log(constValue)
// so using const value of object can be changed
