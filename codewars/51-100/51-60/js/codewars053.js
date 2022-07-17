/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints > (classPoints.reduce((acc, crr) => acc + crr, yourPoints)) / (classPoints.length + 1);

console.log(betterThanAverage([3.0, 4.0, 2.5, 5.0], 4.5));
console.log(betterThanAverage([3.0, 4.0, 2.5, 5.0], 3.5));

// CodeWars Solution

function betterThanAverage2(classPoints, yourPoints) {
  let classAvg = 0;
  for (let i = 0; i < classPoints.length; i++) {
    classAvg += classPoints[i];
  }
  classAvg = classAvg / classPoints.length;
  return yourPoints > classAvg;
};

console.log(betterThanAverage2([3.0, 4.0, 2.5, 5.0], 4.5));
console.log(betterThanAverage2([3.0, 4.0, 2.5, 5.0], 3.5));
