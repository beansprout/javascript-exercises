const fibonacci = function(num) {
  if (num < 0) {
    return 'OOPS';
  }
  let a = 0;
  let b = 1;
  while (num >= 0) {
   let temp = a;
   a = a + b;
   b = temp;
   num--;
  }
  return b;
}



console.log(fibonacci(6));
module.exports = fibonacci
