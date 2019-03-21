// check if a character is lower case
const checkLoAlpha = (charCode) => {
  return charCode >= 97 && charCode <= 122 ? true : false
}

//check if a character is uppercase
const checkUpAlpha = (charCode) => {
 return charCode >= 65 && charCode <= 90 ? true : false
}

// returns new shifted character code
const newCharCode = (e, num) => {
 const charCode = e.charCodeAt();
 let newCharCode;
 if (num > 0){
   if (checkLoAlpha(charCode) && (charCode + num) > 122) { // lowercase letter alphabet rollover
     newCharCode = charCode + num - 123 + 97;
     while (newCharCode > 122) {
       newCharCode = newCharCode - 123 +97;
     }
     return newCharCode;

   } if (checkUpAlpha(charCode) && (charCode + num) > 90) { // uppercase letter alphabet rollover
     newCharCode = charCode + num - 91 + 65;
     while (newCharCode > 90) {
       newCharCode = newCharCode - 91 + 65;
     }
     return newCharCode;
   }
   return charCode + num; // default -> no rollover needed
 }
 // num < 0
 if (checkLoAlpha(charCode)  && (charCode + num) < 97) {
   newCharCode = charCode + num + 123 - 97;
   while (newCharCode < 97) {
     newCharCode = newCharCode + 123 - 97;
   }
   return newCharCode;
 }
 if (checkUpAlpha(charCode) && (charCode + num) < 65) {
   newCharCode = charCode + num + 91 - 65;
   while (newCharCode < 65) {
     newCharCode = newCharCode + 91 - 65;
   }
   return newCharCode;
 }
 return charCode + num;
}

const caesar = function(str, num) {
  const arr = str.split('');
  const PUNCT_OR_SPACE = /[ .,'"?!()-]/
  return arr.map(e => {
    if (PUNCT_OR_SPACE.test(e)) {
      return e
    }
    return String.fromCharCode(newCharCode(e, num))
  }).join('')

}

module.exports = caesar

// console.log('a'.charCodeAt()) //97
// console.log('z'.charCodeAt()) //122
// console.log('A'.charCodeAt()) //65
// console.log('Z'.charCodeAt()) //90
