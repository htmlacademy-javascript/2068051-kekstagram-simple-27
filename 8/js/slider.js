const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioElement = document.querySelectorAll('.effects__radio');
const imageAddEffect = document.querySelector('.img-upload__preview');
console.log(radioElement);


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
});


sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
    // sliderElement.removeAttribute('disabled');
  imageAddEffect.style.filter = `grayscale(${valueElement.value}%)`;
});


// radioElement[1].addEventListener('checked', getUpdate);
// radioElement.addEventListener('change', () => {
//   sliderElement.noUiSlider.updateOptions({
//     range: {
//       min: 1,
//       max: 10,
//     },
//     step: 0.1,
//   });
// });

// radioElement.addEventListener('click', () => {
//   imageAddEffect.style.filter = 'none';
//   sliderElement.setAttribute('disabled', true);
// });

// const addClass = (radioElement[]) => {
//   element.addEventListener('click', () => {
//   imageAddEffect.classList.add('effects__preview--chrome');
//   });
// };
// const erray {
//   'chrome' : `.effects__preview--chrome`,

// };
radioElement[0].addEventListener('click', () => {
  imageAddEffect.style.filter = 'none';
});

radioElement[1].addEventListener('click', () => {
  imageAddEffect.classList.add('effects__preview--chrome');
});

radioElement[2].addEventListener('click', () => {
  imageAddEffect.classList.add('effects__preview--sepia');
});
