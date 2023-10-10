/*TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).*/

function agregarTags(cantidadTags) {
  const nodoBody = document.querySelector('body');
  const nuevoEspacio = document.createElement('br');
  const nuevoInput = document.createElement('input');
  nuevoInput.id = 'inputs-id-edades';
  nuevoInput.type = 'number';
  const nuevoLabel = document.createElement('label');
  nuevoLabel.innerHTML = `Edad integrante ${cantidadTags}`;
  nodoBody.appendChild(nuevoEspacio);
  nodoBody.appendChild(nuevoLabel);
  nodoBody.appendChild(nuevoInput);
  return false;
}
// Parte I. Agrega inputs+labels segun cantidad de integrantes
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

// Parte II. Agrega datos de los integrantes y calcula medidas
const $botonCalcular = document.querySelector('#boton-calcular');
$botonCalcular.onclick = function () {
  const edadesInput = document.querySelectorAll('#inputs-id-edades');
  let edadesOutput = [];
  let sumaEdad = 0;
  let minimoEdad = 0;
  let mediaEdad = 0;
  let maximoEdad = 0;
  for (let i = 0; i < edadesInput.length; i++) {
    edadesOutput.push(Number(edadesInput[i].value));
    sumaEdad = sumaEdad + Number(edadesInput[i].value);
  }
  minimoEdad = Math.min(...edadesOutput);
  maximoEdad = Math.max(...edadesOutput);
  mediaEdad = sumaEdad / edadesInput.length;
  document.querySelector('#menor-edad').value = minimoEdad;
  document.querySelector('#promedio-edad').value = mediaEdad;
  document.querySelector('#mayor-edad').value = maximoEdad;
  return false;
};
//Parte III. Boton para limpiar datos
const $botonLimpiar = document.querySelector('#boton-limpiar');
$botonLimpiar.onclick = function () {
  document.querySelector('myform').reset();
  return false;
};
