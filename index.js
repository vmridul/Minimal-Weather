
const api_key = "e8f55c951ec356f923ba684e75c21276"
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

function mine(){
    const a = document.getElementById("input_id")
    checkWeather(a.value)
    a.value = ""
}

async function checkWeather(location) {
    const b = document.getElementById("weather_icon")
    const response = await fetch(api_url +location+ `&appid=${api_key}`);
    var data = await response.json();
    if(data.name){
        document.querySelector(".loc").innerHTML = data.name
    document.querySelector(".temp").innerHTML = `${data.main.temp}°C`
    document.querySelector(".weather").innerHTML = data.weather[0].main
    document.querySelector(".wind_text").innerHTML = `${data.wind.speed} km/hr`
    document.querySelector(".humi_text").innerHTML = `${data.main.humidity}%`
    if(data.weather[0].main === "Sunny" || data.weather[0].main === "Clear"){
        b.className = 'fas fa-sun'
        b.style.color = "#e8efa8"
        b.style.fontSize = "40px"
        b.style.margin = "40px 0 0 35px"
    }else if(data.weather[0].main === "Clouds"){
        b.className = 'fas fa-cloud'
        b.style.color = "#a8ceef"
        b.style.fontSize = "40px"
        b.style.margin = "40px 0 0 35px"
    }else if(data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle"){
        b.className = 'fas fa-cloud-rain'
        b.style.color = "#a8ceef"
        b.style.fontSize = "40px"
        b.style.margin = "40px 0 0 35px"
    }else if(data.weather[0].main === "Thunderstorm"){
        b.className = 'fas fa-cloud-showers-water'
        b.style.color = "#a8ceef"
        b.style.fontSize = "40px"
        b.style.margin = "40px 0 0 35px"
    }else if(data.weather[0].main === "Snow"){
        b.className = 'fas fa-snowflake'
        b.style.color = "#d1e1db"
        b.style.fontSize = "40px"
        b.style.margin = "40px 0 0 35px"
    }else{
        b.className = 'fas fa-grip-lines'
        b.style.color = "#D1D8BE"
        b.style.fontSize = "40px"
        b.style.margin = "40px 0 0 35px"
    }
    }else{
        alert("NO LOCATION WITH THAT NAME!!")
    }

}

addEventListener("DOMContentLoaded",checkWeather("Delhi"))