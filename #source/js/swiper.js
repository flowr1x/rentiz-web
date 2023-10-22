const swiper1 = new Swiper('.slider-popular__swiper', {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider-popular__btn_right',
      prevEl: '.slider-popular__btn_left',
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

const swiper2 = new Swiper('.comments__slider', {
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  