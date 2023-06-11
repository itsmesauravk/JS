// const cityLocation = {"location":"pokhara"}
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
const cityLocation = {"location":"kathmandu"}
console.log(cityLocation )
let p =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLocation["location"]}&units=metric&appid=0d65086abc5d836d07390a4987b6b7a1`)
.then((response) =>{
	return response.json()
	
}).then((result) =>{

	console.log(result)

	cityName.textContent = result.name
	mainTemp.textContent = result.main.temp + " °"
	weather.textContent = result.weather[0].main
	maxTemp.textContent ="max-temp : " + result.main.temp_max + " °"
	minTemp.textContent ="min-temp : " + result.main.temp_min + " °"
	//for sunrise and set in time value
	// const totalSec =(result.sys.sunrise)/1000
	// const hourSr =Math.floor(totalSec/3600)
	// const minSr = Math.floor((totalSec%3600)/60)
	// const secSr = Math.floor((totalSec%3600) % 60)

	sunRise.textContent = "sun-rise : --"
	sunSet.textContent ="sun-set : " + "--"
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
	

	return result;
}
)
searchName.addEventListener("keypress", () => {
	if (event.key === "Enter"){
		console.log(searchName.value)
		cityLocation["location"] = searchName.value
		cityName.style.display = "flex"
		searchName.style.display = "none"
		searchM.style.display = "flex"
		crossX.style.display = "none"
		console.log(cityLocation)
		console.log()

	}
})


