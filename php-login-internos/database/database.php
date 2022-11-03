<?php


  $server = 'localhost';  //ip o url del server, por ejemplo: 198.168.20.1:puerto/colaboradores
  $username = 'root'; //username dentro del server, para ingresar y que sea mas seguro
  $password = ''; //password para el username
  $database = 'internos_myconstruction'; //database del mysql

  try {
    $conn = new PDO("mysql:host=$server;dbname=$database",$username, $password);
  } catch (PDOException $e) {
    die('Conexion Fallida: '.$e->getMessage());
  }


 ?>