//cookies will not be replace it willbe added ..

// for example
console.log(document.cookie)//this will display the first cookie which will be empty for this webpage
document.cookie = "name = CookI" //this cookie will be added
document.cookie = "name2 = CookII"  //this will also be added after previous one
console.log(document.cookie) // this will display both cookie
//if same name (key) is given then it will overwrite the previoous one
document.cookie = "name = Coooki" //it will replace CookI with Coooki

let key = prompt("enter your key:::>")
let value = prompt("enter your value ::>")
document.cookie = `${key}=${value}`
console.log(document.cookie)
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}` //encodeURIComponent endodes special character.
console.log(document.cookie)  //to decode the result decodeURIComponent("items to decode")
//it stores data less the 4kb