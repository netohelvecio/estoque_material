<?php
  include('conexao.php');

  $sql = "SELECT c.type_name, b.object_name, a.exit_qtd, DATE_FORMAT(a.created_at, '%d/%m/%Y') date FROM estoque_db.registry_exit a
          INNER JOIN estoque_db.object b ON b.object_id = a.object_id
          INNER JOIN estoque_db.object_type c ON c.type_id = b.type_id;";
  $resultado = mysqli_query($conn, $sql);

  if ($resultado) {
    while ($dados = mysqli_fetch_assoc($resultado)) {
      $type = $dados['type_name'];
      $object = $dados['object_name'];
      $qtd = $dados['exit_qtd'];
      $date = $dados['date'];

      $array_resultado[] = array( 'type' => $type, 'object' => $object, 'qtd' => $qtd, 'date' => $date);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado);
?>