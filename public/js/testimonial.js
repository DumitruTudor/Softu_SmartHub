let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.testimonial-container').style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

showSlide(currentIndex);  // Initialize the first slide
