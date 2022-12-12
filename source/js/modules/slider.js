import Swiper, {Navigation} from 'swiper';

const swiperTrainers = document.querySelectorAll('.trainers__swiper');
const swiperTrainersList = document.querySelector('.trainers__list');
const swiperTrainersButtons = document.querySelectorAll('.trainers__button');

const addTrainersSwiper = () => {

  if (!swiperTrainers) {
    return;
  }

  const swiper = new Swiper('.trainers__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 40,
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

  if (swiperTrainersButtons || swiperTrainersList) {
    swiperTrainersButtons.forEach((el) => el.classList.remove('trainers__button--no-js'));
    swiperTrainersList.classList.remove('trainers__list--no-js');
  }
};

export {addTrainersSwiper};
