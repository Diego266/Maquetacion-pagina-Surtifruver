/*ALERTA DE CREAR USUARIO*/
$(document).ready(function () {
  $('.modal').modal();
});

/*TOOLTIP VER, EDITAR Y ELIMINAR USUARIO*/
$(document).ready(function () {
  $('.tooltipped').tooltip();
});

/*SELECT DE BUSQUEDA*/
$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "APA": null,
      "APALER": null,
    },
  });
});
