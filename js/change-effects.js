const EFFECTS = [
  {
    name: 'none',
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

const imageAddEffectElement = document.querySelector('.img-upload__preview img');
const listEffectsElement = document.querySelector('.effects__list');
let currentEffect = BASE_EFFECT;

const onChangeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageAddEffectElement.className = '';
  imageAddEffectElement.style.filter = `${currentEffect.style}`;
  imageAddEffectElement.classList.add(`effects__preview--${currentEffect.name}`);
};


listEffectsElement.addEventListener('change', onChangeEffect);


const resetEffect = () => {
  imageAddEffectElement.style.filter = '';
  currentEffect = BASE_EFFECT;
  imageAddEffectElement.className = '';
};

export { resetEffect };

