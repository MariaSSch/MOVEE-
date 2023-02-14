const swiper = document.querySelector('.swiper');

let swiperPriceBlock = new Swiper(swiper, {
    simulateTouch: true,
    slideToClickedSlide: true,
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
  });

window.addEventListener("resize", swiperPriceBlock.update()
//     if(document.documentElement.clientWidth >= 1400) {
//       swiperPriceBlock.disable();
//     }
//     else {
//       swiperPriceBlock.enable();
//     }
);
  