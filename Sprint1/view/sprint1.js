
//select option de los paises
const selectPaises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
let paises = document.getElementById("pais");
let opcionPorDefecto = document.createElement("option");
opcionPorDefecto.text = "";
opcionPorDefecto.value = "";
paises.add(opcionPorDefecto);


for(let i = 0; i <selectPaises.length; i++){
  let seleccion = document.createElement("option");
  seleccion.text = selectPaises[i];
  seleccion.value = selectPaises[i];
  paises.add(seleccion);
}
function validarPais() {
  let paisSeleccionado = paises.value;
  console.log("Pais seleccionado", paisSeleccionado);

  
}

function validarEnviar() {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let correo = document.getElementById("correo").value;
  let contrasenna = document.getElementById("contrasenna").value;
  let confirmarContraseña = document.getElementById("confirm").value;

  let error = document.getElementById("errorGeneral");
  errorGeneral.innerHTML = "";

  if (nombre === "" || apellidos === "" || correo === "" || contrasenna === "" || confirmarContraseña === "") {
    validarNombre();
    validarApellidos();
    validarCorreo();
    validarContraseña();
    confirmarContraseña();
    error.textContent = "Falta algún campo por rellenar"; 
    return false;
}

  // Si no hay errores, enviar el formulario
  document.getElementById("formulario").submit();
}


function validarNombre() {
  let nombre = document.getElementById("nombre").value;
  let error = document.getElementById("errorNombre");
  let inputNombre = document.getElementById("nombre");
  let regex = /^[a-zA-Z]+$/;

  if (nombre.trim() === "") {
    error.textContent = "*campo obligatorio";
    inputNombre.style.border = "2px solid red";
    return false;
  } else if(nombre.trim !== "") {
    error.textContent = "";
    if (regex.test(nombre)) {
      console.log("nombre valido");
      inputNombre.style.border = "";
    } else {
      console.log("nombre no valido");
      error.textContent = "*este campo no cumple los requisitos";
      inputNombre.style.border = "2px solid red";
    }
    return true;
  }
}


function validarApellidos() {
  let apellido = document.getElementById("apellidos").value;
  let error = document.getElementById("errorApellidos");
  let inputApellidos = document.getElementById("apellidos");
  let regex = /^[a-zA-Z]+(\s[a-zA-Z]+){1}$/;

  if (apellido.trim() === "") {
    error.textContent = "*este campo es obligatorio";
    inputApellidos.style.border = "2px solid red";
    return false;
  } else if(apellido.trim !== "") {
    error.textContent = "";
    if (regex.test(apellido)) {
      console.log("apellido valido");
      inputApellidos.style.border = "";
    } else {
      console.log("apellido no valido");
      error.textContent = "*este campo no cumple los requisitos";
      inputApellidos.style.border = "2px solid red";
    }
    return true;
  }
}

function validarCorreo(){
  let inputCorreo = document.getElementById("correo");
  let correo = document.getElementById("correo").value;
  let error = document.getElementById("errorCorreo");
  let regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if(correo.trim()===""){
    error.textContent = "*este campo es obligatorio";
    inputCorreo.style.border = "2px solid red";
    return false;
  }else if(correo.trim !== ""){
    error.textContent = "";
    if(regex.test(correo)){
      console.log("correo valido");
      inputCorreo.style.border = "";
    }else{
      console.log("correo no valido");
      error.textContent = "*este campo no cumple los requisitos";
      inputCorreo.style.border = "2px solid red";
    }
    return true;
  }
  
}

function validarContraseña() {
 
  let contraseña = document.getElementById("contrasenna").value;
  let inputContrasenna = document.getElementById("contrasenna");
  let error = document.getElementById("errorContraseña");
  const regex = {
    mayusculaMinuscula: /[a-z]/.test(contraseña) && /[A-Z]/.test(contraseña),
    numero: /\d/.test(contraseña),
    caracterEspecial: /[^a-zA-Z\d]/.test(contraseña),
  };

  if (contraseña.trim() === "") {
    error.textContent = "*este campo es obligatorio";
    inputContrasenna.style.border = "2px solid red";
    return false;
  } else if(contraseña.trim !== ""){
    error.textContent = "";
    //verificar longitud
    if (contraseña.length < 8) {
      error.textContent = "*contraseña muy corta, mínimo 8 caracteres";
      inputContrasenna.style.border = "2px solid red";
    }

    //comprobaciones de mayusculas y minusculas
    if (regex.mayusculaMinuscula && regex.numero && regex.caracterEspecial) {
      console.log("contraseña correcta");
      inputContrasenna.style.border = ""
    } else {
      console.log("contraseña incorrecta");
      errorContraseña.textContent = "*la contraseña no cumple con los requisitos";

      inputContrasenna.style.border = "2px solid red";
    }
    return true;
  }

}

function confirmarContraseña() {
  let inputContrasenna = document.getElementById("confirm");
  let confirmacion = document.getElementById("confirm").value;
  let contraseña = document.getElementById("contrasenna").value;
  let error = document.getElementById("errorConfirmacion");

  if(confirmacion.trim()===""){
    error.textContent = "*este campo es obligatorio";
    inputContrasenna.style.border = "2px solid red";
    return false;
  }else if(confirmacion.trim !== ""){
    error.textContent = "";
    inputContrasenna.style.border = "";
    if (confirmacion === contraseña) {
      error.textContent = "";
      inputContrasenna.style.border = "";
    } else {
      error.textContent = "*las contraseñas no coinciden";
      inputContrasenna.style.border = "2px solid red";
    }
    return true;
  }

 
}
//ver contraseña
function verContraseña() {
  event.preventDefault();
  let contraseña = document.getElementById("contrasenna");
  let icono = document.getElementById("iconoContraseña");


  if (contraseña.type === "password") {
    contraseña.type = "text";
      icono.classList.remove("fa-eye");
      icono.classList.add("fa-eye-slash");
  
  } else {
    contraseña.type = "password";
    icono.classList.remove("fa-eye-slash");
    icono.classList.add("fa-eye");
   
  }
 }
 function verContraseña2() {
  event.preventDefault();
  let contraseña = document.getElementById("confirm");
  let icono = document.getElementById("iconoContraseña2");


  if (contraseña.type === "password") {
    contraseña.type = "text";
      icono.classList.remove("fa-eye");
      icono.classList.add("fa-eye-slash");
  
  } else {
    contraseña.type = "password";
    icono.classList.remove("fa-eye-slash");
    icono.classList.add("fa-eye");
   
  }
 }
 
 

 




function validarCheckbox() {
  let checkboxes = document.getElementsByName("sexo");

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function () {
      if (this.checked) {
        
        for (let j = 0; j < checkboxes.length; j++) {
          if (i !== j) {
            checkboxes[j].checked = false;
          }
        }
      }
    });
  }
}

function validarFecha(){
  let inputFecha = document.getElementById("nacimiento");
  let fechaInput = document.getElementById("nacimiento").value;
  let fecha = new Date(fechaInput);
  let error = document.getElementById("errorFecha");
  if (isNaN(fecha.getTime())) {
    error.textContent = "*fecha inválida";
    inputFecha.style.border = "2px solid red";
  } else {
    console.log("fecha correcta")
    error.textContent  = "";
    inputFecha.style.border = "";
  }
  
}
function validarDireccion(){
  let inputDireccion = document.getElementById("direccion");
  let direccion = document.getElementById("direccion").value;
  let error = document.getElementById("errorDireccion");

  let direccionRegExp = /^\s*(?:C\/|Calle)\s+[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]+\s+\d{1,4}(?:\s*(?:esc\.?\s*(?:derecha|izquierda)|\d{1,2}[A-Za-z])\s*)?(?:,\s*\d{5})?\s*$/;

  if(direccionRegExp.test(direccion)){
    error.textContent = "";
    inputDireccion.style.border = "";
    console.log("valido");

  }else{
    error.textContent = "*error dirección";
    inputDireccion.style.border = "2px solid red";
  }
}

function validarTarjeta(){
  let inputTarjeta = document.getElementById("numTarjeta");
  let tarjeta = document.getElementById("numTarjeta").value;
  let error = document.getElementById("errorTarjeta");

  const regex = {
    masterCard: /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(tarjeta),
    visa: /^3[47][0-9]{13}$/.test(tarjeta)
  };

  if(regex.masterCard ||regex.visa){
    console.log("tarjeta correcta");
    error.textContent = "";
    inputTarjeta.style.border = "";
  }
  else{
    error.textContent = "*la tarjeta es inválida";
    inputTarjeta.style.border = "2px solid red";
  }

}

function checkerNotificaciones(){
  let notificacion1 = document.getElementById("notific").checked;
  let notificacion2 = document.getElementById("recepcion").checked;

  if (notificacion1 && notificacion2) {
    console.log("Ambas notificaciones han sido seleccionadas");
  } else if (notificacion1) {
    console.log("Notificaciones seleccionadas");
  } else if (notificacion2) {
    console.log("Recepción activada");
  } else {
    console.log("Las notificaciones no han sido activadas");
  }

}