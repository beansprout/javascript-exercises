function add (x,y) {
  return x + y;
}

function subtract (x,y) {
  return x - y;
}

function sum (arr) {
  if (arr.length === 0) {
    return 0;
  };
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.reduce((acc,curr) => (acc + curr));
}

function multiply (arr) {
  return arr.reduce((acc, curr) => (acc * curr));
}

function power(x, n) {
  return Math.pow(x, n);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}