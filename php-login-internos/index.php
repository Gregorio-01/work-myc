<?php

session_start();

require './database/database.php';

 // Conexion al servidor

$conexion=mysqli_connect('localhost','root','','internos_myconstruction') or die ("no hay conexion");

if (!empty($_POST['email']) && !empty($_POST['pass'])) {
     $email=$_POST['email'];
     $pass=$_POST['pass'];
     $res = mysqli_query($conexion,"SELECT id, email, password FROM users WHERE email='$email'");

     $message = '';
     if ($fila=mysqli_fetch_array($res)){

       if ($pass==$fila['password']) {

         $_SESSION['user_id'] = $results['id'];
         header('Location: https://internos-my-construction.super.site/');
       } else {
         $message = 'Usuario Incorrecto';
       }
  }
  }
 ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,400;0,600;0,700;0,800;1,200;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <!-- BOOTSTRAPS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!-- CSS PROPIO -->
    <link rel="stylesheet" href="./css/style.css">

    <title>Inicia sesión | My Construction Argentina</title>
</head>

<body>

            <!-- Boton volver pagina principal-->
                <div class="contenedorVolver">
                    <form class="volverPrincipal">
                         <a href="https://myconstruction.com.ar/">Volver a la Página Principal</a>
                    </form>
                </div>

    <main class="loginMain d-flex">
        <div id="cambio" class="loginMain__contenedor d-flex">
            <!-- PRIMERA TARJETA -->
            <div class="loginMain__card1 loginMain__card">
                <div class="loginMain__content">
                    <div class="loginMain__background"></div>
                    <div class="loginMain__title d-flex">
                        <h2>¿Quiere Aplicar?</h2>
                    </div>  
                    <div class="loginMain__copy">
                        <p>
                            My Construction le da la bienvenida a todos los profesionales y estudiantes
                            capacitados para ejecutar sus primeras actividades profesionales y ofrecerles un
                            entorno de desarrollo con herramientas y actividad laboral...
                        </p>
                        <button class="btn" href="./php-quienessomos/quienessomos.php">Más info</button>
                    </div>
                   
                </div>
            </div>
            <!-- SEGUNDA TARJETA -->
            <div class="loginMain__card2 loginMain__card">
                <div class="loginMain__content">
                    <div class="loginMain__background"></div>
                    <div class="loginMain__title d-flex">
                        <h2>Beneficios</h2>
                    </div>  
                    <div class="loginMain__copy">
                        <p>
                            Los Beneficios de ser asociado de My Construction, se generan a partir de la conexión de la plataforma con constructoras, clientes e inmobiliarias...
                        </p>
                        <button class="btn" href="./php-beneficios/beneficios.php">Quiero saber más</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div>
            <div id="ventanaLogin" class="loginMain__login d-flex">
                <div class="login__logo d-flex">
                    <img src="./img/Logo4.png" class="avatar" alt="Imagen">
                </div>
                <h1>Ingresar</h1>
                
                <form id="formulario1" class="login__formulario d-flex">
                    <!-- usuario -->
                    <label for="username">Usuario</label>
                    <input  type="text" id="email" name="email" placeholder="Enter Username">

                    <!-- contraseña -->
                    <label for="password">Contraseña</label>
                    <input type="password" id="pass" name="pass" placeholder="Enter Password">

                    <!-- Boton de enviar -->
                    <input class="entrada" href="https://myconstruction.com.ar/colaboradores/login.php" type="submit"
                        name="Ingresar" value="Enviar">

                    <a id="olvideMipass" href="#">Te olvidaste tu contraseña?</a>
                </form>
                <div id="mensajeAlert"></div>
            </div>
        </div>
    </main>
    <!-- BOOTSTRAPS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <!-- SCRIPT PROPIO -->
    <script src="./js/login.js"></script>
</body>

</html>