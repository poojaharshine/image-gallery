let currentIndex = 0;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function changeSlide(n) {
    currentIndex += n;
    showSlide(currentIndex);
}

function showSlide(index) {
    const images = document.querySelectorAll('.gallery img');
    if (index > images.length) {
        currentIndex = 1;
    } else if (index < 1) {
        currentIndex = images.length;
    }
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = images[currentIndex - 1].src;
}

// To initialize the lightbox with the first image when it is opened
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.gallery img').click();
});
