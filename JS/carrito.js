document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();

    document.getElementById('container-icon').addEventListener('click',
        function () {
            document.getElementById('container-cart').classList.toggle('hidden');
        });


    // Vaciar carrito
    document.getElementById('vaciar-carrito').addEventListener('click',
        function () {
            localStorage.removeItem('carrito');
            cargarCarrito();
        });

    // Agregar unidad
    document.getElementById('agregar-unidad').addEventListener('click',
        function () {
            console.log('algo')
        });



});



function cargarCarrito() {
    //let containerCarrito = document.getElementById('container-cart');
    let listaCarrito = document.getElementById('container-cart-products');

    listaCarrito.innerHTML = ''

    let contProd = document.getElementById('contador-productos');
    contProd.innerHTML = '';


    let totalCompra = document.getElementById('total-pagar');
    totalCompra.innerHTML = '';

    let total = 0;
    let cantidadProductos = 0;

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        
        let li = document.createElement('li');
        li.textContent = producto.cantidad + ' ' + producto.nombre + ' - $' + (producto.precio * producto.cantidad);
        if (producto.cantidad > 1) {
            cantidadProductos = cantidadProductos + producto.cantidad;
            console.log(cantidadProductos + 'tengo: ' + producto.cantidad);
        } else {
            cantidadProductos++;
            console.log(cantidadProductos + 'entre aca sin sumar x cantidad');
        }
        listaCarrito.appendChild(li);
        
        total += parseInt(producto.precio * producto.cantidad);

    }

    if (carrito.length != 0) {
        let h2 = document.createElement('h2');
        let contador = document.createElement('h3');
        contador.textContent = cantidadProductos.toLocaleString();
        contProd.appendChild(contador);
        h2.textContent = "$" + total.toLocaleString();
        totalCompra.appendChild(h2);

        document.getElementById('cart-empty').classList.add('hidden');
        document.getElementById('cart-total').classList.remove('hidden');
        document.getElementById('container-cart').classList.remove('hidden');
        document.getElementById('container-cart-products').classList.remove('hidden');
        document.getElementById('contador-productos').classList.remove('hidden');

    } else {
        document.getElementById('cart-empty').classList.remove('hidden');
        document.getElementById('cart-total').classList.add('hidden');
        document.getElementById('container-cart').classList.add('hidden');
        document.getElementById('container-cart-products').classList.add('hidden');
        document.getElementById('contador-productos').classList.add('hidden');
    }
}

