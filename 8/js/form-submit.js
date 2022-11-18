import { sendData } from './api.js';
import { messageSuccess, messageError } from './util.js';
const uploadForm = document.querySelector('.img-upload__form');
const submitButton = uploadForm.querySelector('.img-upload__submit');


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


