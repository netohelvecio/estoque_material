<?php
  include('conexao.php');

  $sql = "SELECT object_id, object_name, object_qtd FROM estoque_db.object;";
  $resultado = mysqli_query($conn, $sql);

  if ($resultado) {
    while ($dados = mysqli_fetch_assoc($resultado)) {
      $value = $dados['object_id'];
      $name = $dados['object_name'];
      $qtd = $dados['object_qtd'];

      $array_resultado[] = array( 'value' => $value, 'name' => $name, 'qtd' => $qtd);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado);
?>