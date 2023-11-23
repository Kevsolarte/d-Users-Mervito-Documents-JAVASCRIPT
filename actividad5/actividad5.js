function registrar() {
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").files[0];
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const tipo = document.getElementById("tipo").value;
    const año = document.getElementById("año").value;
  
    const formData = new FormData();
    formData.append("descripcion", descripcion);
    formData.append("imagen", imagen);
    formData.append("marca", marca);
    formData.append("modelo", modelo);
    formData.append("tipo", tipo);
    formData.append("año", año);
  
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "control.php", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        // El registro se realizó correctamente
      } else {
        // Se produjo un error al realizar el registro
      }
    };