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


function setupCopy(buttonId, textId, successMessage) {
    const btn = document.getElementById(buttonId);
    const text = document.getElementById(textId);

    if (btn && text) {
        btn.addEventListener("click", () => {
            navigator.clipboard.writeText(text.innerText).then(() => {
                alert(successMessage);
            });
        });
    }
}

setupCopy("copyEmailBtn", "emailText", "Email copied!");
setupCopy("copyPhoneBtn", "phoneText", "Phone number copied!");