$(document).ready(function() {
  $.ajax({
    url: "../php/selectObjetoTipo.php",
    type: "get",
    dataType: "json",
    success: function(response) {
      if (response) {
        $.each(response, function(id, objeto) {
          $("#objectType").append(
            $("<option>", {
              value: objeto.value,
              text: objeto.name
            })
          );
        });
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});

$("#formObject").submit(function() {
  event.preventDefault();

  const objectType = $("#objectType").val();
  const objectName = $("#objectName").val();
  const objectQtd = $("#objectQtd").val();

  if (objectType == -1) {
    alert("Selecione o tipo do objeto");
    return false;
  }

  if (objectName == "") {
    alert("Informe o nome do objeto");
    return false;
  }

  if (objectQtd == "") {
    alert("Informe a quantidade do objeto");
    return false;
  }

  var dados = $(this).serialize();

  $.ajax({
    url: "../php/insereObjeto.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        $("#msg").show();
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});
