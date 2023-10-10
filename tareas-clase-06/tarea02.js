/*TAREA:Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completarel salario anual de cada integrante de la familia que
trabaje.Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor
salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).*/

//Funcion agregar tags
function agregarTags(cantidadTags) {
  const nodoBody = document.querySelector('body');
  const nuevoEspacio = document.createElement('br');
  const nuevoInput = document.createElement('input');
  nuevoInput.id = 'inputs-id-salarios';
  nuevoInput.type = 'number';
  const nuevoLabel = document.createElement('label');
  nuevoLabel.id = 'label-id-salarios';
  nuevoLabel.innerHTML = `Salario integrante ${cantidadTags}`;
  nodoBody.appendChild(nuevoEspacio);
  nodoBody.appendChild(nuevoLabel);
  nodoBody.appendChild(nuevoInput);
  return false;
}

//Funcion calcular salario mensual
function calcularSalarioMensual(salarioAnual) {
  const MESES_EN_EL_ANIO = 12;
  return salarioAnual / MESES_EN_EL_ANIO;
}

// Parte I. Agrega inputs+labels según cantidad de integrantes
const $botonCantidadIntegrantes = document.querySelector(
  '#boton-cantidad-integrantes'
);
$botonCantidadIntegrantes.onclick = function () {
  const $cantidadIntegrantesFamilia = document.querySelector(
    '#cantidad-integrantes-familia'
  ).value;
  for (let i = 0; i < $cantidadIntegrantesFamilia; i++) {
    agregarTags(i + 1); //integrantes
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
  const inputSalarios = document.querySelectorAll('#inputs-id-salarios');
  const ultimoInputSalarios = inputSalarios[inputSalarios.length - 1];
  const labelSalarios = document.querySelectorAll('#label-id-salarios');
  const ultimoLabelSalarios = labelSalarios[labelSalarios.length - 1];
  if (inputSalarios.length >= 1) {
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

// Parte III. Calculos
const $botonCalcular = document.querySelector('#boton-calcular');
$botonCalcular.onclick = function () {
  const inputSalarios = document.querySelectorAll('#inputs-id-salarios');
  let outputSalarios = [];
  let sumaSalarios = 0;
  let minimoSalarios = 0;
  let mediaSalarios = 0;
  let maximoSalarios = 0;
  let lengthNoCero = 0; //contador para que no se consideren los ceros
  for (let i = 0; i < inputSalarios.length; i++) {
    if (Number(inputSalarios[i].value) !== 0) {
      outputSalarios.push(Number(inputSalarios[i].value));
      sumaSalarios = sumaSalarios + Number(inputSalarios[i].value);
      lengthNoCero = lengthNoCero + 1;
    } else {
    }
  }

  minimoSalarios = Math.min(...outputSalarios);
  maximoSalarios = Math.max(...outputSalarios);
  mediaSalarios = sumaSalarios / lengthNoCero;

  mediaSalarioMensual = calcularSalarioMensual(sumaSalarios);
  document.querySelector('#menor-salario').value = minimoSalarios;
  document.querySelector('#promedio-salario-anual').value = mediaSalarios;
  document.querySelector('#mayor-salario').value = maximoSalarios;
  document.querySelector('#promedio-salario-mensual').value =
    mediaSalarioMensual;
  return false;
};
