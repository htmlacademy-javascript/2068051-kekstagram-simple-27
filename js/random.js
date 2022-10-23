export const checkReceivedNumbers = (firstNumber, lastNumber) => {
  if (firstNumber < 0 || lastNumber < 0) {
    return NaN;
  }
  if (firstNumber > lastNumber) {
    [firstNumber, lastNumber] = [lastNumber, firstNumber];
  }
  return checkReceivedNumbers(firstNumber, lastNumber);
};

/**
 * Фунция возвращает случайное рандомное целое число
 * @param {number} одно из передоваемых чисел диапозона
 * @param {number} второе передаваемое число диапазона
 */
export const getRandomNumber = (firstNumber, lastNumber) => {
  if (firstNumber < lastNumber) {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
};

console.log(getRandomNumber(5, 9));
const arra1 = ['white', 'black', 'red'];
export const getRandomArrayElement = (elements) => elements[getRandomNumber (0, elements.length - 1)];

console.log(getRandomArrayElement[arra1]);
