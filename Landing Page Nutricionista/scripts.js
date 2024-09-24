let currentIndex = 0;
const images = document.querySelectorAll('.carousel-container img');

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.getElementById('carouselContainer').style.transform = `translateX(${offset}%)`;
}

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function previous() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    if (peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        document.getElementById('resultadoIMC').innerText = `Seu IMC é: ${imc}`;
    } else {
        document.getElementById('resultadoIMC').innerText = 'Por favor, preencha ambos os campos.';
    }
}