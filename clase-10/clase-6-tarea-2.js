/*TAREA:Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completarel salario anual de cada integrante de la familia que
trabaje.Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor
salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).*/

const $form = document.querySelector('#integrantes-salarios');

function agregarTags(cantidadTags) {
  const $div = document.createElement('div');
  $div.className = 'salarios';
  const $nuevoLabel = document.createElement('label');
  $nuevoLabel.id = 'label-id-salarios';
  $nuevoLabel.textContent = `Salario integrante ${cantidadTags}`;

  const $nuevoInput = document.createElement('input');
  $nuevoInput.id = 'inputs-id-salarios';
  $nuevoInput.name = 'salario';
  $nuevoInput.type = 'number';

  $div.appendChild($nuevoLabel);
  $div.appendChild($nuevoInput);

  $form.appendChild($div);
  return false;
}

function calcularSalarioMensual(salarioAnual) {
  const MESES_EN_EL_ANIO = 12;
  return salarioAnual / MESES_EN_EL_ANIO;
}

// Parte I. Agrega inputs+labels según cantidad de integrantes
const $botonCantidadIntegrantes = document.querySelector(
  '#boton-cantidad-integrantes'
);

$botonCantidadIntegrantes.onclick = function () {
  const identificaError = 'integrantes';
  const $cantidadIntegrantesFamilia = document.querySelector(
    '#cantidad-integrantes-familia'
  ).value;
  const errorCantidadIntegrantes = validarCantidadIntegrantes(
    $cantidadIntegrantesFamilia
  );
  const errores = {
    'cantidad-integrantes-familia': errorCantidadIntegrantes //asi coincide con el name de html
  };
  const mensajesErrores = document.querySelector('ul');

  if (errorCantidadIntegrantes.length === 0) {
    mensajesErrores.innerHTML = '';
    for (let i = 0; i < $cantidadIntegrantesFamilia; i++) {
      agregarTags(i + 1);
    }
  } else {
    mensajesErrores.innerHTML = '';
    manejarErrores(errores, identificaError);
  }
  return false;
};

// Parte II. Agrega inputs+labels individuales

//Agregar
const $botonAgregar = document.querySelector('#boton-agregar');

$botonAgregar.onclick = function () {
  agregarTags('#');
  return false;
};

// Quitar
const $botonQuitar = document.querySelector('#boton-quitar');

$botonQuitar.onclick = function () {
  const $inputSalarios = document.querySelectorAll('#inputs-id-salarios');
  const ultimoInputSalarios = $inputSalarios[$inputSalarios.length - 1];
  const $labelSalarios = document.querySelectorAll('#label-id-salarios');
  const ultimoLabelSalarios = $labelSalarios[$labelSalarios.length - 1];

  if ($inputSalarios.length >= 1) {
    ultimoInputSalarios.parentNode.removeChild(ultimoInputSalarios);
    ultimoLabelSalarios.parentNode.removeChild(ultimoLabelSalarios);
  } else {
    const nodoBody = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(
      'No hay integrante para sacar'
    );
    nuevoParrafo.appendChild(textoParrafo);
    nodoBody.appendChild(nuevoParrafo);
  }
  return false;
};

function contarError(numeros) {
  let contadorErorr = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (validarSalario(numeros[i]) !== '') {
      contadorErorr++;
    } else {
      ('');
    }
  }

  return contadorErorr;
}

// Parte III. Calculos
const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function () {
  const $inputSalarios = document.querySelectorAll('#inputs-id-salarios');
  const identificaError = 'salario';

  let outputSalarios = [];
  let sumaSalarios = 0;
  let minimoSalarios = 0;
  let mediaSalarios = 0;
  let mediaSalarioMensual = 0;
  let maximoSalarios = 0;
  let lengthNoCero = 0;
  let errorSalario = [];

  for (let i = 0; i < $inputSalarios.length; i++) {
    outputSalarios.push(Number($inputSalarios[i].value));
  }

  for (let i = 0; i < outputSalarios.length; i++) {
    errorSalario.push(validarSalario(outputSalarios[i]));
    sumaSalarios = sumaSalarios + Number(outputSalarios[i]);
    lengthNoCero = lengthNoCero + 1;
  }

  const errores = {
    salario: errorSalario
  };

  const cantidadErrores = contarError(outputSalarios);
  const mensajesErrores = document.querySelector('ul');
  mensajesErrores.innerHTML = '';
  manejarErrores(errores, identificaError);

  if (cantidadErrores === 0) {
    minimoSalarios = Math.min(...outputSalarios);
    maximoSalarios = Math.max(...outputSalarios);
    mediaSalarios = sumaSalarios / lengthNoCero;

    mediaSalarioMensual = calcularSalarioMensual(sumaSalarios);
    document.querySelector('#menor-salario').value = minimoSalarios;
    document.querySelector('#promedio-salario-anual').value = mediaSalarios;
    document.querySelector('#mayor-salario').value = maximoSalarios;
    document.querySelector('#promedio-salario-mensual').value =
      mediaSalarioMensual;
  } else {
    ('');
  }

  return false;
};

function validarCantidadIntegrantes(cantidadIntegrantes) {
  if (cantidadIntegrantes < 0) {
    return 'En este campo debe ingresar un número positivo';
  }

  if (!/^[0-9]{1,2}$/.test(cantidadIntegrantes)) {
    return 'En este campo debe ingresar un numero entero entre 1 y 2 digitos';
  }
  return '';
}

function validarSalario(salario) {
  if (salario < 0) {
    return 'En este campo debe ingresar un número positivo';
  }

  if (!/^[0-9\.,]/.test(salario)) {
    return 'En este campo debe ingresar un numero (puede agregar decimales)';
  }
  return '';
}

function manejarErrores(errores, identificaError) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector('#errores');

  keys.forEach(function (key) {
    const error = errores[key];

    if (identificaError === 'integrantes') {
      if (error === '') {
        $form[key].className = '';
      } else {
        $form[key].className = 'error';

        const $error = document.createElement('li');
        $error.innerText = error;
        $errores.appendChild($error);
      }
    } else {
      for (let i = 0; i < error.length; i++) {
        if (error[i] === '') {
          $form[key][i].className = '';
        } else {
          $form[key][i].className = 'error';
          const $error = document.createElement('li');
          $error.innerText = error[i];
          $errores.appendChild($error);
        }
      }
    }
  });
}

function resetear() {
  borrarIntegrantesAnteriores();
}

function borrarIntegrantesAnteriores() {
  const $inputSalarios = document.querySelectorAll('.salarios');
  for (let i = 0; i < $inputSalarios.length; i++) {
    $inputSalarios[i].remove();
  }
}

document.querySelector('#resetear').onclick = resetear;
