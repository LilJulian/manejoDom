//Variables
const formulario = document.querySelector('form')
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const number = document.querySelector('[name="number" ]');
const usuario = document.querySelector('[name="usuario"]');
const contrasena = document.querySelector('[name="password"]');
// const btn = document.querySelector('#btn_validar');

//Condiciones

const letras = /^[A-za-z\s]+$/;
const soloNumeros = /\d/;
const userCondi = /^[a-zA-Z0-9_-]{3,17}$/;
const contraSegura = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

//Funciones

const validar = (event) => {
  event.preventDefault();
  if (!letras.test(nombre.value)) {
    if (nombre.value == "") {
      alert("Llene ese nombre");
    }else{
      alert("Solo debe contener letras");
    }
  nombre.focus();
  }
  if (!letras.test(apellido.value)) {
      if (apellido.value == "") {
        alert("Llene ese apellido");
      }else{
        alert("Solo debe contener letras");
      }
      apellido.focus();
  }
  if (!soloNumeros.test(telefono.value)) {
    if (telefono.value == "") {
      alert("Llene ese telefono");
    }else{
      alert("Solo debe contener numeros");
    }
    telefono.focus();    
  }
  if (!soloNumeros.test(number.value)) {
    if (number.value == "") {
      alert("Llene ese numero");
    }else{
      alert("Solo debe contener numeros");
    }
    number.focus();    
  }
  if (!userCondi.test(usuario.value)) {
    if (usuario.value == "") {
      alert("Llene ese usuario");
    }else{
      alert("Solo letras, números, guiones bajos o medios (3-17 caracteres)");
    }
  usuario.focus();
  }
  if (!contraSegura.test(contrasena.value)) {
    if (contrasena.value == "") {
      alert("Llene esa contraseña");
    }else{
      alert("Debe incluir mayúsculas, números y símbolos (!@#$%^&*)");
    }
  contrasena.focus();
  }
}

//Eventos
formulario.addEventListener('submit', validar);
