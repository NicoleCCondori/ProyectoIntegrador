const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let errorNombre = document.getElementById("errorNombre");
let apellido = document.getElementById("apellido");
errorApellido = document.getElementById("errorApellido");
let email = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");
let cantidad = document.getElementById("cantidad");
let errorCantidad = document.getElementById("errorCantidad");
let categoria = document.getElementById("categoria") ;
let errorCategoria = document.getElementById("errorCategoria");

const quitarClaseError = () => {

    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for(let i= 0; i < listaNodos.length; i++){
        listaNodos[i].classList.remove("is-invalid");
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for(let i= 0; i < listaNodosdiv.length; i++) {
        listaNodosdiv[i].classList.remove("mostrar");
    }
}

const totalAPagar = () => {

    quitarClaseError();

    if (nombre.value === ""){
        nombre.classList.add("is-invalid");
        errorNombre.classList.add("mostrar");
        nombre.focus();
        return;
        
    }if (apellido.value=== ""){
        apellido.classList.add("is-invalid");
        errorApellido.classList.add("mostrar");
        apellido.focus();
        return;

    }if(email.value === ""){
        email.classList.add("is-invalid");
        errorEmail.classList.add("mostrar");
        email.focus();
        return;
    
    }
    const emailValido = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!emailValido(email.value)){
        email.classList.add("is-invalid");
        errorEmail.classList.add("mostrar");
        email.focus();
        return;
    }

    if ((cantidadTickets.value == 0) || (isNaN(cantidadTickets.value))) {
        alert("Por favor, ingresá correctamente cantidad de tickets.")
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    if(categoria.value == ""){
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

//declaro una variable de tipo number

    let totalValorTickets = (cantidadTickets.value) * valorBase;;

    switch(categoria.value){
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;  
    }

    totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener("click", totalAPagar);

const resetTotalAPagar=() =>{
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener("click", resetTotalAPagar);
