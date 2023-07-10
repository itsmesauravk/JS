/* syncronous programming is that where programs runs line by line
for example */
console.log("it will display first")
console.log("it will display second")
console.log("it will display third")
// so in above all are displayed from top to button serially this is known sa
// syncronous programming


// Asyncronous programming is when the execution of program will not be in serial
// for example
console.log("this will display first")
setTimeout(() =>{
    console.log("this will display second")
},1000)
console.log("this will display third")
// the second condition runs at second but ends in last
// in above condition the second function will print as last so this type of programm is
// Asyncronous programming


//Call back
//in simple term calling the previous function at any time

//example 1 :setInterval
let timer = () => {
    console.log("i'm here myan")
}
setTimeout(timer,2000)

// here in this wee call back the function named timer and put it into setTimeout .
//in below we can call timer any where we want



const names = ["rammy", "harry", "tobby"]
console.log(typeof(names))

const forEach = (array,callback) => {
    for (let i=0; i < array.length; i++){
        const nameIs = array[i];
        callback(nameIs)
    }
}
forEach(names, (name) =>{
    console.log(name)
})
//in above it will print all the names in serially 

const planets = (name,callback) => {
    console.log(name + callback)
}
function earth(){
    console.log("earth is the third planet of the system.")
}

planets("Mercury", earth)

