//Variables
const formulario = document.querySelector('form')
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const number = document.querySelector('[name="number" ]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="password"]');
// const btn = document.querySelector('#btn_validar');

//Funciones

const validar = (event) => {
  event.preventDefault();
  if (nombre.value == "") {
    alert("Llene ese nombre")
    nombre.focus();
  }
}

//Eventos
formulario.addEventListener('submit', validar);
