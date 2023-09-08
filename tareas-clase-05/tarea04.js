//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
//Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
const $botonLi = document.querySelector('#boton-calcular-li');

function agregarTags(cantidadTags) {
  for (let i = 0; i < cantidadTags; i++) {
    const ol = document.querySelector('ol');
    const nuevoElementoLi = document.createElement('li');
    const nuevoElementoInput = document.createElement('input');
    nuevoElementoInput.className = 'numero-i';
    nuevoElementoInput.type = 'number';
    nuevoElementoLi.appendChild(nuevoElementoInput);
    ol.appendChild(nuevoElementoLi);
  }
  return false;
}

function sumar(numeros) {
  let sumaNumeros = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaNumeros = sumaNumeros + numeros[i];
  }
  return sumaNumeros;
}

function getMostFrequentNumber(numbers) {
  return numbers
    .sort(
      (a, b) =>
        numbers.filter((v) => v === a).length -
        numbers.filter((v) => v === b).length
    )
    .pop();
}

$botonLi.onclick = function () {
  cantidadNumeros = document.querySelector('#numeros-lista').value;
  agregarTags(cantidadNumeros);
  return false;
};

const $botonCalcular = document.querySelector('#boton-calcular-medidas');

$botonCalcular.onclick = function () {
  let numeros = [];
  const numerosLista = document.getElementsByClassName('numero-i');
  for (let i = 0; i < numerosLista.length; i++) {
    numeros.push(Number(numerosLista[i].value));
  }

  let maximoNumeros = 0;
  let minimoNumeros = 0;
  let mediaNumeros = 0;
  let modaNumeros = 0;

  minimoNumeros = Math.min(...numeros);
  mediaNumeros = sumar(numeros) / numeros.length;
  modaNumeros = getMostFrequentNumber(numeros);
  maximoNumeros = Math.max(...numeros);

  document.querySelector('#minimo').value = `minimo ${minimoNumeros}`;
  document.querySelector('#media').value = `media ${mediaNumeros}`;
  document.querySelector('#moda').value = `moda ${modaNumeros}`;
  document.querySelector('#maximo').value = `maximo ${maximoNumeros}`;

  return false;
};
