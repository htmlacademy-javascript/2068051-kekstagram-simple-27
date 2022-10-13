import { getRandomNumber } from "random.js";
import { checkMaxLenght } from "checklenght.js";


const newAploadFoto = (_, index) => {
  const id = index + 1;
  return {
  id,
  urlPhoto: `photos/${id}.jpg`,
  description: `описание`,
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
  }
};

const AploadFotos = Array.from({length: 25}, newAploadFoto);

console.log(AploadFotos);
