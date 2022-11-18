import {closeUserModal} from './user-modal.js';
import './user-modal.js';
import './change-effects.js';
import './zoom.js';
import { setFormSubmit } from './form-submit.js';
import { getData } from './api.js';
import { renderListOfPictures } from './create-preview.js';
import './user-photo.js';
import { showAlert } from './util.js';
setFormSubmit(closeUserModal);
getData(
  (photos) => {
    renderListOfPictures(photos);
  },
  () => showAlert('Нет связи с сервером'));


