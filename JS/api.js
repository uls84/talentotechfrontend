
function traer() {
    const contenido = document.getElementById('contenido');

    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            console.log(res.results[0].email);

            contenido.innerHTML = `
            <img src="${res.results[0].picture.large}" width="150px" class="img-fluid rouded-circle"></img>
            <p>Nombre: ${res.results[0].name.first}</p>
            <p>Email: ${res.results[0].email}</p>
            <p>País: ${res.results[0].location.country}</p>
            `;
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}

/*
fetch('https://randomuser.me/api')
.then((response) => response.json())
.then((data) => {
const contenedor =
    document.getElementById('randomuser-container');
data.forEach((review) => {
    contenedor.innerHTML += `
<div class="card">
            <img src="${res.results[0].picture.large}" width="150px" class="img-fluid rouded-circle"></img>
    <p>Nombre: ${res.results[0].name.first}</p>
    <p>Email: ${res.results[0].email}</p>
    <p>País: ${res.results[0].location.country}</p>
    </div>
`
});
})
.catch((error) => console.error("Error al obtener reviews:", error));*/