function first(){
    let  name = "apple";
    function second() {
        console.log("This is "+ name)
    }
    name = "mango"
    return second
}
let c = first() 
c() 
