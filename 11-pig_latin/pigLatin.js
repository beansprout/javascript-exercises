const translateOneWord = (str) => {
  if (str.match(/^[aeiou]/i)) {
    return str.concat('ay');
 }
 let beginning = str.match(/^[^aeiou]+/i)[0]; // returns regexp object
 // first item in regexp object array is the str.match str hence [0] at end of line 5
 if (str.match(/qu|[^aeiou]qu|/i)[0].length > 0) { // match qu or consonant(s)+qu
   beginning = str.match(/qu|[^aeiou]qu|/i)[0];
 }
 let middle = str.slice(beginning.length);
 return middle.concat(beginning).concat('ay')
}

const translate = (str) => {
  if (str.match(' ') === null) {
    return translateOneWord(str);
  }
  const arr = str.split(' ');
  return arr.map(e => translateOneWord(e)).join(' ');
}

module.exports = {
	translate
}

