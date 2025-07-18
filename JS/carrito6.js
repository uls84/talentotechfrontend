/* document.addEventListener('DOMContentLoaded', function() {
    // ========== CÓDIGO MEJORADO DEL CARRITO ==========
    const btnCart = document.querySelector('.container-cart-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');
    
    // Mostrar/ocultar carrito
    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
    });

    // Elementos del DOM
    const rowProduct = document.querySelector('.row-product');
    const productsList = document.querySelector('.container-items');
    const valorTotal = document.querySelector('.total-pagar');
    const countProducts = document.querySelector('#contador-productos');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartTotal = document.querySelector('.cart-total');
    
    // Cargar carrito desde localStorage al iniciar
    let allProducts = JSON.parse(localStorage.getItem('carrito')) || [];
    showHTML();

    // ========== AGREGAR PRODUCTOS ==========
    productsList.addEventListener('click', e => {
        if (e.target.classList.contains('btn-add-cart')) {
            const product = e.target.closest('.product');
            if (!product) return;

            const infoProduct = {
                id: e.target.getAttribute('data-id'),
                title: product.querySelector('h2').textContent,
                price: product.querySelector('p').textContent,
                quantity: 1
            };

            // Verificar si el producto ya existe
            const existingProductIndex = allProducts.findIndex(p => p.id === infoProduct.id);
            
            if (existingProductIndex !== -1) {
                // Incrementar cantidad si ya existe
                allProducts[existingProductIndex].quantity++;
            } else {
                // Agregar nuevo producto
                allProducts.push(infoProduct);
            }

            saveCart();
            showHTML();
        }
    });

    // ========== MANIPULAR PRODUCTOS EN CARRITO ==========
    rowProduct.addEventListener('click', e => {
        const productElement = e.target.closest('.cart-product');
        if (!productElement) return;

        const productId = productElement.getAttribute('data-id');
        const productIndex = allProducts.findIndex(p => p.id === productId);
        if (productIndex === -1) return;

        if (e.target.classList.contains('icon-close')) {
            // Eliminar producto
            allProducts.splice(productIndex, 1);
        } else if (e.target.classList.contains('btn-increment')) {
            // Incrementar cantidad
            allProducts[productIndex].quantity++;
        } else if (e.target.classList.contains('btn-decrement')) {
            // Decrementar cantidad (mínimo 1)
            if (allProducts[productIndex].quantity > 1) {
                allProducts[productIndex].quantity--;
            }
        }

        saveCart();
        showHTML();
    });

    // ========== VACIAR CARRITO ==========
    document.getElementById('vaciar-carrito').addEventListener('click', function() {
        allProducts = [];
        saveCart();
        showHTML();
    });

    // ========== REALIZAR COMPRA ==========
    document.getElementById('realizar-compra').addEventListener('click', function() {
        if (allProducts.length === 0) {
            alert('El carrito está vacío');
            return;
        }
        showCheckoutForm();
    });

    // ========== FUNCIONES AUXILIARES ==========
    function saveCart() {
        localStorage.setItem('carrito', JSON.stringify(allProducts));
    }

    function showHTML() {
        // Mostrar u ocultar elementos según contenido
        if (allProducts.length === 0) {
            cartEmpty.classList.remove('hidden');
            rowProduct.classList.add('hidden');
            cartTotal.classList.add('hidden');
        } else {
            cartEmpty.classList.add('hidden');
            rowProduct.classList.remove('hidden');
            cartTotal.classList.remove('hidden');
        }

        // Limpiar y regenerar productos
        rowProduct.innerHTML = '';
        let total = 0;
        let totalOfProducts = 0;

        allProducts.forEach(product => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('cart-product');
            containerProduct.setAttribute('data-id', product.id);

            // Crear elemento con botones de cantidad
            containerProduct.innerHTML = `
                <div class="info-cart-product">
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <div class="quantity-controls">
                        <button class="btn-quantity btn-decrement">-</button>
                        <span class="cantidad-producto-carrito">${product.quantity}</span>
                        <button class="btn-quantity btn-increment">+</button>
                    </div>
                    <span class="precio-producto-carrito">${product.price}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;

            rowProduct.appendChild(containerProduct);

            // Calcular totales
            const priceNumber = parseFloat(product.price.replace(/[^0-9.]/g, ''));
            total += priceNumber * product.quantity;
            totalOfProducts += product.quantity;
        });

        // Actualizar totales
        valorTotal.innerText = `$${total.toLocaleString()}`;
        countProducts.innerText = totalOfProducts;
    }

    function showCheckoutForm() {
        // Crear formulario
        const formHTML = `
            <div class="checkout-modal">
                <div class="checkout-content">
                    <h2>Finalizar Compra</h2>
                    <form id="checkout-form">
                        <div class="form-group">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="apellido">Apellido:</label>
                            <input type="text" id="apellido" required>
                        </div>
                        <div class="form-group">
                            <label for="telefono">Teléfono:</label>
                            <input type="tel" id="telefono" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-buttons">
                            <button type="submit" class="btn-confirm">Confirmar Compra</button>
                            <button type="button" class="btn-cancel">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        // Insertar formulario en el DOM
        document.body.insertAdjacentHTML('beforeend', formHTML);
        const modal = document.querySelector('.checkout-modal');

        // Manejar envío del formulario
        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica para procesar la compra
            alert('Compra realizada con éxito!');
            // Vaciar carrito después de comprar
            allProducts = [];
            saveCart();
            showHTML();
            modal.remove();
        });

        // Manejar cancelación
        document.querySelector('.btn-cancel').addEventListener('click', function() {
            modal.remove();
        });
    }
});
*/

document.addEventListener('DOMContentLoaded', function() {
    // ================== SELECTORES DEL DOM ==================
    const btnCart = document.querySelector('.container-cart-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');
    const rowProduct = document.querySelector('.row-product');
    const productsList = document.querySelector('.container-items');
    const valorTotal = document.querySelector('.total-pagar');
    const countProducts = document.querySelector('#contador-productos');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartTotal = document.querySelector('.cart-total');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const realizarCompraBtn = document.getElementById('realizar-compra');
    
    // ================== INICIALIZACIÓN DEL CARRITO ==================
    let allProducts = JSON.parse(localStorage.getItem('carrito')) || [];
    updateCart();

    // ================== EVENT LISTENERS ==================
    // 1. Mostrar/ocultar carrito
    if(btnCart && containerCartProducts) {
        btnCart.addEventListener('click', () => {
            containerCartProducts.classList.toggle('hidden-cart');
        });
    }

    // 2. Agregar productos
    if(productsList) {
        productsList.addEventListener('click', e => {
            if(e.target.classList.contains('btn-add-cart')) {
                const productElement = e.target.closest('.product');
                if(!productElement) return;
                
                addProductToCart(productElement, e.target);
            }
        });
    }

    // 3. Manipular productos en carrito
    if(rowProduct) {
        rowProduct.addEventListener('click', e => {
            const productElement = e.target.closest('.cart-product');
            if(!productElement) return;
            
            const productId = productElement.dataset.id;
            const productIndex = allProducts.findIndex(p => p.id === productId);
            
            if(productIndex === -1) return;
            
            if(e.target.classList.contains('icon-close')) {
                // Eliminar producto
                allProducts.splice(productIndex, 1);
            } else if(e.target.classList.contains('btn-increment')) {
                // Aumentar cantidad
                allProducts[productIndex].quantity++;
            } else if(e.target.classList.contains('btn-decrement')) {
                // Disminuir cantidad (mínimo 1)
                if(allProducts[productIndex].quantity > 1) {
                    allProducts[productIndex].quantity--;
                }
            }
            
            saveCart();
            updateCart();
        });
    }

    // 4. Vaciar carrito
    if(vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            allProducts = [];
            saveCart();
            updateCart();
        });
    }

    // 5. Realizar compra
    if(realizarCompraBtn) {
        realizarCompraBtn.addEventListener('click', showCheckoutForm);
    }

    // ================== FUNCIONES PRINCIPALES ==================
    function addProductToCart(productElement, buttonElement) {
        const infoProduct = {
            id: buttonElement.dataset.id || Date.now().toString(), // ID único
            title: productElement.querySelector('h2')?.textContent || 'Producto sin nombre',
            price: productElement.querySelector('p')?.textContent || '0',
            quantity: 1
        };
        
        // Verificar si el producto ya existe
        const existingIndex = allProducts.findIndex(p => p.id === infoProduct.id);
        
        if(existingIndex !== -1) {
            // Producto existe: aumentar cantidad
            allProducts[existingIndex].quantity++;
        } else {
            // Producto nuevo: agregar
            allProducts.push(infoProduct);
        }
        
        saveCart();
        updateCart();
    }
    
    function updateCart() {
        // Actualizar estado del carrito (vacío/lleno)
        if(allProducts.length === 0) {
            cartEmpty?.classList.remove('hidden');
            rowProduct?.classList.add('hidden');
            cartTotal?.classList.add('hidden');
        } else {
            cartEmpty?.classList.add('hidden');
            rowProduct?.classList.remove('hidden');
            cartTotal?.classList.remove('hidden');
        }
        
        // Limpiar y regenerar productos
        if(rowProduct) rowProduct.innerHTML = '';
        
        let total = 0;
        let totalOfProducts = 0;
        
        allProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('cart-product');
            productElement.dataset.id = product.id;
            
            // Crear elemento con controles de cantidad
            productElement.innerHTML = `
                <div class="info-cart-product">
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <div class="quantity-controls">
                        <button class="btn-quantity btn-decrement">-</button>
                        <span class="cantidad-producto-carrito">${product.quantity}</span>
                        <button class="btn-quantity btn-increment">+</button>
                    </div>
                    <span class="precio-producto-carrito">${formatPrice(product.price)}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;
            
            if(rowProduct) rowProduct.appendChild(productElement);
            
            // Calcular totales
            const priceNumber = parsePrice(product.price);
            total += priceNumber * product.quantity;
            totalOfProducts += product.quantity;
        });
        
        // Actualizar totales
        if(valorTotal) valorTotal.textContent = `$${total.toLocaleString()}`;
        if(countProducts) countProducts.textContent = totalOfProducts;
    }
    
    function saveCart() {
        localStorage.setItem('carrito', JSON.stringify(allProducts));
    }
    
    function showCheckoutForm() {
        if(allProducts.length === 0) {
            alert('🚫 Tu carrito está vacío');
            return;
        }
        
        // Crear formulario
        const formHTML = `
            <div class="checkout-modal" id="checkout-modal">
                <div class="checkout-content">
                    <h2>Finalizar Compra</h2>
                    <form id="checkout-form">
                        <div class="form-group">
                            <label for="nombre">Nombre*</label>
                            <input type="text" id="nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="apellido">Apellido*</label>
                            <input type="text" id="apellido" required>
                        </div>
                        <div class="form-group">
                            <label for="telefono">Teléfono*</label>
                            <input type="tel" id="telefono" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email*</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-buttons">
                            <button type="submit" class="btn-confirm">Confirmar Compra</button>
                            <button type="button" class="btn-cancel">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        
        // Insertar en el DOM
        document.body.insertAdjacentHTML('beforeend', formHTML);
        const modal = document.getElementById('checkout-modal');
        
        // Manejar envío
        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            
            if(!nombre || !apellido || !telefono || !email) {
                alert('Por favor completa todos los campos obligatorios');
                return;
            }
            
            // Procesar compra (aquí iría tu lógica de backend)
            alert(`✅ Compra realizada con éxito!\nGracias ${nombre} ${apellido}`);
            
            // Vaciar carrito y cerrar modal
            allProducts = [];
            saveCart();
            updateCart();
            modal.remove();
        });
        
        // Manejar cancelación
        document.querySelector('.btn-cancel').addEventListener('click', () => {
            modal.remove();
        });
    }
    
    // ================== FUNCIONES AUXILIARES ==================
    function parsePrice(priceString) {
        // Convertir "$1,000.50" → 1000.50
        const numberString = priceString.replace(/[^\d.,]/g, '')
                                       .replace(',', '');
        return parseFloat(numberString) || 0;
    }
    
    function formatPrice(priceString) {
        // Mantener formato original si ya tiene símbolo
        return priceString.includes('$') ? priceString : `$${priceString}`;
    }
});