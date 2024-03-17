const apikey = "6a644282f00f2a08a529d2e6569d7bb1";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else {

    var data = await response.json();
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  
    if (data.weather[0].main == "Cliouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "1") {
        window.location.reload();
      } else if (event.key === "Escape") {
        document.querySelector(".weather").style.display = "none";
        document.querySelector('input[type="text"]').value = "";
      }
    });

  }
 
}

searchbtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
