// HAMBURGER MENU
const MainMenu = document.querySelector('.navigationbar')
const OpenMenu = document.querySelector('.hamburger-menu')
const CloseMenu = document.querySelector('.close-hamburger-menu')
const contacts = document.querySelector("a[href='#contact']");
const useful_links = document.querySelector("a[href='#read']");


if (contacts) {
    contacts.addEventListener('click', onClick);
}

if (useful_links) {
    useful_links.addEventListener('click', onClick);
}

function onClick(e) {
    close();
}

OpenMenu.addEventListener('click', show);
CloseMenu.addEventListener('click', close);
// contacts.addEventListener('click', onClick);
// useful_links.addEventListener('click', onClick);



function show() {
    MainMenu.style.display = "flex";
    MainMenu.style.top = "0";
    MainMenu.style.backgroundcolor = "beinge";

}

function close() {
    MainMenu.style.top = "-100%";

}