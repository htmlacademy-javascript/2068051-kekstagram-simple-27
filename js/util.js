export const checkMaxLenght = (string, minLenght, maxLenght) => {
  return string >= minLenght && string <= maxLenght
};
checkMaxLenght(50, 20, 140);

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {isEscapeKey, isEnterKey};

const templateMessageSuccess = document.querySelector('#success').content;
const templateSuccess = templateMessageSuccess.querySelector('.success');

const templateMessageError = document.querySelector('#error').content;
const templateError = templateMessageError.querySelector('.error');

const ALERT_SHOW_TIME = 5000;
const messageSuccess = () => {
  const newElement = templateSuccess.cloneNode(true);
  document.body.append(newElement);

  setTimeout(() => {
    newElement.remove();
  }, ALERT_SHOW_TIME);
};

const messageError = () => {
  const newElement = templateError.cloneNode(true);
  document.body.append(newElement);

  setTimeout(() => {
    newElement.remove();
  }, ALERT_SHOW_TIME);
};

export { messageSuccess, messageError };
