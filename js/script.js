const swiper = new Swiper('.coverflow-swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  watchOverflow: false,
  speed: 800,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },

  pagination: {
    el: '.coverflow-swiper .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.coverflow-swiper .swiper-button-next',
    prevEl: '.coverflow-swiper .swiper-button-prev',
  },
});
const fadeSwiper = new Swiper('.fade-swiper', {
  effect: 'fade',
  slidesPerView: 1,
  loop: true,
  watchOverflow: false,
  speed: 1200,

  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.fade-swiper .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.fade-swiper .swiper-button-next',
    prevEl: '.fade-swiper .swiper-button-prev',
  },
});
({watchOverflow: false,
loop: true,
grabCursor: true, 
speed: 1200,
effect: "fade", })