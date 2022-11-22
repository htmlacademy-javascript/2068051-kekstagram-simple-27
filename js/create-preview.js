const templateFragment = document.querySelector('#picture').content;
const templateElement = templateFragment.querySelector('.picture');
const listOfPicturesElement = document.querySelector('.pictures');

const renderListOfPictures = (usersPhotos) => {
  const picturesFragment = document.createDocumentFragment();

  usersPhotos.forEach (({url,likes, comments}) => {
    const imageElement = templateElement.cloneNode(true);
    imageElement.querySelector('.picture__img').src = url;
    imageElement.querySelector('.picture__likes').textContent = likes;
    imageElement.querySelector('.picture__comments').textContent = comments;
    picturesFragment.appendChild(imageElement);
  });
  listOfPicturesElement.appendChild(picturesFragment);
};

export { renderListOfPictures };
