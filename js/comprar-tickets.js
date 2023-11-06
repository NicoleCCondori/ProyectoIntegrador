const valorTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let mensajeErrorNombre = document.getElementById("mensajeErrorNombre");
let apellido = document.getElementById("apellido");
let mensajeErrorApellido = document.getElementById("mensajeErrorApellido");
let correo = document.getElementById("correo");
let mensajeErrorCorreo = document.getElementById("mensajeErrorCorreo");
let cantidad = document.getElementById("cantidad");
let mensajeErrorCantidad = document.getElementById("mensajeErrorCantidad");
let categoria = document.getElementById("categoria") ;
let mensajeErrorCategoria = document.getElementById("mensajeErrorCategoria");

const quitarClaseError = () => {

    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for(let i= 0; i < listaNodos.length; i++){
        listaNodos[i].classList.remove("invalid-feedback");
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for(let i= 0; i < listaNodosdiv.length; i++) {
        listaNodosdiv[i].classList.remove("mostrar");
    }
}

const totalAPagar = () => {

    quitarClaseError();

    if (nombre.value === ""){
        nombre.classList.add("invalid-feedback");
        mensajeENombre.classList.add("mostrar");
        nombre.focus();
        return;
        
    }if (apellido.value=== ""){
        apellido.classList.add("invalid-feedback");
        mensajeErrorApellido.classList.add("mostrar");
        apellido.focus();
        return;

    }if(correo.value === ""){
        correo.classList.add("invalid-feedback");
        mensajeErrorEmail.classList.add("mostrar");
        email.focus();
        return;
    
    }
    const emailValido = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!emailValido(email.value)){
        correo.classList.add("invalid-feedback");
        mensajeErrorCorreo.classList.add("mostrar");
        email.focus();
        return;
    }

    if ((cantidad.value == 0) || (isNaN(cantidad.value))) {
        alert("Por favor, ingresá correctamente cantidad de tickets.")
        cantidad.classList.add("invalid-feedback");
        cantidad.focus();
        return;
    }

    if(categoria.value == ""){
        categoria.classList.add("invalid-feedback");
        categoria.focus();
        return;
    }

//declaro una variable de tipo number

    let totalValorTickets = (cantidad.value) * valorBase;;

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
