const palindromes = function(str) {
  let strNoPunctuation = str.replace(/[.,'"!? ]/g, ''); // spaces removed too
  return (strNoPunctuation.toLowerCase() === strNoPunctuation.toLowerCase().split('').reverse().join(''))
}

module.exports = palindromes
