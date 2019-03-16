const repeatString = function(str, repeats) {
  if (repeats === 0)  {
    return '';
  }
  if (repeats < 0) {
    return 'ERROR';
  }
  let i, repeatedStr = str;
  for (i = 0; i < repeats-1; i++) {
    repeatedStr=repeatedStr+str;
  }
  return repeatedStr;
}

// console.log(repeatString('hey', -1))
module.exports = repeatString
