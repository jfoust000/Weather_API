const apiKey = '';

let cityInput = document.getElementById('cityInput');
let form = document.getElementById('cityForm');
let weatherIcon = document.getElementById('weatherIcon');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temperature');
let feelsLike = document.getElementById('feelsLike');
let windSpeed = document.getElementById('windSpeed');

let search = '';

form.addEventListener('submit', function(e) {

    e.preventDefault();
    search = cityInput.value;



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=${apiKey}`).then(response => response.json()).then(data => {
    

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp);
    feelsLike.innerHTML = Math.round(data.main.feels_like);
    windSpeed.innerHTML = Math.round(data.wind.speed);


    let iconLink = data.weather[0].icon;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${iconLink}@2x.png`);

});

});

