const removeFromArray = function(arr, items) {
    let args = Array.from(arguments);
    args.shift();
    for (let i = 0; i < args.length; i++) {
      let ind = arr.indexOf(args[i]);
      if (ind === -1) {
        arr = arr;
      } else if (ind === 0) {
        arr.shift();
      } else if (ind === arr.length-1) {
        arr.pop();
      } else {
        arr = arr.slice(0, ind).concat(arr.slice(ind +1));
    };
  }
  return arr;
}

console.log(removeFromArray([1,2,3,4], 3, 2))
module.exports = removeFromArray
