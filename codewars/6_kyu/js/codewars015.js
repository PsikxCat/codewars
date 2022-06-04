/**
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

const uniqueInOrder = (iterable) => {
  // nos aseguramos de convertir un posible string en array para iterarlo
  const strToArr = Array.isArray(iterable) ? iterable : iterable.split('');
  // solo devolvera valor en caso de que los elementos de los indices enfrentados sean diferentes
  return strToArr.filter((crr, i) => strToArr[i] !== strToArr[i + 1]);
};
console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// CodeWars Solution
const uniqueInOrder2 = iterable => [...iterable].filter((v, i) => iterable[i] !== iterable[i + 1]);

console.log(uniqueInOrder2('AAAABBBCCDAABBB'));
