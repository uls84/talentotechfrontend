/*    fetch('./productos.JSON')
      .then(response => {

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the fetched JSON data
        console.log(data);
        // You can now use 'data' to update your HTML or perform other operations
      })
      .catch(error => {
        console.error('Error fetching the JSON file:', error);
      });
      */
const products = document.getElementsByClassName('productos');
const divCard = document.createElement('div');



fetch('../JS/productos.JSON')
    .then(res => {
        if (!res.ok) {
            console.log("Problem");
            return;
        }
        return res.json();
    })
    .then(data => {
        data.forEach(post => {
            divCard.insertAdjacentHTML('beforeend',
                `
                <div class="product-card">
                <img alt="D7500"> ${post.image}</img>
                <h2>${post.name}</h2>
                <p>${post.description}</p>
                <button class="btn-add-cart">Agregar al carrito</button>
                </div>
                `
            ),
            products.append(divCard);
        })})
            .catch(error => {
                console.error('Error fetching the JSON file:', error);
                console.log(error);
            });   