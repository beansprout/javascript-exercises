const ftoc = function(f) {
  let c = (f - 32) * 5 / 9;
  return Math.round(c) === c ? c : parseFloat(c.toFixed(1));
}

const ctof = function(c) {
  let f = c * (9 / 5) + 32;
  return Math.round(f) === f ? f : parseFloat(f.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
