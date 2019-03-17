const leapYears = function(year) {
  if (year % 100 === 0) {
    return year % 400 === 0 ? true : false;
    }
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
  return false;
}


console.log(leapYears(1800));
module.exports = leapYears
