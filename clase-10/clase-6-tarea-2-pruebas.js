function probarValidarCantidadIntegrantes() {
  console.assert(
    validarCantidadIntegrantes(4) === '',
    'Validar cantidad de integrantes falló con un número válido'
  ),
    console.assert(
      validarCantidadIntegrantes('4564') ===
        'En este campo debe ingresar un numero entero entre 1 y 2 digitos',
      'Validar cantidad de integrantes no validó que el número que se ingresa sea entero entre 1 y 2 digitos'
    ),
    console.assert(
      validarCantidadIntegrantes('-7') ===
        'En este campo debe ingresar un número positivo',
      'Validar cantidad de integrantes no validó que el número que se ingresa sea positivo'
    );
}

function probarValidarSalario() {
  console.assert(
    validarSalario(454000) === '',
    'Validar salario falló con un salario válido'
  ),
    console.assert(
      validarSalario('cualquiercosa') ===
        'En este campo debe ingresar un numero (puede agregar decimales)',
      'Validar salario no validó que el número que se ingresa sea numerico'
    ),
    console.assert(
      validarSalario('-70000') ===
        'En este campo debe ingresar un número positivo',
      'Validar salario no validó que el salario que se ingresa sea positivo'
    );
}

probarValidarCantidadIntegrantes();
probarValidarSalario();
