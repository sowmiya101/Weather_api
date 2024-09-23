var img  = document.getElementById("image")
var center = document.querySelector(".center")
var bottom = document.querySelector(".bottom")

var api = "945f9c5fa7185e1805cac07725356e3c"

var apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var search = document.querySelector(".top input")
var searchbutton = document.querySelector(".top button")


async function weather(city) {
    var response = await fetch(apiurl + city + `&appid=${api}`)
    var data = await response.json()
    
    var temp = document.getElementById("temp")
    var city = document.getElementById("city")
    var water = document.getElementById("water")
    var wind = document.getElementById("wind")

    temp.innerHTML = Math.round(data.main.temp) + "°c";
    city.innerHTML = data.name;
    water.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds") {
        img.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear") {
        img.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain") {
        img.src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle") {
        img.src = "drizzle.png.png"
    }
    else if(data.weather[0].main == "Mist") {
        img.src = "mist.png"
    }
}

searchbutton.addEventListener("click", ()=>{
    weather(search.value)

    center.style.display = "block"
    bottom.style.display = "block"
})