// Tell the CSS that JavaScript is working (used by the scroll animation)
document.documentElement.classList.add("js");

/* ===== 1. Mobile menu ===== */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
}

// Click the hamburger: open or close the menu
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Click a link inside the menu: close the menu
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Press the Escape key: close the menu
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

/* ===== 2. Scroll animation ===== */
const revealItems = document.querySelectorAll(".reveal");

// IntersectionObserver tells us when an element comes into the screen
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only one time
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(function (item) {
    observer.observe(item);
});

/* ===== 3. Subscribe form ===== */
const form = document.querySelector(".subscribe-form");
const formMessage = document.querySelector(".form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading
    formMessage.textContent = "Thank you for subscribing! 🎉";
    form.reset(); // clear the input
});

/* ===== 4. Footer year ===== */
document.getElementById("year").textContent = new Date().getFullYear();
