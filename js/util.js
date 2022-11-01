export const checkMaxLenght = (string, minLenght, maxLenght) => {
  return string >= minLenght && string <= maxLenght
};
checkMaxLenght(50, 20, 140);

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {isEscapeKey, isEnterKey};
