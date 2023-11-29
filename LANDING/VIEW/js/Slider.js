// Array que guarda las ubicaciones de las imágenes para su acceso
let ArrayLocalizacionesImagenes = [
  "VIEW/image/Hotel1.jpg",
  "VIEW/image/Hotel2.jpg",
  "VIEW/image/Hotel3.jpg",
];

// Obtiene el elemento de la imagen del documento
let imagen = document.getElementById("Foto");

function CambiarImagenBotonUno() {
  CambiarImagenConAnimacion(ArrayLocalizacionesImagenes[0]); 
  // Establece un tiempo de espera antes de cambiar la imagen
  setTimeout(function () {
    imagen.src = ArrayLocalizacionesImagenes[0];
  }, 500); // Tiempo de la animación
}

function CambiarImagenBotonDos() {
  CambiarImagenConAnimacion(ArrayLocalizacionesImagenes[1]);
  // Establece un tiempo de espera antes de cambiar la imagen
  setTimeout(function () {
    imagen.src = ArrayLocalizacionesImagenes[1];
  }, 500); // Tiempo de la animación
}

function CambiarImagenBotonTres() {
  CambiarImagenConAnimacion(ArrayLocalizacionesImagenes[2]);
  // Establece un tiempo de espera antes de cambiar la imagen
  setTimeout(function () {
    imagen.src = ArrayLocalizacionesImagenes[2];
  }, 500); // Tiempo de la animación
}

function CambiarImagenConAnimacion(nuevaRuta) {
  // Añade la clase de animación al elemento de la imagen
  imagen.classList.add("fadeOut");
  // Establece un tiempo de espera antes de cambiar la imagen y quitar la clase de animación
  setTimeout(function () {
    imagen.src = nuevaRuta;
    imagen.classList.remove("fadeOut");
  }, 500); // Ajusta el tiempo según la duración de tu animación en milisegundos
}

// Índice para la imagen actual
let currentIndex = 0;


function cambiarColoresBotones(currentIndex) {
  let boton1 = document.getElementById('boton1');
  let boton2 = document.getElementById('boton2');
  let boton3 = document.getElementById('boton3');

  switch (currentIndex) {
    case 2:
      boton1.style.backgroundColor = "#9fbef0";
      boton2.style.backgroundColor = "#fff";
      boton3.style.backgroundColor = "#fff";
      break;
    case 0:
      boton1.style.backgroundColor = "#fff";
      boton2.style.backgroundColor = "#9fbef0";
      boton3.style.backgroundColor = "#fff";
      break;
    case 1:
      boton1.style.backgroundColor = "#fff";
      boton2.style.backgroundColor = "#fff";
      boton3.style.backgroundColor = "#9fbef0";
      break;
    default:
      break;
  }
}

// Función para cambiar la imagen automáticamente cada 3 segundos
function cambiarImagenAutomaticamente() {
  // Llama a la función para cambiar la imagen con animación
  CambiarImagenConAnimacion(ArrayLocalizacionesImagenes[currentIndex]);
  // Establece un tiempo de espera antes de cambiar la imagen
  setTimeout(function () {
    imagen.src = ArrayLocalizacionesImagenes[currentIndex];
  }, 500);  

  cambiarColoresBotones(currentIndex)
  
  
  // Incrementa el índice para la siguiente imagen
  currentIndex = (currentIndex + 1) % ArrayLocalizacionesImagenes.length;
}

setInterval(cambiarImagenAutomaticamente, 5000);

/* VOLVER AL INICIO DE LA PAGINA */

// Función para volver al inicio de la página
function alInicio() {
  // Desplaza la ventana al inicio de la página
  window.scrollTo(0, 0)

  // Obtiene el elemento del botón del documento
  let boton  = document.getElementById('Envio');

  // Cambia el color de fondo del botón
  boton.style.backgroundColor = '#875dd1'
}

/* VALIDACIONES CAMPOS MINIFORMULARIO */

// Función para validar el nombre
function validarNombre() {
  let nombre = document.getElementById("nombre").value;
  let error = document.getElementById("errorNombre");
  let inputNombre = document.getElementById("nombre");
  let regex = /^[a-zA-Z]+$/;

  // Comprueba si el nombre está vacío
  if (nombre.trim() === "") {
    // Cambia el borde del campo nombre a rojo y muestra el mensaje de error
    inputNombre.style.border = "2px solid red";
    error.textContent = "Este campo debe estar relleno";
    return false;
  } else if (regex.test(nombre)) {
      // Si el nombre es válido, borra el mensaje de error y restablece el borde del campo nombre
      console.log("nombre valido");
      error.textContent = "";
      inputNombre.style.border = "";
    } else {
      // Si el nombre no es válido, muestra el mensaje de error y cambia el borde del campo nombre a rojo
      console.log("nombre no valido");
      error.textContent = "*este campo no cumple los requisitos";
      inputNombre.style.border = "2px solid red";
    }
    return true;
}

// Función para validar el correo
function validarCorreo(){
  // Obtiene el elemento del campo correo del documento
  let inputCorreo = document.getElementById("correo");
  let correo = document.getElementById("correo").value;
  let error = document.getElementById("errorCorreo");
  let regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Comprueba si el correo está vacío
  if(correo.trim()===""){
    // Cambia el borde del campo correo a rojo y muestra el mensaje de error
    inputCorreo.style.border = "2px solid red";
    error.textContent = "Este campo debe estar relleno";
    return false;
  }else if(regex.test(correo)){
      // Si el correo es válido, borra el mensaje de error y restablece el borde del campo correo
      console.log("correo valido");
      error.textContent = "";
      inputCorreo.style.border ="";
    }else{
      // Si el correo no es válido, muestra el mensaje de error y cambia el borde del campo correo a rojo
      console.log("correo no valido");
      error.textContent = "*este campo no cumple los requisitos";
      inputCorreo.style.border = "2px solid red";
    }
    return true;
}
