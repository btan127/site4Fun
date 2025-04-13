function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

/*function openModal() {
    document.getElementById("contactModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}*/

/*function closeModal() {
    document.getElementById("contactModal").style.display = "none";
    document.body.style.overflow = "auto";
}*/

function openModal(modalType) {
    document.getElementById(`${modalType}Modal`).style.display = "flex";
    document.body.style.overflow = "hidden";
}



function closeModal(modalType) {
    document.getElementById(`${modalType}Modal`).style.display = "none";
    document.body.style.overflow = "auto";
}