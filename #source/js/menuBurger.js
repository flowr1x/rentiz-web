let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");

burger.addEventListener("click", event => {
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
});