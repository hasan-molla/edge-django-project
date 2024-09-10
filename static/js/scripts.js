// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});
