<?php
  include('conexao.php');

  $objectName = $_POST['objectName'];
  $objectQtd = $_POST['objectQtd'];
  $update = true;

  $sql = "SELECT object_id, object_name, object_qtd FROM estoque_db.object WHERE object_id = $objectName;";
  $resultado_select = mysqli_query($conn, $sql);

  if ($resultado_select) {
    while ($dados = mysqli_fetch_assoc($resultado_select)) {
      $qtd = $dados['object_qtd'];
    }

    if ($objectQtd > $qtd) {
      $update = false;  
    }
  }

  if ($update) {
    $qtd -= $objectQtd;

    $sql = "UPDATE `estoque_db`.`object` SET `object_qtd` = $qtd WHERE `object_id` = $objectName;";
    $resultado = mysqli_query($conn, $sql);
  }
  
  echo json_encode($update);
?>