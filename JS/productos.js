
let productContainer = document.getElementById('product-container');
console.log(productContainer);


fetch('../JS/productos.JSON')
  .then(res => {
    if (!res.ok) {
      console.log('No hay dato');
    } return res.json()
  })
  .then(data => {
    data.forEach(post => {
      let divCard = document.createElement('div');
      divCard.classList.add('product-card');
      console.log(divCard);
      divCard.innerHTML = (`
                <img alt="D7500" src=${post.image}></img>
                <h2>${post.name}</h2>
                <p>${post.description}</p>
                <h3>$ ${post.price}</h3>
                <button class="agregar-carrito" data-id=${post.id} data-nombre=${post.name} data-precio=${post.price}>Agregar al carrito</button>
                `
      )
        productContainer.appendChild(divCard);
    })
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
    console.log(error);
  });   