const buttonMin = document.querySelector('.scale__control--smaller');
const buttonMax = document.querySelector('.scale__control--bigger');
const buttonInput = document.querySelector('.scale__control--value');
const photoToChange = document.querySelector('.img-upload__preview');
/** @type {number} */
const STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

buttonMin.addEventListener('click', () => {
  const currentValue = buttonInput.value.substr(0,2);
  if (currentValue > MIN_VALUE || currentValue < MAX_VALUE) {
    const newInputValue = currentValue - STEP;
    buttonInput.value = `${newInputValue}%`;
    photoToChange.style.transform = (`scale(${newInputValue * 0.01})`);
  }
});

buttonMax.addEventListener('click', () => {
  /** @type {number} */
  const currentValue = buttonInput.value.substr(0,2);
  if (currentValue > MIN_VALUE || currentValue < MAX_VALUE) {
    /** @type {number} */
    const newInputValue = currentValue + STEP;
    buttonInput.value = `${newInputValue}%`;
    photoToChange.style.transform = (`scale(${newInputValue * 0.01})`);
  }
});
