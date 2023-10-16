function probarValidarCantidadIntegrantes() {
  console.assert(
    validarCantidadIntegrantes(149) ===
      'En este campo debe ingresar un numero entero entre 1 y 2 digitos',
    'Validar cantidad integrantes no validó que el número ingresado sea un número entero entre 1 y 2 digitos'
  );

  console.assert(
    validarCantidadIntegrantes(-1) ===
      'En este campo debe ingresar un número positivo',
    'Validar cantidad integrantes no validó que el número ingresado sea positivo'
  );

  console.assert(
    validarCantidadIntegrantes(1) === '',
    'Validar cantidad de integrantes fallo con un número válido'
  );
}

function probarValidarEdad() {
  console.assert(
    validarEdad(1349) ===
      'En este campo debe ingresar un numero entero entre 1 y 3 digitos',
    'Validar edad no validó que el número ingresado sea un número entero entre 1 y 2 digitos'
  );

  console.assert(
    validarEdad(-1) === 'En este campo debe ingresar un número positivo',
    'Validar edad no validó que el número ingresado sea positivo'
  );

  console.assert(
    validarEdad(1) === '',
    'Validar edad fallo con una edad válida'
  );
}

probarValidarCantidadIntegrantes();
probarValidarEdad();
