
import { validacion } from "./module.js";

//Variables
const formulario = document.querySelector('form')
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const number = document.querySelector('[name="number" ]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="password"]');
const btn = document.querySelector('#btn_validar');
const politica = document.querySelector('#politica')


//Condiciones

const letras = /^[A-za-z\s]+$/;
const soloNumeros = /\d/;
const userCondi = /^[a-zA-Z0-9_-]{3,17}$/;
const contraSegura = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

//Funciones

const validar = (event) => {
  event.preventDefault();

  if (nombre.value == "") {
    if (nombre.nextElementSibling) {
      nombre.nextElementSibling.remove();
    }
    nombre.classList.add('borde_rojo');
    const mensaje = document.createElement('span');
    mensaje.textContent = "Este campo debe ser obligatorio";
    nombre.insertAdjacentElement('afterend', mensaje)
    nombre.focus();

  }

  if (apellido.value == "") {
    if (apellido.nextElementSibling) {
      apellido.nextElementSibling.remove();
    }
    apellido.classList.add('borde_rojo');
    const mensaje = document.createElement('span');
    mensaje.textContent = "Este campo debe ser obligatorio";
    apellido.insertAdjacentElement('afterend', mensaje)
    apellido.focus();
  }

  if (telefono.value == "") {
    if (telefono.nextElementSibling) {
      telefono.nextElementSibling.remove();
    }
    telefono.classList.add('borde_rojo');
    const mensaje = document.createElement('span');
    mensaje.textContent = "Este campo debe ser obligatorio";
    telefono.insertAdjacentElement('afterend', mensaje)
    telefono.focus();
  }

  if (number.value == "") {
    if (number.nextElementSibling) {
      number.nextElementSibling.remove();
    }
    number.classList.add('borde_rojo');
    const mensaje = document.createElement('span');
    mensaje.textContent = "Este campo debe ser obligatorio";
    number.insertAdjacentElement('afterend', mensaje);
    number.focus();
  }
  if (usuario.value == "") {
    if (usuario.nextElementSibling) {
      usuario.nextElementSibling.remove();
    }
    usuario.classList.add('borde_rojo');
    const mensaje = document.createElement('span');
    mensaje.textContent = "Este campo debe ser obligatorio";
    usuario.insertAdjacentElement('afterend', mensaje);
    usuario.focus();
  }
  if (contrasena.value == "") {
    if (contrasena.nextElementSibling) {
      contrasena.nextElementSibling.remove();
    }
    contrasena.classList.add('borde_rojo');
    const mensaje = document.createElement('span');
    mensaje.textContent = "Este campo debe ser obligatorio";
    contrasena.insertAdjacentElement('afterend', mensaje)
    contrasena.focus();
  }
}

const limpiar = (event) => {
  if (event.target.value !== "") {
    event.target.classList.remove('borde_rojo');
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    }
  }
}




//Eventos
// addEventListener('keydown', (event) => {
//   if (nombre.value.length > 5) {
//     nombre.setAttribute('disabled', '')
//   }
// })

// addEventListener('change', (event) => {
//   if (!politica.checked) {
//     btn.setAttribute('disabled', '');
//   } else {
//     btn.removeAttribute('disabled');
//   }
// })




formulario.addEventListener('submit', validacion);
// nombre.addEventListener('blur', limpiar);
// apellido.addEventListener('blur', limpiar);


