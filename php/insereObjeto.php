<?php
  include('conexao.php');

  $objectType = $_POST['objectType'];
  $objectName = $_POST['objectName'];
  $objectQtd = $_POST['objectQtd'];
  $insert = false;

  $sql = "INSERT INTO `estoque_db`.`object` (`object_name`,`object_qtd`,`type_id`) 
          VALUES ('$objectName', $objectQtd, $objectType);";
  $resultado = mysqli_query($conn, $sql);

  if ($resultado) {
    $insert = true;
  } else {
    $insert = false;
  }

  echo json_encode($insert);
?>