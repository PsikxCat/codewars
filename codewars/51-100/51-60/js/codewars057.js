/*
Description:

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

function gimme(triplet) {
  const clone = triplet.slice(0);
  const midNum = clone.sort((a, b) => a > b ? 1 : -1)[1];

  return triplet.indexOf(midNum);
}
// Nota: Recordar que sort() modifica el array original por lo cual se generaba el resultado no deseado antes de clonar el array y modificar el clon con sort()

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));

// CodeWars Solution ✅

const gimme2 = (arr) => arr.indexOf(arr.concat().sort((a, b) => a - b)[1]);
// arr.concat() devuelve un nuevo array y en este se hace el sort() y sobre esto se busca el indice en el array original

console.log(gimme2([2, 3, 1]));
console.log(gimme2([5, 10, 14]));

// Codewars Solution 2

const gimme3 = (arr) => arr.indexOf([...arr].sort((x, y) => x - y)[1]);

console.log(gimme3([2, 3, 1]));
console.log(gimme3([5, 10, 14]));
