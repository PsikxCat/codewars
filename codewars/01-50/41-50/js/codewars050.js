/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

const removeExclamationMarks = (s) =>
  s.split('').filter(i => i !== '!').join(''); // no es igual que.. entonces pintar

console.log(removeExclamationMarks('Hello world!!'));

// CodeWars Solution

const removeExclamationMarks2 = (s) => s.replace(/!/g, ''); // ! Utilizar mas regex

console.log(removeExclamationMarks2('Hello world!!'));
