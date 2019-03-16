const sumAll = function(firstNum, lastNum) {
  if (firstNum < 0 || lastNum < 0) {
    return 'ERROR';
  }
  if (typeof firstNum !== 'number' || typeof lastNum !== 'number') {
    return 'ERROR';
  }
  let sum = 0;
  if (firstNum > lastNum) {
    for (let i = lastNum; i < firstNum + 1; i++) {
      sum = sum + i;
    }
  } else {
    for (let i = firstNum; i < lastNum + 1; i++) {
      sum = sum + i;
    }
  }
  return sum;
}

// console.log(sumAll(1, 4));
module.exports = sumAll
