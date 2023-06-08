let p =  fetch("https://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=0d65086abc5d836d07390a4987b6b7a1")
.then((response) =>{
	return response.json()
	
}).then((result) =>{
	// console.log(result)
	// console.log(result.name)
	// return result
	console.log(result)
	const temp = document.getElementById("tempr")
	const maxtemp = document.getElementById("maxtemp")
	const mintemp = document.getElementById("mintemp")
	const name = document.getElementById("name")
	temp.innerText=result.main.temp
	maxtemp.innerText=result.main.temp_max
	mintemp.innerText=result.main.temp_min
	name.innerText=result.name
	return result;

	
})







// console.log(p)

// console.log(typeof(p))
// temp.textContent = p 
