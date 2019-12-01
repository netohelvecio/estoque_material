<?php
  include('conexao.php');

  $object = $_POST['objectType'];
  $insert = false;

  $sql = "INSERT INTO `estoque_db`.`object_type` (`type_name`) VALUES ('$object');";
  $resultado = mysqli_query($conn, $sql);

  if ($resultado) {
    $insert = true;
  } else {
    $insert = false;
  }

  echo json_encode($insert);
?>