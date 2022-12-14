import Swiper, {Navigation} from 'swiper';

const swiperTrainers = document.querySelectorAll('.trainers__swiper');
const swiperReviews = document.querySelectorAll('.reviews__swiper');
const swiperLists = document.querySelectorAll('.swiper-wrapper');
const swiperButtons = document.querySelectorAll('[data-swiper-button]');

const addTrainersSwiper = () => {

  if (!swiperTrainers) {
    return;
  }

  const swiper = new Swiper('.trainers__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    watchOverflow: true,
    loop: true,

    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
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
  });
  swiper.init();
  const duplicates = document.querySelectorAll('.swiper-slide-duplicate');
  duplicates.forEach((el) => el.removeAttribute('tabindex'));
};

const addReviewsSwiper = () => {
  if (!swiperReviews) {
    return;
  }

  const swiper = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 1,
    watchOverflow: true,
    loop: false,
    autoHeight: true,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

  });
  swiper.init();
};

const removeClasses = () => {
  if (!swiperButtons || !swiperLists) {
    return;
  }

  swiperButtons.forEach((el) => el.classList.remove('no-js'));
  swiperLists.forEach((el) => el.classList.remove('no-js'));
};

export {addTrainersSwiper, addReviewsSwiper, removeClasses};
