//select option de los paises para escribir el select option de paises
const selectPaises = [
  "Afganistán",
  "Albania",
  "Alemania",
  "Andorra",
  "Angola",
  "Antigua y Barbuda",
  "Arabia Saudita",
  "Argelia",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Bangladés",
  "Barbados",
  "Baréin",
  "Bélgica",
  "Belice",
  "Benín",
  "Bielorrusia",
  "Birmania",
  "Bolivia",
  "Bosnia y Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunéi",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Bután",
  "Cabo Verde",
  "Camboya",
  "Camerún",
  "Canadá",
  "Catar",
  "Chad",
  "Chile",
  "China",
  "Chipre",
  "Ciudad del Vaticano",
  "Colombia",
  "Comoras",
  "Corea del Norte",
  "Corea del Sur",
  "Costa de Marfil",
  "Costa Rica",
  "Croacia",
  "Cuba",
  "Dinamarca",
  "Dominica",
  "Ecuador",
  "Egipto",
  "El Salvador",
  "Emiratos Árabes Unidos",
  "Eritrea",
  "Eslovaquia",
  "Eslovenia",
  "España",
  "Estados Unidos",
  "Estonia",
  "Etiopía",
  "Filipinas",
  "Finlandia",
  "Fiyi",
  "Francia",
  "Gabón",
  "Gambia",
  "Georgia",
  "Ghana",
  "Granada",
  "Grecia",
  "Guatemala",
  "Guyana",
  "Guinea",
  "Guinea ecuatorial",
  "Guinea-Bisáu",
  "Haití",
  "Honduras",
  "Hungría",
  "India",
  "Indonesia",
  "Irak",
  "Irán",
  "Irlanda",
  "Islandia",
  "Islas Marshall",
  "Islas Salomón",
  "Israel",
  "Italia",
  "Jamaica",
  "Japón",
  "Jordania",
  "Kazajistán",
  "Kenia",
  "Kirguistán",
  "Kiribati",
  "Kuwait",
  "Laos",
  "Lesoto",
  "Letonia",
  "Líbano",
  "Liberia",
  "Libia",
  "Liechtenstein",
  "Lituania",
  "Luxemburgo",
  "Madagascar",
  "Malasia",
  "Malaui",
  "Maldivas",
  "Malí",
  "Malta",
  "Marruecos",
  "Mauricio",
  "Mauritania",
  "México",
  "Micronesia",
  "Moldavia",
  "Mónaco",
  "Mongolia",
  "Montenegro",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Nicaragua",
  "Níger",
  "Nigeria",
  "Noruega",
  "Nueva Zelanda",
  "Omán",
  "Países Bajos",
  "Pakistán",
  "Palaos",
  "Palestina",
  "Panamá",
  "Papúa Nueva Guinea",
  "Paraguay",
  "Perú",
  "Polonia",
  "Portugal",
  "Reino Unido",
  "República Centroafricana",
  "República Checa",
  "República de Macedonia",
  "República del Congo",
  "República Democrática del Congo",
  "República Dominicana",
  "República Sudafricana",
  "Ruanda",
  "Rumanía",
  "Rusia",
  "Samoa",
  "San Cristóbal y Nieves",
  "San Marino",
  "San Vicente y las Granadinas",
  "Santa Lucía",
  "Santo Tomé y Príncipe",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leona",
  "Singapur",
  "Siria",
  "Somalia",
  "Sri Lanka",
  "Suazilandia",
  "Sudán",
  "Sudán del Sur",
  "Suecia",
  "Suiza",
  "Surinam",
  "Tailandia",
  "Tanzania",
  "Tayikistán",
  "Timor Oriental",
  "Togo",
  "Tonga",
  "Trinidad y Tobago",
  "Túnez",
  "Turkmenistán",
  "Turquía",
  "Tuvalu",
  "Ucrania",
  "Uganda",
  "Uruguay",
  "Uzbekistán",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Yibuti",
  "Zambia",
  "Zimbabue",
];
let paises = document.getElementById("pais");
let opcionPorDefecto = document.createElement("option");
opcionPorDefecto.text = "";
opcionPorDefecto.value = "";
paises.add(opcionPorDefecto);

//recorro el arreglo de paises y voy añadiendo los pasises con el bucle for
for (let i = 0; i < selectPaises.length; i++) {
  let seleccion = document.createElement("option");
  seleccion.text = selectPaises[i];
  seleccion.value = selectPaises[i];
  paises.add(seleccion);
}
//detecta si hay un pais seleccionado
function validarPais() {
  let paisSeleccionado = paises.value;
  console.log("Pais seleccionado", paisSeleccionado);
}
//valida por segunda vez los campos obligatorios para ver si falta alguno
function validarEnviar() {
  event.preventDefault();
  //cogemos el valor de los campos obligatorios
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let correo = document.getElementById("correo").value;
  let contrasenna = document.getElementById("contrasenna").value;
  let confirmarContraseña = document.getElementById("confirm").value;

  let error = document.getElementById("errorGeneral");
  errorGeneral.innerHTML = "";
  //si uno de los campos no esta relleno se llamará a su repectivo método
  if (
    nombre === "" ||
    apellidos === "" ||
    correo === "" ||
    contrasenna === "" ||
    confirmarContraseña === ""
  ) {
    validarNombre();
    validarApellidos();
    validarCorreo();
    validarContraseña();

    error.textContent = "Falta algún campo por rellenar";
    disable = false;
    return false;
  }else{
    
  // Si no hay errores, enviar el formulario
  disable = true;
  document.getElementById("formulario").submit();

  }

}

//validamos el nombre
function validarNombre() {
  //cogemos el valor del nombre y del mensaje de error
  let nombre = document.getElementById("nombre").value;
  let error = document.getElementById("errorNombre");
  let inputNombre = document.getElementById("nombre");
  //expresión regular para el nombre, no acepta números  caracteres especiales
  let regex = /^[a-zA-Z]+$/;
  //si el nombre se deja vacio no dejará enviar el formulario con el disable
  if (nombre.trim() === "") {
    inputNombre.style.border = "2px solid red"; //pintamos el borde de la caja
    disable = true; //desactivamos el boton
    return false;
  } else if (regex.test(nombre)) {
    //si es valido
    console.log("nombre valido");
    error.textContent = ""; //quitamos cualquier mensaje de error
    inputNombre.style.border = ""; //despintamos el borde
    disable = false; //habilitamos el botón
  } else {
    console.log("nombre no valido");
    error.textContent = "*este campo no cumple los requisitos"; //mensaje de error
    inputNombre.style.border = "2px solid red"; //pintamos el borde
    disable = true;
  }
  return true;
}

function validarApellidos() {
  //cogemos los valores del campo
  let apellido = document.getElementById("apellidos").value;
  let error = document.getElementById("errorApellidos");
  let inputApellidos = document.getElementById("apellidos");
  //expresion regular que acepta un espacio en blanco para poner 2 apellidos en un mismo campo
  let regex = /^[a-zA-Z]+(\s[a-zA-Z]+){1}$/;

  if (apellido.trim() === "") {
    //si el apellido es vacio pintamos el borde de rojo y desactivamos el boton
    inputApellidos.style.border = "2px solid red";
    disable = true;
    return false;
  } else if (regex.test(apellido)) {
    //si el apellido es válido se despinta el borde, se quita el mensaje de error y se habilita el boton
    console.log("apellido valido");
    error.textContent = "";
    inputApellidos.style.border = "";
    disable = false;
  } else {
    console.log("apellido no valido"); //sino mensaje de error y se pinta el borde
    error.textContent = "*este campo no cumple los requisitos";
    inputApellidos.style.border = "2px solid red";
    disable = true;
  }
  return true;
}

function validarCorreo() {
  //cogemos los valores del campo
  let inputCorreo = document.getElementById("correo");
  let correo = document.getElementById("correo").value;
  let error = document.getElementById("errorCorreo");
  //expresion regular para el correo
  let regex =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if (correo.trim() === "") {
    //si el correo es vacio pintamos el borde de rojo y desactivamos el boton
    inputCorreo.style.border = "2px solid red";
    disable = true;
    return false;
  } else if (regex.test(correo)) {
    //si el correo es válido se despinta el borde, se quita el mensaje de error y se habilita el boton
    console.log("correo valido");
    error.textContent = "";
    inputCorreo.style.border = "";
    disable = false;
  } else {
    console.log("correo no valido"); //sino mensaje de error y se pinta el borde
    error.textContent = "*este campo no cumple los requisitos";
    inputCorreo.style.border = "2px solid red";
    disable = true;
  }
  return true;
}

function validarContraseña() {
  //cogemos los valores del campo
  let contraseña = document.getElementById("contrasenna").value;
  let inputContrasenna = document.getElementById("contrasenna");
  let error = document.getElementById("errorContraseña");
  //expresiones regulares para la contraseña
  const regex = {
    mayusculaMinuscula: /[a-z]/.test(contraseña) && /[A-Z]/.test(contraseña),
    numero: /\d/.test(contraseña),
    caracterEspecial: /[^a-zA-Z\d]/.test(contraseña),
  };

  if (contraseña.trim() === "") {
    //si la contraseña es vacia se pinta el borde de rojo y se desactiva el boton
    inputContrasenna.style.border = "2px solid red";
    disable = true;
    return false;
  }
  if (contraseña.length < 8) {
    //sino tiene 8 caracteres se pinta el borde, se muestra un mensaje de error y se desactiva el boton
    error.textContent = "*contraseña muy corta, mínimo 8 caracteres";
    inputContrasenna.style.border = "2px solid red";
    disable = true;
  }

  //comprobaciones de mayusculas y minusculas
  if (regex.mayusculaMinuscula && regex.numero && regex.caracterEspecial) {
    //comparamos con las expresiones regulares
    console.log("contraseña correcta"); //si es correcta se despinta el borde, se quita el mensaje de error y se activa el boton
    error.textContent = "";
    inputContrasenna.style.border = "";
    disable = false;
  } else {
    //sino, se  pinta el borde, se saca el mensaje y se desactiva el botón
    console.log("contraseña incorrecta");
    errorContraseña.textContent = "*la contraseña no cumple con los requisitos";
    inputContrasenna.style.border = "2px solid red";
    disable = true;
  }
  return true;
}

function confirmarContraseña() {
  //cogemos los valores del campo
  let inputContrasenna = document.getElementById("confirm");
  let confirmacion = document.getElementById("confirm").value;
  let contraseña = document.getElementById("contrasenna").value;
  let error = document.getElementById("errorConfirmacion");

  if (confirmacion.trim() === "") {
    //si esta vacio se pinta de rojo y se desactiva el boton
    inputContrasenna.style.border = "2px solid red";
    disable = true;
    return false;
  } else if (confirmacion === contraseña) {
    //si las contraseñas coinciden se despinta el campo, se quita el mensaje y se desativa el boton
    error.textContent = "";
    inputContrasenna.style.border = "";
    disable = false;
  } else {
    //sino se desactiva el boton, se muestra el mensaje y se pinta el borde
    error.textContent = "*las contraseñas no coinciden";
    inputContrasenna.style.border = "2px solid red";
    disable = true;
  }
  return true;
}

//ver contraseña
function verContraseña() {
  event.preventDefault();
  //cogemos lo valores
  let contraseña = document.getElementById("contrasenna");
  let icono = document.getElementById("iconoContraseña");

  //quitamos ojo abierto y ponemos ojo tachado
  if (contraseña.type === "password") {
    contraseña.type = "text";
    icono.classList.remove("fa-eye");
    icono.classList.add("fa-eye-slash");
  } else {
    //quitamos ojo tachado y ponemos ojo abierto
    contraseña.type = "password";
    icono.classList.remove("fa-eye-slash");
    icono.classList.add("fa-eye");
  }
}
function verContraseña2() {
  event.preventDefault();
  //cogemos lo valores
  let contraseña = document.getElementById("confirm");
  let icono = document.getElementById("iconoContraseña2");

  //quitamos ojo abierto y ponemos ojo tachado
  if (contraseña.type === "password") {
    contraseña.type = "text";
    icono.classList.remove("fa-eye");
    icono.classList.add("fa-eye-slash");
  } else {
    //quitamos ojo tachado y ponemos ojo abierto
    contraseña.type = "password";
    icono.classList.remove("fa-eye-slash");
    icono.classList.add("fa-eye");
  }
}

function validarCheckbox() {
  //no deja elegir mas de un checkbox
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

function validarFecha() {
  //cogemos los valores
  let inputFecha = document.getElementById("nacimiento");
  let fechaInput = document.getElementById("nacimiento").value;
  let fecha = new Date(fechaInput);
  let error = document.getElementById("errorFecha");

  if (isNaN(fecha.getTime()) != "") {
    //para fecha invalida pintamos el borde de rojo y ponemos el mensaje de error
    error.textContent = "*fecha inválida";
    inputFecha.style.border = "2px solid red";
  } else {
    //sino limpiamos los campos
    console.log("fecha correcta");
    error.textContent = "";
    inputFecha.style.border = "";
  }
}
function validarDireccion() {
  //cogemos los valores
  let inputDireccion = document.getElementById("direccion");
  let direccion = document.getElementById("direccion").value;
  let error = document.getElementById("errorDireccion");
  //expresion regular para la direccion
  let direccionRegExp =
    /^\s*(?:C\/|Calle)\s+[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]+\s+\d{1,4}(?:\s*(?:esc\.?\s*(?:derecha|izquierda)|\d{1,2}[A-Za-z])\s*)?(?:,\s*\d{5})?\s*$/;

  if (direccionRegExp.test(direccion)) {
    //si es valida limpiamos los campos
    error.textContent = "";
    inputDireccion.style.border = "";
    console.log("valido");
  } else {
    //sino se pinta el campo y se muestra el mensaje
    error.textContent = "*error dirección";
    inputDireccion.style.border = "2px solid red";
  }
}

function validarDNI() {
  // Obtener el elemento de entrada del DNI y el elemento de mensaje de error
  let dniInput = document.getElementById("DNI");
  let errorDniMessage = document.getElementById("errorDni");

  // Obtener el valor del DNI del elemento de entrada
  let dni = dniInput.value;
  let numero, letra;
  let expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

  // Convertir el DNI a mayúsculas
  dni = dni.toUpperCase();

  // Comprobar si el formato del DNI es válido usando una expresión regular
  if (expresion_regular_dni.test(dni) === true) {
    // Extraer el número y la letra del DNI
    numero = dni.substr(0, dni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    letra = dni.substr(dni.length - 1, 1);

    // Calcular el resto de dividir el número entre 23 y obtener la letra correspondiente
    numero = numero % 23;
    let letras_posibles = "TRWAGMYFPDXBNJZSQVHLCKET";
    let letra_calculada = letras_posibles.charAt(numero);

    // Comparar la letra calculada con la letra del DNI
    if (letra_calculada !== letra) {
      // Si no coinciden, mostrar un mensaje de error
      errorDniMessage.textContent =
        "DNI incorrecto, la letra no se corresponde.";
      dniInput.style.border = "2px solid red";
      return false;
    } else {
      // Si coinciden, limpiar el mensaje de error y el borde rojo
      errorDniMessage.textContent = "";
      dniInput.style.border = "";
      return true;
    }
  } else {
    // Si el formato del DNI no es válido, mostrar un mensaje de error
    errorDniMessage.textContent = "DNI incorrecto, formato no válido.";
    dniInput.style.border = "2px solid red";
    return false;
  }
}

function checkerNotificaciones() {
  // Obtener el estado de las casillas de verificación
  let notificacion1 = document.getElementById("notific").checked;
  let notificacion2 = document.getElementById("recepcion").checked;

  // Verificar las combinaciones de selecciones
  if (notificacion1 && notificacion2) {
    // Ambas notificaciones han sido seleccionadas
    console.log("Ambas notificaciones han sido seleccionadas");
  } else if (notificacion1) {
    // Solo la primera notificación ha sido seleccionada
    console.log("Notificaciones seleccionadas");
  } else if (notificacion2) {
    // Solo la segunda notificación ha sido seleccionada
    console.log("Recepción activada");
  } else {
    // Ninguna notificación ha sido seleccionada
    console.log("Las notificaciones no han sido activadas");
  }
}
