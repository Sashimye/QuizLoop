const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active")
});

const logos = document.querySelector(".rotating-logos__track").cloneNode(true);
document.querySelector(".rotating-logos").appendChild(logos);

// Set dynamic year if the element exists
window.addEventListener("load", () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});