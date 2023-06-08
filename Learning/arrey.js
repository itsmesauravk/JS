// about array
// basic array
// list in python, array in JS
let fruits = ["apple","mango","banana"]
// console.log(typeof(fruits))   so the type of array is object
// console.log(fruits[0])  follow index method
fruits[2] = "leechi"  //changes or update the second index with new one
//multi dimensional array
let numbrs = [[1,2,4],[[1,5,6],'x'],'a', 0]
rslt = numbrs[1][1] //to logout the value 'x'
rslt = numbrs[1][0][1]  //to logout the value 5

let list = ['app', 'website']
list.push(['game','music'])  //it add every thing inside () so result will be ['app','website',['game','music']]

list.pop() // this will remove the the last data from the array in above eg. it will remove ['game','music']

let num = [1,2,3]
num.shift() //it remove the first data from the array, so the result will be [2,3]

num.unshift(1) //it adds the data in the begining of the array, so the result will be [1,2,3]
// console.log(num)
