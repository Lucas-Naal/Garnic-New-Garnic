const bajas = document.getElementById("bajas");
bajas.addEventListener("click",() => {
    swal({
        title: "¿Quieres Eliminar La Planta?",
        text: "una vez eliminado no volvera a aparecer",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((siborra) => {
        if (siborra) {
          swal("Listo, La Planta Acaba De Ser Eliminada", {
            icon: "success",
          });
        } else {
          swal("La Planta No Fue Eliminada"),{
          }
          
        }
      })
      
})


