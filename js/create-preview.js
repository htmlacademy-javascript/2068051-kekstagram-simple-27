import {generateUsersPhotos} from './data.js';
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');
const listOfPictures = document.querySelector('.pictures');

const picturesFragment = document.createDocumentFragment();

const usersPhotos = generateUsersPhotos(25);

usersPhotos.forEach (({urlPhoto,likes, comments}) => {
  const imageElement = template.cloneNode(true);
  imageElement.querySelector('.picture__img').src = urlPhoto;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comments;
  picturesFragment.appendChild(imageElement);
});

listOfPictures.appendChild(picturesFragment);
