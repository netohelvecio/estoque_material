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
    url: "../php/updateRetirarItem.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        $("#msg").text("Item retirado!");
        $("#msg").css("color", "#1d7037");
        $("#msg").show();

        $("#objectName").val(-1);
        $("#objectQtd").val("");
      } else {
        $("#msg").text("Retirada inválida! Número de estoque é inferior ao solicitado.");
        $("#msg").css("color", "#FA0514");
        $("#msg").show();
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});
