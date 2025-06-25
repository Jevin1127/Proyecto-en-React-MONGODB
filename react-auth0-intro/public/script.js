var swiper = new Swiper(".mySwiper-1",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});

var swiper = new Swiper(".mySwiper-2",{
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints : {
        0:{
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }

});


//carrito

const carrito = document.getElementById('carrito');
const elemetos1 = document.getElementById('lista-1');
const elemetos2 = document.getElementById('lista-2');
const elemetos3 = document.getElementById('lista-3');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');


cargarEventListener();

function cargarEventListener(){
    elemetos1.addEventListener('click', comprarElemento);
    elemetos2.addEventListener('click', comprarElemento);
    elemetos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', EliminarElemento);

    vaciarcarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
      const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').innerText,
        precio: elemento.querySelector('p').innerText,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src="${elemento.imagen}" width=100>
    </td>

    <td>
    ${elemento.titulo}
    </td>

    <td>
    ${elemento.precio}
    </td>

    <td>
    <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>
    `;

    lista.appendChild(row);
}

function EliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoid;
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoid = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}