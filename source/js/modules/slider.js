import Swiper, {Navigation} from 'swiper';

const addTrainersSwiper = () => {
  document.querySelector('.trainers__list').classList.remove('trainers__list--no-js');

  const swiper = new Swiper('.trainers__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    watchOverflow: true,
    // loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
  swiper.init();
};

export {addTrainersSwiper};
