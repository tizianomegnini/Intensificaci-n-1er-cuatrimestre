let currentIndex = 0;
const images = document.querySelectorAll('.banner-images img');
const totalImages = images.length;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}
setInterval(autoSlide, 10000); 
showImage(currentIndex);
