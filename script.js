const apiKey = "449228ec8c41fb3276a6b573677b19d9";
const humidity = document.getElementById("humidity");
const speed = document.getElementById("speed");
const city = document.getElementById("city");
const displayCity = document.getElementById("displayCity");
const apiURL = `https://api.openweathermap.org/data/2.5/weather?&appid=449228ec8c41fb3276a6b573677b19d9&units=metric&q=`;
const searchBtn = document.getElementById("search");
const temp = document.getElementById("temp");
const icon = document.getElementById("weather-icon");
async function checkWeather(city) {
    const resposnse = await fetch(apiURL+city);
    var data = await resposnse.json();
    humidity.innerHTML = data.main.humidity;
    speed.innerHTML = data.wind.speed;
    temp.innerHTML = Math.round(data.main.temp);
    displayCity.innerHTML = data.name;
    console.log(data.weather[0].main);
    if(data.weather[0].main == "Clouds")
    {
        icon.src = "./images/clouds.png"
    }
    else if(data.weather[0].main == "Clear")
    {
        icon.src = "./images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle")
    {
        icon.src = "./images/drizzle.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        icon.src = "./images/rain.png"
    }
    else if(data.weather[0].main == "Snow")
    {
        icon.src = "./images/snow.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        icon.src = "./images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(city.value)
});

