"use strict";let burger=document.querySelector(".header__burger"),menu=document.querySelector(".header__menu");burger.addEventListener("click",(e=>{burger.classList.toggle("_active"),menu.classList.toggle("_active"),document.body.classList.toggle("_lock")}));const filter=document.querySelector(".filter");if(filter){filter.querySelectorAll(".block-filter").forEach((e=>{e.addEventListener("click",(t=>{e.querySelector(".block-filter__dropdown").classList.toggle("_active"),e.querySelector(".block-filter__icon").classList.toggle("_active"),t.target.classList.contains("block-filter__item")&&(e.querySelector(".block-filter__value").textContent=t.target.textContent)}))}))}const swiper=new Swiper(".swiper",{spaceBetween:20,slidesPerView:3,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});