//swiper parameters

const params = {

  simulateTouch: true,
  autoplay: {
    delay: 1500,
  },
  loop: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewPort: true
  },
  slidesPerView: 3,
  spaceBetween: 25,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // when window width is >= 320px

    320: {
      slidesPerView: 1,
      spaceBetween: 25
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1400: {
      loop: false,
      grabCursor: false,
      autoplay: false,  
      slidesPerView: 3,

    }
  }
}

let swiperPriceBlock = new Swiper('.pb__price-swiper', params); //autoplay и loop работают постоянно
let swiperPriceFeedback = new Swiper('.feedback__feedback-swiper', params);//autoplay и loop не работают вообще

