// script.js

// Seleção dos elementos necessários
const images = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.querySelector('.close');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Função para abrir o modal e exibir a imagem
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
        currentIndex = index; // Salva o índice da imagem selecionada
    });
});

// Função para fechar o modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Função para ir à imagem anterior
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Vai para a última imagem
    }
    modalImage.src = images[currentIndex].src;
});

// Função para ir à próxima imagem
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para a primeira imagem
    }
    modalImage.src = images[currentIndex].src;
});
