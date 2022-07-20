/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/

const findNextSquare = (sq) =>
  (Number.isInteger(Math.sqrt(sq))) ? (Math.sqrt(sq) + 1) ** 2 : -1;

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

// Codewars Solution

const findNextSquare2 = (sq) =>
  Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2;

console.log(findNextSquare2(121));
console.log(findNextSquare2(625));
console.log(findNextSquare2(114));

// Codewars Solution 2

function findNextSquare3(sq) {
  let r = Math.sqrt(sq);
  return r % 1 ? -1 : ++r * r;
}
// ++r suma antes de mostrarlo, luego multiplica ese numero sumado por si mismo
console.log(findNextSquare3(121));
console.log(findNextSquare3(625));
console.log(findNextSquare3(114));
