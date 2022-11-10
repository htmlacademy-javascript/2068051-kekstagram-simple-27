const buttonMin = document.querySelector('.scale__control--smaller');
const buttonMax = document.querySelector('.scale__control--bigger');
const buttonInput = document.querySelector('.scale__control--value');
// buttonInput.value = `${100}%`;
const photoToChange = document.querySelector('.img-upload__preview img');
const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const updateValue = (newValue) => {
  buttonInput.value = `${newValue}%`;
  photoToChange.style.transform = (`scale(${newValue / 100})`);
};

buttonMin.addEventListener('click', () => {
  const currentValue = buttonInput.value;
  const valueInNumber = parseInt(currentValue, 10);
  if (valueInNumber > MIN_VALUE && valueInNumber <= MAX_VALUE) {
    updateValue(valueInNumber - STEP);
  }
});

buttonMax.addEventListener('click', () => {
  const currentValue = buttonInput.value;
  const valueInNumber = parseInt(currentValue, 10);
  if (valueInNumber >= MIN_VALUE && valueInNumber < MAX_VALUE) {
    updateValue(valueInNumber + STEP);
  }
});

export const resetZoom = () => {
  // buttonInput.value = `${100}%`;
  updateValue(100);
};

