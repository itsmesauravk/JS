let key = prompt("enter the key to set:>")
let value = prompt("enter the vlaue to set:>")
localStorage.setItem(key,value) //setItems sets the key and value to local storage

console.log(`the value of ${key} is ${localStorage.getItem(key)}` )  //getItems show the value of given key
// .removeItem(key) removes the key and value of provided key
// .clear() is used to remove all data from local storage
// .length is used to display the length of item stored in localstorage
// .key(index)  if index value is given the it display the key of perticular index

// keys and values should be in string