const navbar = document.querySelector('#navbar');
const contenedorDeLinks = document.querySelector('#contenedor')
const containerNormal = document.querySelector('#containerNormal');

function responsive(x) {
    if (x.matches) { 
        navbar.innerHTML = `
            <a class="navbar__img abierto" id="btnNav" ><img src="./img/menu.png" alt=""></a>
            
        `

      navbar.classList.remove("navbar")
      navbar.classList.add("navbar--responsive")
      contenedorDeLinks.innerHTML = ``

        btnNav.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(btnNav.classList.contains('cerrado')){
                btnNav.classList.remove('cerrado');
                btnNav.classList.add('abierto');
                contenedorDeLinks.innerHTML = ``
                return
            }
            if(btnNav.classList.contains('abierto')){
                btnNav.classList.add('cerrado');
                btnNav.classList.remove('abierto');
              
                contenedorDeLinks.innerHTML = `
                <a href="internos.html">Inicio</a>
                <a href="https://myconstruction.com.ar/contacto/">Contacto</a>
                <a href="areaPersonal.html">Area Personal</a>
                <a href="beneficios.html">Empresas Asociadas</a>
                <a href="desarrolloHerramientas.html">Herramientas</a>
                <a href="terminosYcondiciones.html">Términos y Condiciones</a>
                <a href="index.html">Cerrar Sesión</a>

                `
                return
            }
        })
    } else {
        navbar.classList.add("navbar")
        navbar.classList.remove("navbar--responsive")
        navbar.innerHTML = `
            <a href="internos.html">Inicio</a>
            <a href="https://myconstruction.com.ar/contacto/">Contacto</a>
            <a class="navbar__img abierto" id="btnNavNormal" ><img src="./img/menu.png" alt=""></a>
        `
        btnNavNormal.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(btnNavNormal.classList.contains('cerrado1')){
                btnNavNormal.classList.remove('cerrado1');
                btnNavNormal.classList.add('abierto');
                containerNormal.innerHTML = ``
                containerNormal.style.padding = "0rem"
                return
            }
            if(btnNavNormal.classList.contains('abierto')){
                containerNormal.style.padding = "1rem"
                btnNavNormal.classList.add('cerrado1');
                btnNavNormal.classList.remove('abierto');
              
                containerNormal.innerHTML = `
                <a href="areaPersonal.html">Area Personal</a>
                <a href="beneficios.html">Empresas Asociadas</a>
                <a href="desarrolloHerramientas.html">Herramientas</a>
                <a href="terminosYcondiciones.html">Términos y Condiciones</a>
                <a href="index.html">Cerrar Sesión</a>

                `
                return
            }
        })
    }
  }
  
  let x = window.matchMedia("(max-width: 840px)")
  responsive(x) 
  x.addListener(responsive)

