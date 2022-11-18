import { isEscapeKey } from './util.js';
import { resetZoom } from './zoom.js';
import { resetEffect } from './change-effects.js';

const userModal = document.querySelector('.img-upload__overlay');
const modalOpenElement = document.querySelector('#upload-file');
const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    uploadForm.reset();
  }
};

const openUserModal = () => {
  userModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const closeUserModal = () => {
  userModal.classList.add('hidden');
  body.classList.remove('modal-open');
  resetZoom();
  resetEffect();
  document.removeEventListener('keydown', onPopupEscKeydown);
};

modalOpenElement.addEventListener('change', openUserModal);

uploadForm.addEventListener('reset', closeUserModal);


export {uploadForm, modalOpenElement, openUserModal, closeUserModal};