//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonDuracionClases = document.querySelector('#boton-duracion-total-clases')

$botonDuracionClases.onclick = function(){
    let totalHorasVideos = 0;
    let totalMinutosVideos = 0;
    let totalSegundosVideos = 0;


    const horas = document.querySelectorAll('.horas')
    const minutos = document.querySelectorAll('.minutos')
    const segundos = document.querySelectorAll('.segundos')
    
//Calcula horas
for (let i = 0; i < horas.length ; i++){
    totalHorasVideos = totalHorasVideos + Number(horas[i].value)
}

//Calcula minutos
for (let i = 0; i < minutos.length ; i++){
    totalMinutosVideos = totalMinutosVideos + Number(minutos[i].value)
}
//Calcula segundos
for (let i = 0; i < segundos.length ; i++){
     totalSegundosVideos = totalSegundosVideos + Number(segundos[i].value)
}

//Agrega minutos segun segundos > 60
if( totalSegundosVideos > 59 ){
    totalMinutosVideos = totalMinutosVideos + Math.trunc(totalSegundosVideos/60)
    totalSegundosVideos = totalSegundosVideos % 60 
}

//Agrega horas segun minutos > 60
if( totalMinutosVideos > 59 ){
    totalHorasVideos = totalHorasVideos + Math.trunc(totalMinutosVideos/60)
    totalMinutosVideos = totalMinutosVideos % 60 
}

document.querySelector('#campo-resultado-duracion-total-clases').value = 
    `${totalHorasVideos} hs. ${totalMinutosVideos} minutos ${totalSegundosVideos} segundos.`

return false
}
