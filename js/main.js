const apiKey = "3c69fc1abf940804311d72375efe8ad0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// APIURL: https://api.openweathermap.org/data/2.5/weather?units=metric&q=

//const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.mainImg');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }   else {

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';

        document.querySelector('.feuchtigkeit').innerHTML = data.main.humidity + "%";
        document.querySelector('.windStearke').innerHTML = data.wind.speed + "Km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "../img/wolkig.png";
        }   else if (data.weather[0].main == "Clear") {
            weatherIcon.src == "../img/sonne.png";
        }   else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "../img/regen.png";
        }   else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "../img/drizzle.png";
        }   else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "../img/mist.png";
        }
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});