const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const PERCENT_COEFFICIENT = 100;
const buttonMinElement = document.querySelector('.scale__control--smaller');
const buttonMaxElement = document.querySelector('.scale__control--bigger');
const buttonInputElement = document.querySelector('.scale__control--value');
const photoToChangeElement = document.querySelector('.img-upload__preview img');


const updateValue = (newValue) => {
  buttonInputElement.value = `${newValue}%`;
  photoToChangeElement.style.transform = (`scale(${newValue / PERCENT_COEFFICIENT})`);
};

buttonMinElement.addEventListener('click', () => {
  const currentValue = buttonInputElement.value;
  const valueInNumber = parseInt(currentValue, 10);
  if (valueInNumber > MIN_VALUE && valueInNumber <= MAX_VALUE) {
    updateValue(valueInNumber - STEP);
  }
});

buttonMaxElement.addEventListener('click', () => {
  const currentValue = buttonInputElement.value;
  const valueInNumber = parseInt(currentValue, 10);
  if (valueInNumber >= MIN_VALUE && valueInNumber < MAX_VALUE) {
    updateValue(valueInNumber + STEP);
  }
});

export const resetZoom = () => {
  updateValue(100);
};

