const loader = document.getElementById('loader')
let selector = document.getElementById("city-list");
let cities = getCitiesFromLocalStorage();

function addCitiesToSelector() {

    if (cities.length == 0) {
        selector.innerHTML += `<option value="" disabled selected>No hay ciudades agregadas</option>`
    }
    else {
        selector.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

function createCard() {

    loader.style.display = 'unset';
    removeSpinner();
    
    consultAPI(selector.value);
    document.querySelector('.card').style.display = 'none';
}

document.getElementById("consultar").addEventListener("click", createCard)

addCitiesToSelector();