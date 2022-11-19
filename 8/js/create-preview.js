const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');
const listOfPictures = document.querySelector('.pictures');

const renderListOfPictures = (usersPhotos) => {
  const picturesFragment = document.createDocumentFragment();

  usersPhotos.forEach (({url,likes, comments}) => {
    const imageElement = template.cloneNode(true);
    imageElement.querySelector('.picture__img').src = url;
    imageElement.querySelector('.picture__likes').textContent = likes;
    imageElement.querySelector('.picture__comments').textContent = comments;
    picturesFragment.appendChild(imageElement);
  });
  listOfPictures.appendChild(picturesFragment);
};

export { renderListOfPictures };
