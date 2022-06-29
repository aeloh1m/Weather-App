
// Mensajes
var success = '<p class="msg">Ciudad agregada con éxito</p>';
var warning = '<p class="msg msg-error">La ciudad ingresada ya se encuentra almacenada</p>';
var error = '<p class="msg msg-warning">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';



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

async function waiter(probability) {
    debugger;
    setTimeout(function(){
        msg.style.display = "flex" // Los trae
        
        switch(probability) {
            case "success":
                msg.innerHTML = success;
                deleteMsg();
              break;
              
            case "warning":
                msg.innerHTML = warning;
                deleteMsg();
              break;

            default:
                msg.innerHTML = error;
                deleteMsg();
          }

    }, 3000);
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
            waiter("success")
            break;

        case "warning":
            loader.style.display = 'unset';
            exitLoader();
            waiter("warning")
            break;

        case "error":
            loader.style.display = 'unset';
            exitLoader();
            waiter("error")
            break;
    };

};


document.getElementById("add-city").addEventListener("click", addCityToLocalStorage);