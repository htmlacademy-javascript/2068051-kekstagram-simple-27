const imageAddEffect = document.querySelector('.img-upload__preview img');
const listEffects = document.querySelector('.effects__list');

const EFFECTS = [
  {
    name: 'none',
    // style: 'none',
  },
  {
    name:'chrome',
    style: 'grayscale',
  },
  {
    name: 'sepia',
    style: 'sepia',
  },
  {
    name: 'marvin',
    style: 'invert',
  },
  {
    name: 'phobos',
    style: 'blur',
  },
  {
    name: 'heat',
    style: 'brightness',
  }
];

const BASE_EFFECT = EFFECTS[0];
let currentEffect = BASE_EFFECT;

const onChangeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageAddEffect.className = '';
  imageAddEffect.style.filter = `${currentEffect.style}`;
  imageAddEffect.classList.add(`effects__preview--${currentEffect.name}`);
};


listEffects.addEventListener('change', onChangeEffect);


const resetEffect = () => {
  imageAddEffect.style.filter = '';
  currentEffect = BASE_EFFECT;
  imageAddEffect.className = '';
  // listEffects.removeEventListener('input', onChangeEffect);
};

export { resetEffect };

