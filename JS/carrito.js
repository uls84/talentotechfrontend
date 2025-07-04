document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();
});


// Agregar producto al carrito
let botonesAgregar =
    document.getElementsByClassName('agregar-carrito');
for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarProducto);
}


// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click',
    function () {
        localStorage.removeItem('carrito');
        cargarCarrito();
    });


function agregarProducto(event) {
    let producto = {
        id: event.target.getAttribute('data-id'),
        nombre: event.target.getAttribute('data-nombre'),
        precio: event.target.getAttribute('data-precio')
    };


    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}


function cargarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    let totalCompra = document.getElementById('totalCompra');
    totalCompra.innerHTML = '';

    let total = 0;

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];


        let li = document.createElement('li');
        li.textContent = producto.nombre + ' - $' + producto.precio;
        listaCarrito.appendChild(li);

        total +=parseInt(producto.precio);

    }

    if (carrito != 0) {
        let h2 = document.createElement('h2');
        h2.textContent = "$" + total.toLocaleString();
        totalCompra.appendChild(h2);
    }
}

