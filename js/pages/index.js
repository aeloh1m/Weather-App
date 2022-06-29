

function createCard() {
    
    loader.style.display = 'none';
    exitLoader();
    
    consultAPI(selector.value);
    document.querySelector('.card').style.display = 'none';
}

function addCitiesToSelector() {

    if (cities.length == 0) {
        selector.innerHTML += `<option value="sinCiudad" disabled selected>No hay ciudades agregadas</option>`
    }
    else {
        selector.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

document.getElementById("consultarClima").addEventListener("click", createCard)

addCitiesToSelector();