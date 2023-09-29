// Variables
const alumnos = [
    { peso: 35 },
    { peso: 42 },
    { peso: 51 },
    { peso: 58 },
    { peso: 65 },
  ];
  
  // Función para calcular la categoría de peso de un alumno
  function calcularCategoria(peso) {
    if (peso < 40) {
      return "Menos de 40 kg";
    } else if (peso <= 50) {
      return "Entre 40 y 50 kg";
    } else if (peso < 60) {
      return "Más de 50 y menos de 60 kg";
    } else {
      return "Más o igual a 60 kg";
    }
  }
  
  // Conteo de alumnos por categoría
  const categorias = alumnos.reduce((acumulador, alumno) => {
    const categoria = calcularCategoria(alumno.peso);
    acumulador[categoria]++;
    return acumulador;
  }, {});
  
  // Impresión de la estadística
  console.log("Estadística de pesos de alumnos:");
  Object.entries(categorias).forEach(([categoria, cantidad]) => {
    console.log(`  - ${categoria}: ${cantidad}`);
  });
  