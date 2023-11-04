// Variables globales
var actividades = [];

// Función para registrar una actividad
function registrarActividad() {
  // Obtenemos los datos del formulario
  var actividad = $("#actividad").val();
  var fecha = $("#fecha").val();
  var hora = $("#hora").val();

  // Creamos un nuevo objeto Actividad
  var actividad = {
    actividad: actividad,
    fecha: fecha,
    hora: hora
  };

  // Agregamos la actividad a la lista de actividades
  actividades.push(actividad);

  // Actualizamos la tabla de actividades
  actualizarTablaActividades();
}

// Función para modificar una actividad
function modificarActividad(id) {
  // Obtenemos los datos del formulario
  var actividad = $("#actividad").val();
  var fecha = $("#fecha").val();
  var hora = $("#hora").val();

  // Buscamos la actividad en la lista de actividades
  var actividadActualizar = actividades.find(function(actividad) {
    return actividad.id === id;
  });

  // Actualizamos los datos de la actividad
  actividadActualizar.actividad = actividad;
  actividadActualizar.fecha = fecha;
  actividadActualizar.hora = hora;

  // Actualizamos la tabla de actividades
  actualizarTablaActividades();
}

// Función para eliminar una actividad
function eliminarActividad(id) {
  // Buscamos la actividad en la lista de actividades
  var actividadEliminar = actividades.find(function(actividad) {
    return actividad.id === id;
  });

  // Eliminamos la actividad de la lista de actividades
  actividades.splice(actividades.indexOf(actividadEliminar), 1);

  // Actualizamos la tabla de actividades
  actualizarTablaActividades();
}

// Función para actualizar la tabla de actividades
function actualizarTablaActividades() {
  // Vaciamos la tabla
  $("#tbody-actividades").empty();

  // Recorremos la lista de actividades
  for (var i = 0; i < actividades.length; i++) {
    // Agregamos una fila a la tabla
    var fila = <span class="math-inline">\("<tr\>"\);
fila\.append\(</span>("<td>" + actividades[i].actividad + "</td>"));
    fila.append(<span class="math-inline">\("<td\>" \+ actividades\[i\]\.fecha \+ "</td\>"\)\);
fila\.append\(</span>("<td>" + actividades[i].hora + "</td>"));
    fila.append($
