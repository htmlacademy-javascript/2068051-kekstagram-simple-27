const checkReceivedNumbers = (firstNumber, lastNumber) => {
  if (firstNumber < 0 || lastNumber < 0) {
    return NaN
  }
  if (firstNumber > lastNumber) {
    [firstNumber, lastNumber] = [lastNumber, firstNumber]
  }
  return getRandomNumber(firstNumber, lastNumber);
}

const getRandomNumber = (firstNumber, lastNumber) => {
  if (firstNumber < lastNumber) {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
}

getRandomNumber(5, 9);

const checkMaxLenght = (string, minLenght, maxLenght) => {
  return string >= minLenght && string <= maxLenght
}

checkMaxLenght(50, 20, 140);
