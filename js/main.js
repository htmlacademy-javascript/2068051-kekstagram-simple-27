const returnRandomNumber = (firstNumber, lastNumber) => {
  if (firstNumber < lastNumber) {
    return Math.floor(Math.random() * (lastNumber - firstNumber + 1)) + firstNumber;
  }
}

returnRandomNumber(5, 9);

const checkMaxLeight = (lineNumber, maxLeight) => {
  if (maxLeight >= 20 && maxLeight <= 140) {
    return true
  }
}

checkMaxLeight(1, 50)
