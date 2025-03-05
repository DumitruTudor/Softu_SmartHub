document.addEventListener("DOMContentLoaded", () => 
{
    document.querySelectorAll("nav ul li a").forEach(anchor => 
    {
        // When a navigation link is clicked, prevent the default link behavior
        anchor.addEventListener("click", function (e) 
        {
            e.preventDefault();
            // Use the 'href' attribute of the anchor tag to find the corresponding section
            // Then scroll to that section smoothly
            document.querySelector(this.getAttribute("href")).scrollIntoView(
            {
                behavior: "smooth"
            });
        });
    });
    
    // Add a 'submit' event listener to the contact form with the ID 'contact-form'
    document.getElementById("contact-form").addEventListener("submit", function (e) 
    {
        e.preventDefault();
        alert("Message sent!"); // Display alert to inform user that the message was sent
        this.reset(); // Reset fields after submission
    });
    
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Toggle Menu
    menuToggle.addEventListener("click", function () 
    {
        navMenu.classList.toggle("show");
    });
    
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const featuresSection = document.getElementById("features");

    if (learnMoreBtn && featuresSection) {
        learnMoreBtn.addEventListener("click", function () {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
