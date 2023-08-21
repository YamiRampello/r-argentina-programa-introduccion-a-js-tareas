//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>



const $botonCalcularSalarioMensual = document.querySelector('#boton-calcular')


$botonCalcularSalarioMensual.onclick = function(){
  const salarioAnualUsuario = Number(document.querySelector('#salario-anual-usuario').value)
  let salarioMensual;

  salarioMensual = salarioAnualUsuario/12
  document.querySelector('#salario-mensual').value = salarioMensual
   
  return false
}
