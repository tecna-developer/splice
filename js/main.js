"use strict";

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".nav__items");


burger.addEventListener("click", ()=> {
    menu.classList.toggle ("active");
});      
     