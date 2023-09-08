const btn = document.getElementById("givLoc")
const disp = document.querySelector(".datas")



if ("geolocation" in navigator) {
    // Geolocation is available
    navigator.geolocation.watchPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        locationFetch(latitude,longitude)

        // You can use the latitude and longitude for your application's purposes
    }, function (error) {
        // Handle errors (e.g., user denied location access or geolocation failed)
        console.error("Error getting location:", error);
    });
} else {
    // Geolocation is not available in this browser
    console.error("Geolocation is not available.");
}


function locationFetch(lat,lon){
    const API_key = "7909a3f6027a002f28a9f982feb7917c"
    const f = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
    f.then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    })

}


