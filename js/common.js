// inicializamos constantes y variables que vayamos a utilizar a lo largo del código.

const msg = document.getElementById('msg');
const loader = document.getElementById('loader')
const enviar = document.getElementById('enviarMail');
const email = document.getElementById('email');

let selector = document.getElementById("city-list");
let cities = getCitiesFromLocalStorage();
let newCity = document.getElementById("agregarciudad");


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function consultAPI(cityName) {
    let apiKey = "2c405c01826f37c50c9e4ef65e6e442d"
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("error")
        })
        .then(data => {
            showWeather(data);
        })
        .catch(error => {
            return "error"
        });
}

function showWeather(data) {
    let ciudad = data.name;
    let icono = data.weather[0].icon;
    let temp = data.main.temp;
    let sensaciontermica = data.main.feels_like;
    let humedad = data.main.humidity;
    let viento = data.wind.speed;
    let presion = data.main.pressure;

    let card = `<div class="card">
                    <h3>${ciudad}</h3>
                    <img src="http://openweathermap.org/img/wn/${icono}.png" alt="Imagen del clima">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${sensaciontermica}°</p>
                    <p>Humedad: ${humedad}%</p>
                    <p>Velocidad del Viento: ${viento} km/h</p>
                    <p>Presión: ${presion} P</p>
                </div>`

    let section = document.getElementById("section-weather-result");
    if (section) {
        section.innerHTML = "";
        section.innerHTML += card;
    }
}


function deleteMsg() {
    setTimeout(function() {
        document.getElementsByClassName("msg")[0].remove();
    }, 10000);
}

function exitLoader() {
    setTimeout(function() {
        loader.style.display = 'none';
    },3000)
}


