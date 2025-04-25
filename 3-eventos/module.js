export const validacion = (e) => {
  e.preventDefault();
  const campos = [...e.target].filter((elemento) => {
    if (elemento.hasAttribute('required')) {
      return elemento;
    }
  })

  campos.forEach(element => {
    console.log(element);
    if (element.nextElementSibling) {
      element.nextElementSibling.remove();
    }
    switch (element.tagName) {
      case 'INPUT':
        if (element.value == "") {
          element.classList.add('borde_rojo');
          const span = document.createElement('span');
          span.textContent = "Este campo debe ser obligatorio";
          element.insertAdjacentElement('afterend', span);
        }

        break;
      // case

      default:
        break;
    }

    console.log(element.tagName);


  });
}