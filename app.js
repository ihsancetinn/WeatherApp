const input = document.querySelector(".input");
const url = 'https://api.openweathermap.org/data/2.5/';
const key = `7ac2ed6bdd1633c5d81a9e1151da5c6d`;
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const tempi = document.querySelector(".tempi");
const weather = document.querySelector(".weather");

const setQuery = (e) => {
    if (e.keycode == '13');
    getResult(input.value)

}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => { return weather.json() })
        .then(dataResult)
        .catch(err => err);

}
const dataResult = (result) => {
    city.innerHTML = `${result.name}, ${result.sys.country}`;

    temp.innerHTML = `${Math.round(result.main.temp)}°C`;

    weather.innerHTML = `${(result.weather[0].description)}`;

    tempi.innerHTML = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

}

input.addEventListener("keypress", setQuery);