function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Popup Message
const contactForm = document.querySelector(".contact-form");
const popup = document.getElementById("popup");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default submit for demo

    // Show success popup
    popup.classList.add("show");

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);

    // Reset form fields
    contactForm.reset();
});
/* -------------------------------------------
   EXTRA RESPONSIVE FIXES FOR MOBILE MENU
--------------------------------------------*/

// Close menu when a link is clicked (mobile only)
const allNavLinks = document.querySelectorAll("#navLinks a");

allNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            document.getElementById("navLinks").style.display = "none";
            navLinks.classList.remove("active");
        }
    });
});

// Auto fix menu display when rotated or resized
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        document.getElementById("navLinks").style.display = "flex";
        navLinks.classList.remove("active");
    }
});

