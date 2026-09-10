// Student Portal JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Portal loaded successfully.");

    // Current year automatically appears in footer
    const footer = document.querySelector("footer p");

    const currentYear = new Date().getFullYear();

    footer.textContent =
        `© ${currentYear} Student Portal | College Project`;

    // Navigation active effect
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.style.fontWeight = "normal";
            });

            this.style.fontWeight = "bold";
        });

    });

});