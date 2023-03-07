const Menu = document.querySelector(".menu");
const OpenMenuBtn = document.querySelector(".Open-Menu");
const CloseMenuBtn = document.querySelector(".Close-Menu");

function toggleMenu(){
    Menu.classList.toggle("menu-opened");
}

OpenMenuBtn.addEventListener("click", toggleMenu);
CloseMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^=\"#\"]')

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", function(){
        Menu.classList.remove("menu-opened");
    })
})