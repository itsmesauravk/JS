let p = fetch("https://api.openweathermap.org/data/2.5/weather?lat=27.7172&lon=85.3240&appid=0d65086abc5d836d07390a4987b6b7a1")
.then((response) =>{
	return response.json()
	
}).then((result) =>{
	// console.log(result)
	// console.log(result.name)
	console.log(result.main.temp)
})

console.log(typeof(p))
const temp = document.getElementById("tempr")
temp.textContent = p