document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) { // Trigger earlier for smoother reveal
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 1s ease-out, transform 1s cubic-bezier(0.25, 1, 0.5, 1)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on page load
});
