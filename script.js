function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    toggleModules();
} 

function toggleModules() {
    const modules = document.getElementById('display-modules');
    modules.classList.toggle('open');
}
