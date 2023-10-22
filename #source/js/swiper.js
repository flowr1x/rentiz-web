const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
    }
  });
  