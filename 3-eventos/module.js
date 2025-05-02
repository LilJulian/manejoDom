export const validacion = (e) => {
  e.preventDefault();

  const campos = [...e.target].filter((elemento) => {
    if (elemento.hasAttribute('required')) {
      return elemento;
    }
  })

  const radios = [...campos].filter((elemento) => {
    return elemento.type === 'radio';
  })

  const checkbox = [...campos].filter((elemento) => {
    return elemento.type === 'checkbox';
  });
  
  const checkCampo = checkbox.filter((checkeado) => checkeado.checked)
  
  if (checkCampo.length === 0) {
    datos[checkbox.label] = "";
  } else {
    datos['lenguajes[]'] = checkCampo.map((checkCampo) => checkCampo.value);
  }

  const campoRadio = radios.find((radio) => radio.checked) || []

  let datos = {};
  let formulario = true;
  campos.forEach(element => {
    if (element.nextElementSibling) {
      element.nextElementSibling.remove();
      element.classList.remove('borde_rojo');
    }


    switch (element.tagName) {
      case 'INPUT':
        if (element.value == "") {
          formulario = false;
          element.classList.add('borde_rojo');
          const span = document.createElement('span');
          span.textContent = "Este campo debe ser obligatorio";
          element.insertAdjacentElement('afterend', span);

        }

        // if (element.type == 'radio') {
        //   if (element.checked == 'false') {
        //     formulario = false;
        //     element.classList.add('borde_rojo');
        //     const span = document.createElement('span');
        //     span.textContent = "Este campo debe ser obligatorio";
        //     element.insertAdjacentElement('afterend', span);
        //   }
        // }

        break;
      case 'SELECT':
        if (element.value == "Seleccionar") {
          formulario = false;
          element.classList.add('borde_rojo');
          const span = document.createElement('span');
          span.textContent = "Este campo debe ser obligatorio";
          element.insertAdjacentElement('afterend', span);
        }
        break;
    }
    datos[element.name] = element.name == 'ciudades' ? element.options
    [element.selectedIndex].text : element.value;
    if (campoRadio.length === 0) {
      datos[radios[0].name] = "";
    } else {
      datos[campoRadio.name] = campoRadio.value;
    }
  });
  // if (formulario) {
  //   console.log(datos);
  // }
  console.log(datos);
}