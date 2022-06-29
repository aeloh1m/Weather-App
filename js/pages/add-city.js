
// Mensajes
var success = '<p class="msg">Ciudad agregada con éxito</p>';
var warning = '<p class="msg msg-error">La ciudad ingresada ya se encuentra almacenada</p>';
var error = '<p class="msg msg-warning">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';

setTimeout(function(){
    console.log("Awaitea"); 
}, 5000);

// Validación

async function validarCiudad(City) {
  
    for (let i = 0; i < cities.length; i++) {
        if (City == cities[i]) {
            return "warning";
        };
    };

    if (await consultAPI(newCity) == "error") {
        return "error";
    }
    else {
        return "success";
    };
}


async function addCityToLocalStorage() {
    debugger;
    
    newCity = City.value
    newCity = newCity.toUpperCase()

    switch(await validarCiudad(newCity)) {
        case "success":
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            loader.style.display = 'unset';
            exitLoader();
            msg.innerHTML += success;
            deleteMsg();
            break;
        case "warning":
            loader.style.display = 'unset';
            exitLoader();
            msg.innerHTML = warning;
            deleteMsg();
            break;
        case "error":
            loader.style.display = 'unset';
            exitLoader();
            msg.innerHTML = error;
            deleteMsg();
            break;
    };

};


document.getElementById("add-city").addEventListener("click", addCityToLocalStorage);