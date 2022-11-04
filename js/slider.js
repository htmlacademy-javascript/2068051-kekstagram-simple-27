const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioElement = document.querySelectorAll('.effects__radio');
const imageAddEffect = document.querySelector('.img-upload__preview');

const effects = [
  'grayscale('+ valueElement.value +')',
   'sepia('+ valueElement.value +')',
];
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});
const getUpdate = () => {
  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    sliderElement.removeAttribute('disabled');
    imageAddEffect.style.filter = effects[0];
  });
};


// radioElement.addEventListener('change', () => {
//   sliderElement.noUiSlider.updateOptions({
//     range: {
//       min: 1,
//       max: 10,
//     },
//     step: 0.1,
//   });
// });

console.log(radioElement[0]);
radioElement[0].addEventListener('click', () => {
  imageAddEffect.style.filter = 'none';
  sliderElement.setAttribute('disabled', true);
});

radioElement[1].addEventListener('click', getUpdate);
