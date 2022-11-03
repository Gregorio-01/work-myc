// DB
document.addEventListener("DOMContentLoaded", function () {
    fetch('./DB/empresas.json')
        .then(response => response.json())
        .then(data => {
            filtro(data)
            crearCards(data, 0, data.length, beneficiosContainer)
        })
})

const beneficiosContainer = document.querySelector('#beneficiosContainer')
const obj = {
    filtro : ""
}

function crearCards(arrayCards, cantidad1, cantidad2, ubicacion) {

    let total = arrayCards.slice(cantidad1, cantidad2)
    total.forEach(elm => {
        const contenedorCard = document.createElement('div')

        const div = document.createElement('div')
        div.classList.add('cards__beneficios')


        const div2 = document.createElement('div')
        div2.style.backgroundImage = `url('${elm.imgBackground}')`;

        const div3 = document.createElement('div')
        div3.style.backgroundImage = `url('${elm.imgIcon}')`;

        const h3 = document.createElement('h3')
        h3.innerText = elm.nombre

        const div4 = document.createElement('div')



        elm.items.forEach(elm2 => {
            const img = document.createElement('img')
            img.src = elm2.img
            div4.appendChild(img)
        })
        const button = document.createElement('button')
        button.innerText = 'Ver tienda'
        button.href = elm.link

        ubicacion.appendChild(contenedorCard)
        contenedorCard.appendChild(div)
        div.appendChild(div2)
        div.appendChild(div3)
        div.appendChild(h3)
        div.appendChild(div4)
        div.appendChild(button)


    })

}

const filtrado = document.querySelector('#filtrado')
const aside = document.querySelector('#aside')
const contenedorLinks = document.querySelector('#contenedorLinks')


function filtros(data, bgContainer,  aside__container) {
    
   if(obj.filtro != ""){
    beneficiosContainer.innerHTML = ""
    let arrayFiltrado = data.filter(elm => elm.categoria == obj.filtro)
    crearCards(arrayFiltrado, 0, arrayFiltrado.length, beneficiosContainer)
   }
   if(obj.filtro == "todos"){
    beneficiosContainer.innerHTML = ""
    crearCards(data, 0, data.length, beneficiosContainer)
    
   }
   aside__container.style.transform = "translate(-100%,0)"
   setTimeout(function(){
    bgContainer.remove()
   }, 1500)
}

function filtro(data){
filtrado.addEventListener('click', e => {
    e.preventDefault();

    const div1 = document.createElement('div')
    div1.classList.add('aside__container')
    const txt = `
    <div id="bgPopUp" class="background__popup">
        <div class="asideBusqueda">
            <a class="filtro" id="ferreteria" href="">Ferreterias</a>
            <a class="filtro" id="maquinaria" href="">Maquinaria</a>
            <a class="filtro" id="pintureria" href="">Pintureria</a>
            <a class="filtro" id="todos" href="">Todos</a>
        </div>
    </div>
        `
    div1.innerHTML = txt
    // Cerrado
    const classCerrado = () => {
        aside.classList.remove('cerrado')
        aside.classList.add('abierto');  
    }
// ABIERTO ASIDE
    const classAbierto = () => {
        aside.classList
        aside.classList.add('cerrado')
        aside.classList.remove('abierto');
        contenedorLinks.innerHTML = txt;
        const aside__container = document.querySelector('.asideBusqueda')
        const bgContainer = document.querySelector('.background__popup')
        setTimeout(() => {
            aside__container.style.transform = "translate(0,0)";
            aside__container.style.transition = "2s";
        }, 500)
       
    //  FILTROS
    
        let resultado = document.querySelectorAll('.filtro')
        resultado.forEach(elm => {
            elm.addEventListener('click', e => {
                e.preventDefault()
                obj.filtro = e.target.id
                filtros(data, bgContainer,  aside__container)
            })
        })
        const bgPopUp = document.querySelector('#bgPopUp')
        bgPopUp.addEventListener('click', e => {
            aside__container.style.transform = "translate(-100%,0)"
            setTimeout(function(){
             bgContainer.remove()
            }, 1500)
    })
    }
    aside.classList.contains('cerrado') ? classCerrado() : classAbierto();

})



}

