import {isEscapeKey, isEnterKey} from './util.js';

const userModal = document.querySelector('.img-upload__overlay');
const userModalOpen = document.querySelector('#upload-file');
const userModalClose = document.querySelector('#upload-cancel');
const body = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
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

  document.removeEventListener('keydown', onPopupEscKeydown);
};

userModalOpen.addEventListener('click', () => {
  openUserModal();
});

userModalOpen.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalClose.addEventListener('click', () => {
  closeUserModal();
});
