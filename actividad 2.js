// Variables
const capitalInicial = prompt("Ingrese el monto inicial: ");
const tasaInteres = prompt("Ingrese la tasa de interés: ");
const aportesMensuales = prompt("Ingrese los aportes mensuales: ");

// Calcula el interés mensual
function calcularInteresMensual() {
  return capitalInicial * tasaInteres;
}

// Calcula el interés anual
function calcularInteresAnual() {
  return calcularInteresMensual() * 12;
}

// Calcula el capital final
function calcularCapitalFinal() {
  return capitalInicial + aportesMensuales * 12;
}

// Imprime el resultado
const interesAnual = calcularInteresAnual();
const capitalFinal = calcularCapitalFinal();

console.log("Interés anual: " + interesAnual);
console.log("Capital final: " + capitalFinal);
