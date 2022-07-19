/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example

'CodEWaRs' => [0,3,4,6]

*/

function capitals(word) {
  return word
    .split('')
    .map((val, i) => val === val.toUpperCase() ? i : '')
    .filter((val) => typeof val === 'number');
};

console.log(capitals('PsikoCat'));
console.log(capitals('CodEWaRs'));

// Codewars Solution

const capitals2 = (word) =>
  word.split('')
    .reduce((acc, crr, i) => {
      return crr === crr.toUpperCase() ? acc.concat(i) : acc;
    }, []); // ! necesario partir desde array vacio
// crr es Mayus? concat el indice al acc si no deja el acc

console.log(capitals2('PsikoCat'));
console.log(capitals2('CodEWaRs'));

// Codewars Solution 2

const capitals3 = word => word.match(/[A-Z]/g).map(x => word.indexOf(x));

console.log(capitals3('PsikoCat'));
console.log(capitals3('CodEWaRs'));
