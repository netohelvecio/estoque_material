$("#formObject").submit(function() {
  event.preventDefault();

  const object = $("#objectType").val();

  if (!object) {
    alert("Informe um objeto");
    return false;
  }

  var dados = $(this).serialize();

  $.ajax({
    url: "./php/insereObjetoTipo.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        $("#msg").show();
        
        $("#objectType").val("");
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});
