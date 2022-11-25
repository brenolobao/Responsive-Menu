const container = document.querySelector('.container');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu');
const navHome = document.querySelector('#nav-home');
const navContacts = document.querySelector('#nav-contacts');
const navProducts = document.querySelector('#nav-products');
const navServices = document.querySelector('#nav-services');
const navAbout = document.querySelector('#nav-about');

openMenu.addEventListener('click', function () {
    menu.className = "menu active";
    navHome.className = "nav-item nav-active";
    navContacts.className = "nav-item nav-active";
    navProducts.className = "nav-item nav-active";
    navServices.className = "nav-item nav-active";
    navAbout.className = "nav-item nav-active";
});
closeMenu.addEventListener('click', function () {
    menu.className = "menu";

});
navHome.addEventListener('click', function () {
    menu.className = "menu";

});
navContacts.addEventListener('click', function () {
    menu.className = "menu";

});
navProducts.addEventListener('click', function () {
    menu.className = "menu";

});
navServices.addEventListener('click', function () {
    menu.className = "menu";

});
navAbout.addEventListener('click', function () {
    menu.className = "menu";

});
