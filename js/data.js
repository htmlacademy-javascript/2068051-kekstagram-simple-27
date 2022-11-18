import { sendData } from './api.js';
import { messageSuccess, messageError } from './util.js';
import { getRandomNumber, getRandomArrayElement } from './random.js';
const uploadForm = document.querySelector('.img-upload__form');
const submitButton = uploadForm.querySelector('.img-upload__submit');

// const DESCRIPTION_TEXTS = [
//   'Мексиканская художница, жена Диего Риверы. В её работах очень сильно влияние народного мексиканского искусства, культуры доколумбовых цивилизаций Америки. Также прослеживается влияние европейской живописи.',
//   'Французский художник, скульптор, график, лидер течения фовистов. Известен своими изысканиями в передаче эмоций через цвет и форму. Мастер декоративного искусства. Работал в разных жанрах и видах искусства, используя различные техники.',
//   'Великий русский живописец, мастер масштабных исторических полотен. Участвовал в росписи хоров Храма Христа Спасителя в Москве. В 1881 году стал членом Товарищества передвижных художественных выставок. Член Санкт-Петербургской академии художеств (1893 г.).',
//   'Всегда начинайте свой день с хороших людей и кофе.',
//   'Ни о чем не беспокойтесь. Потому что все лучшие умы на работе.',
//   'Никогда не бывает хорошего результата, если у вас негативное отношение к этому.',
//   'Жизнь похожа на фотографию. Мы развиваемся только из негативов',
//   'Всегда есть дикая сторона, которая скрывается за самым невинным лицом.',
//   'Дорога к успеху строится постоянно.',
//   'Доброе утро, всем! Теперь давайте начнем стресс!'
// ];

// /**
// * Функция создает объект фотографии с заданными параметрами
// * @param {undefined} - не задан
// * @param {number} index - Порядковый числовой индекс
// */
// const getUserPhoto = (_, index) => {
//   const id = index + 1;
//   return {
//     id,
//     urlPhoto: `photos/${id}.jpg`,
//     description: getRandomArrayElement(DESCRIPTION_TEXTS),
//     likes: getRandomNumber(15, 200),
//     comments: getRandomNumber(0, 200),
//   };
// };

// const generateUsersPhotos = (count) => Array.from({length: count}, getUserPhoto);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(
      () => {
        uploadForm.reset();
        messageSuccess();
        unblockSubmitButton();
      },
      () => {
        messageError();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  });
};


export { setFormSubmit};


