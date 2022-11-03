// query selector
const cambio = document.querySelector('#cambio')
// variables
// VERIFICA EL TAMAÑO DE LA PANTALLA
let verificador = window.matchMedia("(max-width: 700px)")

// Funciones
// SI LA PANTALLA ES DE 700PX ENTONCES SE VA A INYECTAR EL SLIDE PERO SI NO
// SE INYECTA LAS COLUMNAS
function pantalla(verificador) {
    if (verificador.matches) {

        cambio.innerHTML = `
    <!-- SLIDE by boostraps -->
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div class="loginMain__card1 loginMain__card">
        <div class="loginMain__content">
                <div class="loginMain__background"></div>
                <div class="loginMain__title d-flex">
                    <h2>¿Quiere Aplicar?</h2>
                </div>  
                <div class="loginMain__copy">
                    <p>
                        My Construction Argentina le da la bienvenida a todos los profesionales y estudiantes
                        capacitados para ejecutar sus primeras actividades profesionales y ofrecerles un
                        desarrollo con herramientas y actividad laboral...
                    </p>
                    <button class="btn" href="./php-quienessomos/quienessomos.php">Más info</button>
                </div>
        </div>
</div>
    </div>
    <div class="carousel-item">
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
                    <button class="btn" href="./php-beneficios/beneficios.php">Quiero saber mas</button>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</div>
      `
    } else {
        cambio.innerHTML = `
        <!-- PRIMERA TARJETA -->
        <div class="loginMain__card1 loginMain__card">
            <div class="loginMain__content">
                <div class="loginMain__background"></div>
                <div class="loginMain__title d-flex">
                    <h2>¿Quiere Aplicar?</h2>
                </div>  
                <div class="loginMain__copy">
                    <p>
                        My Construction Argentina le da la bienvenida a todos los profesionales y estudiantes
                        capacitados para ejecutar sus primeras actividades profesionales y ofrecerles un
                        desarrollo con herramientas y actividad laboral...
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
                    <button class="btn" href="./php-beneficios/beneficios.php">Quiero saber mas</button>
                </div>
                
            </div>
        </div>

        `
    }
}
//   ACA LLAMAMOS LA FUNCION Y LE DAMOS EL EVENT LISTENER PARA ESCUCHAR LA PANTALLA
pantalla(verificador)
verificador.addListener(pantalla)

// Verificador del login si esta completo
const alerta = document.querySelector("#mensajeAlert")


  document.getElementById("formulario1").addEventListener('submit', validar);

  function validar(evt) {
    evt.preventDefault();
      let cla1 = document.getElementById("email").value;
      let cla2 = document.getElementById("pass").value;
      if ((cla2 != "") && (cla1 != "")){
        localStorage.setItem("key", JSON.stringify({nombre: cla1, pass: cla2}));
        window.location.href = "./internos.html"
      }else{
        alerta.innerHTML = `
        <div class="alert">
            <p> Error en algun campo o vacio </p>
        </div>
        `
          setTimeout(() => {
            alerta.innerHTML = ""
          }, 4000);
        
      }
  }


//   Pestaña de olvide mi contraseña 
const ventanaLogin = document.querySelector("#ventanaLogin");
const olvideMipass = document.querySelector("#olvideMipass")

olvideMipass.addEventListener('click', (e) => {
    e.preventDefault()
    ventanaLogin.innerHTML = `
    <div class="login__logo d-flex">
        <img src="./img/Logo4.png" class="avatar" alt="Imagen">
    </div>
        <h1>Cambiar contraseña</h1>

        <form id="formulario1" class="login__formulario d-flex">
            <!-- Email -->
            <label for="username">Email</label>
            <input  type="email" id="email" name="email" placeholder="Enter Email" required>

            <!-- Boton de enviar -->
            <input id="enviarMail" class="entrada" href="" type="submit"
                name="" value="Enviar">
        </form>
    <div id="mensajeAlert"></div>
`
enviarMail.addEventListener('click', (e) =>{
    
})
})



