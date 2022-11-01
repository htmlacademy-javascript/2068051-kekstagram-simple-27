const sliderElement = document.querySelector('img-upload__effect-level');
const valueElement = document.querySelector('.img-upload__preview');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
});

sliderElement.noUiSlider.on('update', (...rest) => {
  console.log(rest);
});
