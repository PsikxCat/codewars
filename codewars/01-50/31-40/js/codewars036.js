/**
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

const simpleMultiplication = (n) => n % 2 === 0 ? n * 8 : n * 9;

console.log(simpleMultiplication(8));
console.log(simpleMultiplication(9));
