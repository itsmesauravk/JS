/*
types of JSON
types               examples
Strings             "Hello world"   "name"
Numbers             10 -29 29.4 1.2e10  (json supports any type of decimal positive, negative,whole ,decimal and scientific)
null                null  (empty)
Arreys              [1,2,3]  ["hello","world"]
Objects             {"key":"value"}     {"name":"harry", "age":20}
*/

// example
let companies = `[
    {
        "name":"comp1",
        "numOfEmplooyee": 12340,
        "ceo":"user1",
        "rating":4.1
    },
    {
        "name":"comp2",
        "numOfEmplooyee": 1240,
        "ceo":"user2",
        "rating":4.4
    }
]`
//normally type of companies will be object
// after putting (``)in starting and ending it changes to string from object
result1 =JSON.parse(companies)
console.log(result1)
// console.log(result1[0].name)  it displays the name of company in the 0 th index this is only used in object types not in string types
console.log(typeof(result1))
// initially inside (``) companies is string after using
//JSON.parse it changes string to object and logsout the result in object format


//now changing above result1 which is in object format to again in string type
result2 = JSON.stringify(result1)
console.log(result2)
console.log(typeof(result2))
// so the type of result 2 will be in string type which is changed form 
// object type by using JSON.stringify
