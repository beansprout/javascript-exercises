const snakeCase = function(str) {
  if (str.match(/\.\./) && str.match(' ') === null) {
    return str.replace(/\.+/g, '_').toLowerCase();// wtf case
  }
  return str.replace(/([A-Z])/g, '_$1') // places underscores before uppercase letters
            .replace(/\.+|[ -?!]/g, '_')// replaces punctuation and spaces with underscores
            .replace(/_+/g, '_') // replaces multiple underscores with one
            .replace(/_$/, '') // removes trailing underscores
            .replace(/^_/, '') // removes opening underscores
            .toLowerCase();
}

console.log(snakeCase('helloWorld'))
module.exports = snakeCase;
