let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides(index) {
    slideIndex = (index + totalSlides) % totalSlides; // bucle infinito
    const offset = -slideIndex * 100; 
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.getElementById('prevBtn').addEventListener('click', function () {
    showSlides(slideIndex - 1);
});

document.getElementById('nextBtn').addEventListener('click', function () {
    showSlides(slideIndex + 1);
});

setInterval(() => {
    showSlides(slideIndex + 1);
}, 3000);

showSlides(slideIndex);

