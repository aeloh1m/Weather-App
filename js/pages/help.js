

function resolverMensaje() {
    debugger;
    return new Promise(resolve => {
      setTimeout(() => {

        if (validarMail() == true){
            msg.innerHTML += '<p class="msg">Su mensaje ha sido enviado con éxito</p>';
            deleteMsg()
            return;
    
        }
        else {
            msg.innerHTML += '<p class="msg msg-error">Por favor, ingrese un correo válido</p>';
            deleteMsg()
            return;
        }

      }, 2000);
    });
  }


function sendAndValidate() {
    debugger;


    loader.style.display = 'unset';
    exitLoader();

    resolverMensaje()
    deleteMsg()
    
};

function validarMail() {
    debugger;

    let validEmail = email.value
    var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valid = re.test(validEmail);

    return valid
}

async function Clear() {
    form.reset();
};

document.getElementById("setClear").addEventListener("click", Clear);