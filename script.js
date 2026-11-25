
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Ouvrir et fermer le menu mobile
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fermer le menu après avoir cliqué sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
