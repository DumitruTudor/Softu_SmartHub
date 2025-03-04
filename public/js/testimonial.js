let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Function to show a slide based on given index
function showSlide(index) 
{

    // If the index is greater than total slides, go back to the beginning
    if (index >= totalSlides) 
    {
        currentIndex = 0;
    } 
    else if (index < 0) 
    {
        currentIndex = totalSlides - 1;
    } 
    else 
    {
        currentIndex = index;
    }

    // Calculating offset for the slide position
    // The offset moves the container by -100% for each slide to display the next one
    const offset = -currentIndex * 100;

    // Applying the offset to translateX property in order to show correct slide
    document.querySelector('.testimonial-container').style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => 
{
    showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => 
{
    showSlide(currentIndex - 1);
});

showSlide(currentIndex);  
