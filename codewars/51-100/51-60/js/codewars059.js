/*
Description:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

const findAverage = (array) =>
  array.length > 0
    ? (array.reduce((acc, crr) => acc + crr) / array.length).toFixed(1)
    : 0;

console.log(findAverage([4.5, 3.5, 4.8, 5.0, 4.0]));
console.log(findAverage([]));

// CodeWars Solution

function findAverage2(array) {
  if (array.length === 0) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return (result / array.length).toFixed(1);
}

console.log(findAverage2([4.5, 3.5, 4.8, 5.0, 4.0]));
console.log(findAverage2([]));
