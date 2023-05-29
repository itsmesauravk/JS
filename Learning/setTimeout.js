/* setTimeout is used to execute that function after the given certain
    period of time */

setTimeout(() => {
    console.log("i had appers after 5 second")
},5000
)
/* in the above function setTimeout the logout message will
 appears after 5 second of the program executions */


const sum = (x,y) => {
    result = x+y
    console.log("the solution is : "+ result)
}
// if i had to run this function after the certain time then
setTimeout(sum, 7000, 2, 3)

// in above function setTimeout(function_name, time_delay, first_value, second_value)
//returns the sum