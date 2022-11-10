const imageAddEffect = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
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

export const resetEffects = () => {
  imageAddEffect.style.filter = 'none';
};

form.addEventListener('change', onChangeEffect);

