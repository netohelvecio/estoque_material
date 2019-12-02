$(document).ready(function() {
  $.ajax({
    url: "../php/registroEntrada.php",
    method: "get",
    dataType: "json",
    beforeSend: function() {
      $("#loadingEntrada").show();
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  }).done(function(data) {
    $("#loadingEntrada").hide();
    $("#tableEntrada").show();
    $("#tableEntrada").dataTable({
      aaData: data,
      responsive: true,
      columns: [
        { data: "type" },
        { data: "object" },
        { data: "qtd" },
        { data: "date" }
      ],
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
      },
      info: false,
      order: [[3, "desc"]]
    });
  });

  $.ajax({
    url: "../php/registroSaida.php",
    method: "get",
    dataType: "json",
    beforeSend: function() {
      $("#loadingSaida").show();
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  }).done(function(data) {
    $("#loadingSaida").hide();
    $("#tableSaida").show();
    $("#tableSaida").dataTable({
      aaData: data,
      responsive: true,
      columns: [
        { data: "type" },
        { data: "object" },
        { data: "qtd" },
        { data: "date" }
      ],
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
      },
      info: false,
      order: [[3, "desc"]]
    });
  });
});
