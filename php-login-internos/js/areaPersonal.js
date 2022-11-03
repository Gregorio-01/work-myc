const datosContainer = document.querySelector("#datosContainer")
const proyectosContainer = document.querySelector('#proyectosContainer')
const btnVer = document.querySelector("#btnVer")
const btnUpload = document.querySelector("#btnUpload")
const backgroundTodos = document.querySelector("#backgroundTodos")
const cardStats = document.querySelector("#cardStats")
const url = "https://62bf69eabe8ba3a10d697f48.mockapi.io/api/v1/proyectos"

fetch('./DB/users.json')
.then(response => response.json())
.then(data => {
    usuarios(data)
})

let obj = {
    vendidos : "",
    usuario: ""
}

function usuarios(data){
    if(localStorage.getItem('key') != null){
        let localstoragearr = JSON.parse(localStorage.getItem("key"))
        let nombre = localstoragearr.nombre
        let pass = localstoragearr.pass
        let usuario = data.filter(user => user.nombre == nombre)
            if(usuario.length != 0){
                traerPerfil(usuario)
                obj.usuario = nombre
                datosUser()
                obj.vendidos = data[0].vendidos
            }else{
                alert("error")
                window.location.href = "./index.html"
                localstoragearr = JSON.parse(localStorage.delete("key"))
            }
    
        }
        
}


function datosUser(nombre){
    fetch(`https://62bf69eabe8ba3a10d697f48.mockapi.io/api/v1/proyectos?search=${obj.usuario}`)
    .then(response => response.json())
    .then(data => { 
        traerTodos(data)
        traerProyectos(data)
        stats(data)
    })

}


function traerPerfil(usuario) {
    datosContainer.innerHTML =""
    const imagendePerfil = document.createElement('div')
    imagendePerfil.style.backgroundImage = `url('${usuario[0].img}')`;
    datosContainer.appendChild(imagendePerfil)
    datosContainer.innerHTML += `
    <h1>${usuario[0].nombre} ${usuario[0].apellidos}</h1>
    `
}
function traerProyectos(data){
    proyectosContainer.innerHTML = ""
    let arraySplice = [...data]        
    arraySplice.splice(0, 2).forEach(elm =>{
        proyectosContainer.innerHTML += `
        <div class="d-flex  ">
            <div class="d-flex proyectos__card"> 
                <div class="d-flex">
                    <div class="proyectos__img">
                        <img src="${elm.imagen}" alt="">
                        
                    </div>
                    <div class="proyectos__textos">
                        <h3>${elm.titulo}</h3>
                        <p>${elm.descripcion}</p>
                    </div>
                </div>
                    <div class="proyectos__delete">
                        <p id="${elm.id}" class="btnDelete"> X </p>
                    </div>
            </div>
        
        
    </div>
        `

    })
}
function traerTodos(data){
    backgroundTodos.innerHTML = ""
        const div1= document.createElement('div')
        div1.classList.add('bgTodos')
        const div2= document.createElement('div')
        div2.classList.add('container__todos')
        div2.id = "container"
        const button = document.createElement('button')
        button.innerHTML = "Salir"
        button.classList.add('btnSalir')
        const div3= document.createElement('div')
        div3.classList.add('btnSalir')
        const div4 = document.createElement('div')
        div4.classList.add('container__scroll')
        
    btnVer.addEventListener('click', () => {
        backgroundTodos.innerHTML = ""
        backgroundTodos.appendChild(div1)
        div1.appendChild(div2) 
        div2.appendChild(div4)
        
        const container = document.querySelector('#container')
        div4.innerHTML = ""
        data.forEach(elm =>{
            div4.innerHTML  += ` 
            <div class="d-flex  ">
            <div class="d-flex proyectos__card"> 
            <div class="d-flex">
                <div class="proyectos__img">
                    <img src="${elm.imagen}" alt="">
                    
                </div>
                <div class="proyectos__textos">
                    <h3>${elm.titulo}</h3>
                    <p>${elm.descripcion}</p>
                </div>
            </div>
                <div class="proyectos__delete">
                    <p id="${elm.id}" class="btnDelete"> X </p>
                </div>
            </div>
            
            
        </div>

            `
        })   
        div2.appendChild(div3)
        div3.appendChild(button)
       
    })

    button.addEventListener("click", (e) => {
        backgroundTodos.innerHTML = ""
    })
}
function stats(usuario){
    let cantidadPr = usuario.length
    let vendidosPr = obj.vendidos
    cardStats.innerHTML = `
    <div class="item item--1">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path fill="rgba(66,193,110,1)"
            d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z">
        </path>
    </svg>
    <span class="quantity"> ${cantidadPr} </span>
    <span class="text text--1"> Publicados </span>
</div>
<div class="item item--2">
    <svg height="24" width="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path fill="rgba(149,149,255,1)"
            d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
        </path>
    </svg> <span class="quantity"> ${vendidosPr} </span>
    <span class="text text--2"> Vendidos </span>
</div>
    `
}


btnUpload.addEventListener('click', () => {
    backgroundTodos.innerHTML = ""
    const div1= document.createElement('div')
    div1.classList.add('bgTodos')
    const div2= document.createElement('div')
    div2.classList.add('container__todos')
    div2.id = "container"
    backgroundTodos.appendChild(div1)
    div1.appendChild(div2) 
    const container = document.querySelector('#container')
        container.innerHTML = `
            <form id="formularioEnviar" class="formularioEnviar" action="">
                <input placeholder="Titulo" id="inputTitulo" type="text" required>
                <input placeholder="Descripcion" id="inputDescripcion" type="text" required>
                <input placeholder="Imagen" id="inputImagen" type="text" required>
                <input placeholder="Link de drive" id="inputDrive" type="text" required>
                <p style="color:white; font-size:1.2rem; text-align:center;"> Recuerda que el link a drive debe ser publico asi como la imagen seleccionada</p>
                <div class="formulario__btns"> 
                    <button type="submit">Enviar nuevo proyecto</button>
                    <button id="cancelarBtn" type="button">Cancelar</button>
                </div>
            </form>
        `

        const cancelarBtn = document.querySelector('#cancelarBtn')
        cancelarBtn.addEventListener("click", (e) => {
            backgroundTodos.innerHTML = ""
        })
})


document.addEventListener('submit', (e) => {
    let localstoragearr = JSON.parse(localStorage.getItem("key"))
        let nombre = localstoragearr.nombre
    if(e.target.classList.contains("formularioEnviar")){
        e.preventDefault()
        let titulos = inputTitulo.value
        let descripcion = inputDescripcion.value
        let img = inputImagen.value
        let drive = inputDrive.value
        enviarDato({user: nombre, titulo: titulos, descripcion: descripcion, imagen: img, link: drive})
        Swal.fire({
            icon: 'success',
            title: 'Proyecto enviado con exito!',
            text: 'Verifica que este en tu panel de usuario.',            
          })
        backgroundTodos.innerHTML = ""
        datosUser()

    }
})

function enviarDato(obj){
    fetch(url,{
        "method" : "POST",
        "headers" : {"Content-Type": "application/json"},
        "body" : JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => {
        datosUser()
    })
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btnDelete')){
        let id = e.target.id
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.value) {
                eliminar(id)
                Swal.fire(
                    'Eliminado!',
                    'Tu proyecto ha sido eliminado.',
                    'success'
                )
            }
          })
    }
})

function eliminar(id){
    fetch(`${url}/${id}`,{
        "method" : "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        datosUser()
    })
}

const containerMsj = document.querySelector('#containerMsj')

btnMensajes.addEventListener('click', () => {
    containerMsj.innerHTML = `
        <div class="bg__mensajes">
        <div class="containerTabla">
            <table class="tablaMensajes">
                <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Mensaje</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody id="tbodyMsj">
                    <tr> 
                        <td>Sistema</td>
                        <td>No hay nuevos avisos</td>
                        <td>14/07/22</td>
                    </tr>
                    
                </tbody>
                
            </table>
            <div class="btnCerrar__container">
                <button class="btnCerrar">Cerrar</button>
            </div>
           </div>
        </div>
            `
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btnCerrar')){
        containerMsj.innerHTML = ""
    }
})