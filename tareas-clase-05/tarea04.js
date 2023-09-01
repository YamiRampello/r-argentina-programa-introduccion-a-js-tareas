//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
//Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
const $botonLi = document.querySelector('#boton-calcular-li');

$botonLi.onclick = function () {
  cantidadNumeros = document.querySelector('#numeros_lista').value;
  for (i = 0; i < cantidadNumeros; i++) {
    const c_ol = document.querySelector('ol');
    const nuevoElementoLi = document.createElement('li');
    const nuevoElementoInput = document.createElement('input');
    nuevoElementoInput.className = 'numero_i';
    nuevoElementoInput.type = 'number';
    nuevoElementoLi.appendChild(nuevoElementoInput);
    c_ol.appendChild(nuevoElementoLi);
  }
  return false;
};

const $botonCalcular = document.querySelector('#boton-calcular-medidas');

$botonCalcular.onclick = function () {
  let guardaNumeros = [];
  const numerosLista = document.getElementsByClassName('numero_i');
  for (i = 0; i < numerosLista.length; i++) {
    guardaNumeros.push(Number(numerosLista[i].value));
  }

  let sumaLista = 0;
  let maximoLista = 0;
  let minimoLista = 0;
  let mediaLista = 0;
  let modaLista = 0;

  for (i = 0; i < guardaNumeros.length; i++) {
    sumaLista = sumaLista + guardaNumeros[i];
  }

  function mode(arr) {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  }

  minimoLista = Math.min(...guardaNumeros);
  mediaLista = sumaLista / guardaNumeros.length;
  modaLista = mode(guardaNumeros);
  maximoLista = Math.max(...guardaNumeros);

  document.querySelector('#minimo').value = `minimo ${minimoLista}`;
  document.querySelector('#media').value = `media ${mediaLista}`;
  document.querySelector('#moda').value = `moda ${modaLista}`;
  document.querySelector('#maximo').value = `maximo ${maximoLista}`;

  return false;
};
