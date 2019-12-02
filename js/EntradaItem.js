$(document).ready(function() {
  $.ajax({
    url: "../php/selectObjeto.php",
    type: "get",
    dataType: "json",
    success: function(response) {
      if (response) {
        $.each(response, function(id, objeto) {
          $("#objectName").append(
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

  const objectName = $("#objectName").val();
  const objectQtd = $("#objectQtd").val();

  if (objectName == -1) {
    alert("Selecione o objeto");
    return false;
  }

  if (objectQtd == "") {
    alert("Informe a quantidade a ser retirada");
    return false;
  }

  var dados = $(this).serialize();

  $.ajax({
    url: "../php/updateEntradaItem.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        $("#msg").text("Item adicionado!");
        $("#msg").show();

        $("#objectName").val(-1);
        $("#objectQtd").val("");
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});