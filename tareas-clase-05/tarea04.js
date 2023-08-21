//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."



const $botonCalculaMedia = document.querySelector('#boton-calcular-media-numeros')


$botonCalculaMedia.onclick = function(){
    let guardaNumeros = []; //se declara el array
    let sumaNumeros = 0;
    let mediaNumeros = 0;
    let maximoNumeros = 0;
    let minimoNumeros = 0;
    let modaNumeros = 0;

    const numerosLi = document.querySelectorAll('li')

for (let i = 0; i < numerosLi.length ; i++){
    guardaNumeros.push(Number(numerosLi[i].textContent))
    //console.log(guardaNumeros)
}
//console.log(guardaNumeros)


for (let i = 0; i < guardaNumeros.length; i++){
    sumaNumeros = sumaNumeros + guardaNumeros[i]
}

mediaNumeros = sumaNumeros/guardaNumeros.length
maximoNumeros = Math.max(...guardaNumeros)
minimoNumeros = Math.min(...guardaNumeros)

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

console.log(mode(guardaNumeros))


//console.log(mediaNumeros)
//console.log(maximoNumeros)
//console.log(minimoNumeros)

}
