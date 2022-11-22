import { sendData } from './api.js';
import { messageSuccess, messageError } from './util.js';
const uploadFormElement = document.querySelector('.img-upload__form');
const submitButtonElement = uploadFormElement.querySelector('.img-upload__submit');


const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Сохранить';
};

const setFormSubmit = () => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(
      () => {
        uploadFormElement.reset();
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


