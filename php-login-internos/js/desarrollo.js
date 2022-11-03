const cursos = document.querySelector('#cursos');
const recursos = document.querySelector('#recursos');
const rank = document.querySelector('#ranked');
const barraCambioCursos = document.querySelector('#barraCambioCursos')
const barraCambioArticulos = document.querySelector('#barraCambioArticulos')
const mqLarge  = window.matchMedia( '(min-width: 800px) and (max-width: 1200px)' );
const mqMedium  = window.matchMedia( '(min-width: 650px) and (max-width: 799px)' );
const mqChico  = window.matchMedia( '(min-width: 280px) and (max-width: 649px)' );



fetch('./DB/material.json')
.then(response => response.json())
.then(data => {
    const 
    screen = {
      small: 0,
      medium: 400,
      mediumLarge: 750,
      large: 800,
      largeXl: 1200
    };
  
  // observe window resize
  eventThrottle(window, 'resize', resizeHandler);
  resizeHandler();
  
  
  // throttled event handler
  function eventThrottle(element, event, callback, delay = 200) {
    let throttle;
    element.addEventListener(event, (e) => {
      throttle = throttle || setTimeout(() => {
        throttle = null;
        callback(e);
      }, delay);
    });
  }
  
  
  // calculate size
  function resizeHandler() {
    
    // get window width
    const iw = window.innerWidth;
   
    // determine named size
    let size = null;
    for (let s in screen) {
      if (iw >= screen[s]) size = s;
    }
   
    if(size == "largeXl"){
        creacionDecards(data, 5)
    }
    if(size == "large"){
        creacionDecards(data, 4)
    }
    if(size == "mediumLarge"){
        creacionDecards(data, 3)
    }
    if(size == "medium"){
        creacionDecards(data, 2)
    }
    if(size == "small"){
        creacionDecards(data, 2)
    }
  }
  
  
    destacados(data)
})



function creacionDecards(data, cantidad) {
    if(cursos){
        let result = data.filter(cursor => cursor.tipo == 'Cursos')
        controlesDemovCursos(result, cursos, barraCambioCursos, cantidad)
       
      
    }
    if(recursos){
        let result = data.filter(cursor => cursor.tipo == 'Articulo')
        controlesDemovArticulos(result, recursos, barraCambioArticulos, cantidad)
       
    }

   
}

function destacados(data){
    if(ranked){
        let result = data.filter(cursor => cursor.ranking == 'destacado')
        ranked(result, rank)
      
    }
}


const updateElements = (data, ubicacion) => {
    ubicacion.innerHTML = '';
    data.forEach(elm =>{ 
       
        const a = document.createElement('a')
        a.classList.add('contenedorDh__link')
        a.href = elm.link 
        a.target = '_blank'

        const div = document.createElement('div')
        div.classList.add('contenedorDh__card')
        div.style.backgroundImage = `url('${elm.imagen}')`;
        
        const div2 = document.createElement('div')
        div2.classList.add('contenedorDh__cardInfo')

        const h3 = document.createElement('h3')
        h3.innerText = elm.nombre

        const p = document.createElement('p')
        p.innerText = elm.descripcion

        ubicacion.appendChild(a)
        a.appendChild(div)
        div.appendChild(div2)
        div2.appendChild(h3)
        div2.appendChild(p)
    })
    
}

function ranked(result){
    rank.innerHTM = ""
    result.forEach(elm =>{
        
        rank.innerHTML += `
        <a class="contenedorDh__cardMaxA" href="${elm.link}" target="_blank">
            <div class="contenedorDh__cardMax">
                <div class="contenedorDh__cardMaxInf">
                    <h3>${elm.nombre}</h3>
                    <p>${elm.descripcion}</p>
                </div>
            </div>
        </a>

        `
    })

}

function controlesDemovCursos(productosArray, ubicacion, barra, cantidad){

    const updatePage = ( elements, page, elementsPerPage) =>
    {
        const firstElement = (page * elementsPerPage) - elementsPerPage;
        const lastElement = page * elementsPerPage;
        return elements.slice(firstElement, lastElement);
    }
    
    let focusElements = [...productosArray];
    const btnsNav = document.querySelector(`#${barra.id}`).children;
    let ActualPage = 1;
    let lastPage = Math.round(focusElements.length/cantidad);
    updateElements(updatePage(focusElements, 1, cantidad), ubicacion);
    btnsNav[1].innerText = `${ActualPage} - ${lastPage}`;
    btnsNav[0].onclick = ()=>
    {
        if(ActualPage > 1)
        {
            cursos.style.transform = 'translate(-1200px, 0px)'
            cursos.style.transition = '1.5s'
            ActualPage--;
            setTimeout(() => {
                updateElements(updatePage(focusElements, ActualPage, cantidad), ubicacion);
                cursos.style.transform = 'translate(0px, 0px)'
            }, 1500);
           
            btnsNav[1].innerText = `${ActualPage} - ${lastPage}`
        }
    }
    btnsNav[2].onclick = ()=>
    {
        if(ActualPage < lastPage)
        {
            ActualPage++
            cursos.style.transform = 'translate(1200px, 0px)'
            cursos.style.transition = '1.5s'
            setTimeout(() => {
                updateElements(updatePage(focusElements, ActualPage, cantidad), ubicacion);
                cursos.style.transform = 'translate(0px, 0px)'
            }, 1500);
            btnsNav[1].innerText = `${ActualPage} - ${lastPage}`
        }
    }
}

function controlesDemovArticulos(productosArray, ubicacion, barra,cantidad){
    const updatePage = ( elements, page, elementsPerPage) =>
    {
        const firstElement = (page * elementsPerPage) - elementsPerPage;
        const lastElement = page * elementsPerPage;
        return elements.slice(firstElement, lastElement);
    }
    
    let focusElements = [...productosArray];
    const btnsNav = document.querySelector(`#${barra.id}`).children;
    let ActualPage = 1;
    let lastPage = Math.round(focusElements.length/cantidad);
    updateElements(updatePage(focusElements, 1, cantidad), ubicacion);
    btnsNav[1].innerText = `${ActualPage} - ${lastPage}`;
    btnsNav[0].onclick = ()=>
    {
        if(ActualPage > 1)
        {
            ActualPage--;
            recursos.style.transform = 'translate(-1200px, 0px)'
            recursos.style.transition = '1.5s'
            setTimeout(() => {
                updateElements(updatePage(focusElements, ActualPage, cantidad), ubicacion);
                recursos.style.transform = 'translate(0px, 0px)'
            }, 1500);
            btnsNav[1].innerText = `${ActualPage} - ${lastPage}`
        }
    }
    btnsNav[2].onclick = ()=>
    {
        if(ActualPage < lastPage)
        {
            ActualPage++
            recursos.style.transform = 'translate(1200px, 0px)'
            recursos.style.transition = '1.5s'
            setTimeout(() => {
                updateElements(updatePage(focusElements, ActualPage, cantidad), ubicacion);
                recursos.style.transform = 'translate(0px, 0px)'
            }, 1500);
            updateElements(updatePage(focusElements, ActualPage, cantidad), ubicacion);
            btnsNav[1].innerText = `${ActualPage} - ${lastPage}`
        }
    }
}