const swiper = document.querySelector('.swiper').swiper;

let swiperPriceBlock = new Swiper('.swiper', {
    simulateTouch: true,
    loop: true,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewPort: true
    },
   slidesPerView: 3,
   spaceBetween: 25,
   autoplay: {
		delay: 1500,
	},
    breakpoints: {
      // when window width is >= 320px
      320: {
        loop: true,
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
        slidesPerView: 3,

      }
    }
  });

window.addEventListener("resize", e => {
  swiperPriceBlock.update()
//     if(document.documentElement.clientWidth >= 1400) {
//       swiperPriceBlock.disable();
//     }
//     else {
//       swiperPriceBlock.enable();
//     }
});
  