document.addEventListener('DOMContentLoaded', function () {
    cargarCarrito();

    document.getElementById('container-icon').addEventListener('click', function () {
        document.getElementById('container-cart').classList.toggle('hidden');
    });

    // Vaciar carrito
    document.getElementById('vaciar-carrito').addEventListener('click', function () {
        localStorage.removeItem('carrito');
        cargarCarrito();
    });

});

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    cargarCarrito();
    console.log("Hasta aca llegue wahim")
}

function cargarCarrito() {
    let listaCarrito = document.getElementById('container-cart-products');
    listaCarrito.innerHTML = '';

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

        // Crear botón para agregar unidad
        let btnAgregar = document.createElement('button');
        btnAgregar.innerHTML = '<i class="fa-solid fa-plus"></i>';
        btnAgregar.classList.add('btn-agregar');
        btnAgregar.addEventListener('click', function () {
            producto.cantidad++;
            guardarCarrito(carrito);
            cargarCarrito();
        });

        // Crear botón para quitar unidad
        let btnQuitar = document.createElement('button');
        btnQuitar.innerHTML = '<i class="fa-solid fa-minus"></i>';
        btnQuitar.classList.add('btn-quitar');
        btnQuitar.addEventListener('click', function () {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
                carrito.splice(i, 1); // Eliminar el producto del carrito si la cantidad es 1
            }
            guardarCarrito(carrito);
            cargarCarrito();
        });

        // Crear botón para borrar elemento
        let btnBorrar = document.createElement('button');
        btnBorrar.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        btnBorrar.classList.add('btn-borrar');
        btnBorrar.addEventListener('click', function () {
            if (carrito.length > 1) {
                carrito.splice(i, 1); // Eliminar el producto del carrito si la cantidad es 1
                guardarCarrito(carrito);
                cargarCarrito();
            } else {
                vaciarCarrito();
            }
        });

        // Agregar los botones a la lista
        li.appendChild(btnAgregar);
        li.appendChild(btnQuitar);
        li.appendChild(btnBorrar);

        listaCarrito.appendChild(li);

        total += parseInt(producto.precio * producto.cantidad);
        cantidadProductos += producto.cantidad;
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

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// CHECKOUT

function cargarCarritoCheckout() {
    let cartItemsContainer = document.getElementById('cart-items');
    //let totalPagar = document.getElementById('total-pagar');
    let pagarCheckout = document.getElementById('total-checkout');
    cartItemsContainer.innerHTML = '';

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;

    for (let producto of carrito) {
        let div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${producto.cantidad} x ${producto.nombre} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
        cartItemsContainer.appendChild(div);
        total += producto.precio * producto.cantidad;
    }

    //totalPagar.textContent = `Total: $${total.toFixed(2)}`;
    pagarCheckout.textContent = `Total: $${total.toFixed(0)}`;
}

function realizarCompra() {
    document.addEventListener('click')
}
// Llamar a la función para cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', cargarCarritoCheckout);

// CHECKOUT mandar datos por mail

