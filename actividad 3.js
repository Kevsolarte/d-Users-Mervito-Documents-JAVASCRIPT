function leerDatos(n) {
    // Declaramos las variables
    let cedula = [];
    let nombre = [];
    let matematicas = [];
    let fisica = [];
    let programacion = [];
  
    // Leemos los datos
    for (let i = 0; i < n; i++) {
      cedula[i] = prompt("Ingrese la cédula del alumno: ");
      nombre[i] = prompt("Ingrese el nombre del alumno: ");
      matematicas[i] = Number(prompt("Ingrese la nota de matemáticas: "));
      fisica[i] = Number(prompt("Ingrese la nota de física: "));
      programacion[i] = Number(prompt("Ingrese la nota de programación: "));
    }
  
    // Calculamos las notas promedio
    let promedioMatematicas = matematicas.reduce((a, b) => a + b) / n;
    let promedioFisica = fisica.reduce((a, b) => a + b) / n;
    let promedioProgramacion = programacion.reduce((a, b) => a + b) / n;
  
    // Calculamos el número de alumnos aprobados y aplazados en cada materia
    let aprobadosMatematicas = matematicas.filter(nota => nota >= 6).length;
    let aplazadosMatematicas = matematicas.length - aprobadosMatematicas;
    let aprobadosFisica = fisica.filter(nota => nota >= 6).length;
    let aplazadosFisica = fisica.length - aprobadosFisica;
    let aprobadosProgramacion = programacion.filter(nota => nota >= 6).length;
    let aplazadosProgramacion = programacion.length - aprobadosProgramacion;
  
    // Calculamos el número de alumnos aprobados en dos o más materias
    let aprobadosDosOMasMaterias = 0;
    let aprobadosDosOMasFisica = 0;
    let aprobadosDosOMasProgramacion = 0;
    for (let i = 0; i < n; i++) {
      if (matematicas[i] >= 6 && fisica[i] >= 6) {
        aprobadosDosOMasMaterias++;
      }
      if (matematicas[i] >= 6 && programacion[i] >= 6) {
        aprobadosDosOMasFisica++;
      }
      if (fisica[i] >= 6 && programacion[i] >= 6) {
        aprobadosDosOMasProgramacion++;
      }
    }
  
    // Calculamos la nota máxima en cada materia
    let notaMaximaMatematicas = matematicas.reduce((a, b) => Math.max(a, b));
    let notaMaximaFisica = fisica.reduce((a, b) => Math.max(a, b));
    let notaMaximaProgramacion = programacion.reduce((a, b) => Math.max(a, b));
  
    // Imprimimos los resultados
    console.log("**Resultados**");
    console.log("* Nota promedio de matemáticas: " + promedioMatematicas);
    console.log("* Número de alumnos aprobados en matemáticas: " + aprobadosMatematicas);
    console.log("* Número de alumnos aplazados en matemáticas: " + aplazadosMatematicas);
    console.log("* Nota promedio de física: " + promedioFisica);
    console.log("* Número de alumnos aprobados en física: " + aprobadosFisica);
    console.log("* Número de alumnos aplazados en física: " + aplazadosFisica);
    console.log("* Nota promedio de programación: " + promedioProgramacion);
    console.log("* Número de alumnos aprobados en programación: " + aprobadosProgramacion);
    console.log("* Número de alumnos aplazados en programación: " + aplazadosProgramacion);
    console.log("* Número de alumnos aprobados en dos o más materias: " + aprobadosDosOMasMaterias + " + " + aprobadosDosOMasFisica + " + " + aprobadosDosOMasProgramacion);
    console.log("* Nota máxima en matemáticas: " + notaMaximaMatematicas);
    console.log("* Nota máxima en física: " + notaMaximaFisica);
    console.log("* Nota máxima en programación: " + notaMaximaProgramacion);
  }
  