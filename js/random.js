export const checkReceivedNumbers = (firstNumber, lastNumber) => {
  if (firstNumber < 0 || lastNumber < 0) {
    return NaN
  }
  if (firstNumber > lastNumber) {
    [firstNumber, lastNumber] = [lastNumber, firstNumber]
  }
  return getRandomNumber(firstNumber, lastNumber);
}

export const getRandomNumber = (firstNumber, lastNumber) => {
  if (firstNumber < lastNumber) {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
}

getRandomNumber(5, 9);
