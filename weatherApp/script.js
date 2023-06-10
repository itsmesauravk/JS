let cityLocation = ["kathmandu"]
console.log(cityLocation )
let p =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&units=metric&appid=0d65086abc5d836d07390a4987b6b7a1`)
.then((response) =>{
	return response.json()
	
}).then((result) =>{
	console.log(result)
	const cityName = document.querySelector(".name")
	const mainTemp = document.querySelector(".tempr")
	const weather = document.querySelector(".cloud")
	const maxTemp = document.querySelector(".maxtemp")
	const minTemp = document.querySelector(".mintemp")
	const sunRise = document.querySelector(".sunrise")
	const sunSet = document.querySelector(".sunset")
	const windSpeed = document.querySelector(".speed")
	const windAngle = document.querySelector(".deg")
	const searchName = document.querySelector(".cityname")
	const searchM = document.querySelector("#searchO")
	const crossX = document.querySelector("#crossX")
	// const name = document.querySelector(".cityname")

	cityName.textContent = result.name
	mainTemp.textContent = result.main.temp + " °"
	weather.textContent = result.weather[0].main
	maxTemp.textContent ="max-temp : " + result.main.temp_max + " °"
	minTemp.textContent ="min-temp : " + result.main.temp_min + " °"
	
	windSpeed.textContent = "Wind-speed : " + result.wind.speed
	windAngle.textContent ="Wind-angle : " + result.wind.deg + "°"
	

	searchM.addEventListener("click",()=>{
		cityName.style.display = "none"
		searchName.style.display = "flex"
		crossX.style.display = "flex"
		searchM.style.display = "none"

	})
	crossX.addEventListener("click",()=>{
		cityName.style.display = "flex"
		searchName.style.display = "none"
		searchM.style.display = "flex"
		crossX.style.display = "none"
	})
	searchName.addEventListener("keypress", () => {
		if (event.key === "Enter"){
			cityLocation[0] = searchName.value
			cityName.style.display = "flex"
			searchName.style.display = "none"
			searchM.style.display = "flex"
			crossX.style.display = "none"
		}
	})

	return result;
})







// console.log(p)

// console.log(typeof(p))
// temp.textContent = p 
