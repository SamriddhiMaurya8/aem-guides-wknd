
let topSlide = 0;
const slides = document.querySelectorAll('.mainCarousel__slide');
const dots = document.querySelectorAll('.mainCarousel__navigation--dots-dot');

function showSlide(n) {
    slides[topSlide].classList.remove('active');
    dots[topSlide].classList.remove('active');
    topSlide = (n + slides.length) % slides.length;
    slides[topSlide].classList.add('active');
    dots[topSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(topSlide + n);
}

function goToSlide(n) {
    showSlide(n);
}


setInterval(() => changeSlide(1), 5000);













