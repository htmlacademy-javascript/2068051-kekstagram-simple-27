import { isEscapeKey } from './util.js';
import { resetZoom } from './zoom.js';
import { resetEffect } from './change-effects.js';
import { setImageOnChange } from './user-photo.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const bodyElement = document.querySelector('body');
const uploadFormElement = document.querySelector('.img-upload__form');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadFormElement.reset();
  }
};

const openUserModal = () => {
  userModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const onChangeFile = (evt) => {
  openUserModal();
  setImageOnChange(evt);
};

const closeUserModal = () => {
  userModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetZoom();
  resetEffect();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

modalOpenElement.addEventListener('change', onChangeFile);

uploadFormElement.addEventListener('reset', closeUserModal);


export {closeUserModal};
