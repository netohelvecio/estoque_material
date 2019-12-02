$(document).ready(function() {
  $.ajax({
    url: "../php/relatorioTable.php",
    method: "get",
    dataType: "json",
    beforeSend: function() {
      $("#loading").show();
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  }).done(function(data) {
    $("#loading").hide();
    $("#tableEstoque").show();
    $("#tableEstoque").dataTable({
      aaData: data,
      responsive: true,
      columns: [{ data: "type" }, { data: "object" }, { data: "qtd" }],
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
      },
      info: false
    });
  });
});
