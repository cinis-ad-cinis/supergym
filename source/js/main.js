import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  setupVideo(vid);

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

const vid = document.querySelector('.video');
const tabButtons = document.querySelectorAll('.membership__button');
const tabs = document.querySelectorAll('.membership__list');

// Video

const setupVideo = (video) => {
  if (vid) {
    let link = video.querySelector('.video__link');
    let button = video.querySelector('.video__button');

    video.addEventListener('click', () => {
      let iframe = createIframe();

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
  }

  const createIframe = () => {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL());
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('width', '364px');
    iframe.setAttribute('height', '228px');
    iframe.classList.add('video__cover');

    return iframe;
  };

  const generateURL = () => {
    let id = vid.getAttribute('data-id');
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  };
};

// Tabs

tabButtons.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const id = evt.target.getAttribute('data-button');
    const currentTab = document.querySelector(`[data-tab='${id}']`);

    tabButtons.forEach((elem) => elem.classList.remove('membership__button--active'));
    tabs.forEach((elem) => elem.classList.remove('membership__list--active'));

    item.classList.add('membership__button--active');
    currentTab.classList.add('membership__list--active');
  });
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
