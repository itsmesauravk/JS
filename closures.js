
function first(){
   let  name = "one"
   function second() {
    console.log("This is "+ name)
   }
   name = "two"
   return second
}
let c = first()  //calling first function which return another function inside it...
c()  //calling insider function of first()  >>//will log out (This is two)..

