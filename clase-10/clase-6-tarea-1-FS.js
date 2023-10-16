/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/

const $form = document.querySelector('#calculador-edades');

document.querySelector('#siguiente-paso').onclick = function (event) {
  const identificadorError = 'cantidadIntegrantes';
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
  const cantidadIntegrantes = Number($cantidadIntegrantes.value);
  const errorCantidadIntegrantes =
    validarCantidadIntegrantes(cantidadIntegrantes);
  const errores = {
    'cantidad-integrantes': errorCantidadIntegrantes //asi coincide con el name de html
  };
  const mensajesErrores = document.querySelector('ul');
  mensajesErrores.innerHTML = '';

  manejarErrores(errores, identificadorError);
  borrarIntegrantesAnteriores();

  if (!errorCantidadIntegrantes) {
    crearIntegrantes(cantidadIntegrantes);
  }

  event.preventDefault();
};

document.querySelector('#calcular').onclick = function (event) {
  const identificadorError = 'calcularEdades';
  const numeros = obtenerEdadesIntegrantes();
  const errorEdad = guardarErrores(numeros);
  const cantidadErrores = contarError(numeros);

  const errores = {
    integrante: errorEdad //asi coincide con el name de html
  };

  const mensajesErrores = document.querySelector('ul');
  mensajesErrores.innerHTML = '';

  if (cantidadErrores === 0) {
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();
  } else {
    manejarErrores(errores, identificadorError);
  }

  event.preventDefault();
};

function contarError(numeros) {
  let contadorErorr = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (validarEdad(numeros[i]) !== '') {
      contadorErorr++;
    } else {
      ('');
    }
  }

  return contadorErorr;
}

function guardarErrores(numeros) {
  let errorEdad = [];
  for (let i = 0; i < numeros.length; i++) {
    errorEdad.push(validarEdad(numeros[i]));
  }
  return errorEdad;
}

function manejarErrores(errores, identificadorError) {
  const keys = Object.keys(errores);

  keys.forEach(function (key) {
    const error = errores[key];

    if (identificadorError === 'cantidadIntegrantes') {
      agregarError(error, key);
    } else {
      agregarErrores(error, key);
    }
  });
}

function agregarErrores(error, key) {
  const $errores = document.querySelector('#errores');
  for (let i = 0; i < error.length; i++) {
    if (!error[i]) {
      $form[key][i].className = '';
    } else {
      $form[key][i].className = 'error';
      const $error = document.createElement('li');
      $error.innerText = error[i];
      $errores.appendChild($error);
    }
  }
}

function agregarError(error, key) {
  const $errores = document.querySelector('#errores');
  if (!error) {
    //no hay error
    $form[key].className = '';
  } else {
    // error
    $form[key].className = 'error';
    const $error = document.createElement('li');
    $error.innerText = error;
    $errores.appendChild($error);
  }
}

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'integrante';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);

  const $input = document.createElement('input');
  $input.type = 'number';
  $input.name = 'integrante';
  $input.class = 'form-control form-control-lg';

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
}

function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
}

function ocultarBotonCalculo() {
  document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo() {
  document.querySelector('#calcular').className = '';
}

function ocultarResultados() {
  document.querySelector('#analisis').className = 'oculto';
}

function mostrarResultados() {
  document.querySelector('#analisis').className = '';
}

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante input');
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}

function validarCantidadIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes < 0) {
    return 'En este campo debe ingresar un número positivo';
  }

  if (!/^[0-9]{1,2}$/.test(cantidadIntegrantes)) {
    return 'En este campo debe ingresar un numero entero entre 1 y 2 digitos';
  }
  return '';
}

function validarEdad(edad) {
  if (edad < 0) {
    return 'En este campo debe ingresar un número positivo';
  }

  if (!/^[0-9]{1,3}$/.test(edad)) {
    return 'En este campo debe ingresar un numero entero entre 1 y 3 digitos';
  }
  return '';
}
