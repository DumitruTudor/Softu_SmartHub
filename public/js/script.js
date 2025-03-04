document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message sent!");
        this.reset();
    });
});
