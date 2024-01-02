const apikey = "YOUR_OPENWEATHERMAP_API_KEY";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function weathercheck(city) {
    const response = await fetch(url + city + `&appid=${apikey}`)
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/clouds.png"
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rain.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/mist.png"
    }
    document.querySelector(".weather").classList = "flex flex-col items-center"
}
searchbtn.addEventListener("click", () => {
    weathercheck(searchbox.value);
})