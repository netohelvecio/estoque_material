<?php
  include('conexao.php');

  $sql = "SELECT b.type_name, a.object_name, a.object_qtd FROM estoque_db.object a 
          INNER JOIN estoque_db.object_type b ON b.type_id = a.type_id;";
  $resultado = mysqli_query($conn, $sql);

  if ($resultado) {
    while ($dados = mysqli_fetch_assoc($resultado)) {
      $type = $dados['type_name'];
      $object = $dados['object_name'];
      $qtd = $dados['object_qtd'];

      $array_resultado[] = array( 'type' => $type, 'object' => $object, 'qtd' => $qtd);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado);
?>