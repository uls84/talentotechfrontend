/*
let slideIndex = 0;
const slides = document.querySelectorAll('.slide'); // Obtener todos los slides
const totalSlides = slides.length; // Contar el número total de slides

function showSlides(index) {
    // Asegúrate de que el índice esté en el rango correcto
    slideIndex = (index + totalSlides) % totalSlides; // Crea un bucle
    const offset = -slideIndex * 100; // Calcular el desplazamiento
    document.querySelector('.slides').style.transform = translateX(`<span class="hljs-subst">${offset}</span>%`); // Aplicar la transformación
}

// Funciones de navegación
document.getElementById('prevBtn').addEventListener('click', function() {
    showSlides(slideIndex - 1); // Mostrar la diapositiva anterior
});

document.getElementById('nextBtn').addEventListener('click', function() {
    showSlides(slideIndex + 1); // Mostrar la siguiente diapositiva
});

// Intervalo automático para cambiar de diapositiva
setInterval(() => {
    showSlides(slideIndex + 1);
}, 3000); // Cambia cada 3000 ms (3 segundos)

// Mostrar la primera diapositiva
showSlides(slideIndex);

*/

let slideIndex = 0;
const slides = document.querySelectorAll('.slide'); // Obtener todos los slides
const totalSlides = slides.length; // Contar el número total de slides

function showSlides(index) {
    // Asegúrate de que el índice esté en el rango correcto
    slideIndex = (index + totalSlides) % totalSlides; // Crea un bucle
    const offset = -slideIndex * 100; // Calcular el desplazamiento
    document.querySelector('.slides').style.transform = translateX(`<span class="hljs-subst">${offset}</span> %`); // Aplicar la transformación
}

// Funciones de navegación
document.getElementById('prevBtn').addEventListener('click', function () {
    showSlides(slideIndex - 1); // Mostrar la diapositiva anterior
});

document.getElementById('nextBtn').addEventListener('click', function () {
    showSlides(slideIndex + 1); // Mostrar la siguiente diapositiva
});

// Intervalo automático para cambiar de diapositiva
setInterval(() => {
    showSlides(slideIndex + 1);
}, 3000); // Cambia cada 3000 ms (3 segundos)

// Mostrar la primera diapositiva
showSlides(slideIndex);

