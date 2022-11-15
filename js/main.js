import {closeUserModal} from './user-modal.js';
import './user-modal.js';
import './change-effects.js';
import './zoom.js';
import { setFormSubmit } from './data.js';
import './api.js';
setFormSubmit(closeUserModal);
import { renderListOfPictures } from './create-preview.js';
import './user-photo.js';

fetch('https://27.javascript.pages.academy/code-and-magick/data')
  .then((response) => response.json())
  .then((photos) => {
    renderListOfPictures(photos);
  });
