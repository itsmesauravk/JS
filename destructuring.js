//in normal
let arr = [1,2,3]
// let a = arr[0]
// let b = arr[1]
// let c = arr [2]
// console.log(a,b,c)

//so by using destructuring
let arry = [3,4,5]
//let [x,y,z] = arry
//console.log(x,y,z)
//it will show error if console value is more then arry but runs if arry value is morethen console

let arryA = [1,2,3,4,5]
//let [m,n,...rest] = arryA 
//console.log(m,n, rest)  //by using rest it will display the value of m & n and rest value will displayed in array

//let [m,,,...rest] = arryA
//console.log(m,rest)   //it will display value of m and leave 2 step and display 4,5 in array

//in case of object
let {m,b} = {m:1,b:2}  //both objects should haveto be same m = m ,b=b
//console.log(m,b)  //m=1,n=2

//for more >> >> >> destructuring mdn docs


//<------------- spread Operator --------------->

//to change object to array
let arry1 = [1,2,3]
let obj1 = {...arry1}
console.log(obj1)  // returns {0:1, 1:2, 2:3}
//we can simply pass the value of arry1 to an function
function sum(n1,n2,n3){
    return n1+n2+n3
}
console.log(sum(...arry1))  //returns 6 >>[1,2,3] >>1+2+3 = 6

//for more >> >> >> spread operator mdn docs