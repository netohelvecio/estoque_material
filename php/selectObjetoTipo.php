<?php
  include('conexao.php');

  $sql = "SELECT type_id, type_name FROM estoque_db.object_type;";
  $resultado = mysqli_query($conn, $sql);

  if ($resultado) {
    while ($dados = mysqli_fetch_assoc($resultado)) {
      $value = $dados['type_id'];
      $name = $dados['type_name'];

      $array_resultado[] = array( 'value' => $value, 'name' => $name);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado);
?>