/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

const invert = (array) => 
  array.map(num => num > 0 ? -num : num < 0 ?  num * -1 : 0);

console.log(invert([1,-2,3,-4,5, 0]));


// solution 2
const invert2 = (array) => array.map( x => x === 0 ? x : -x);

console.log(invert2([1,-2,3,-4,5, 0]));


 //solution 3
const invert3 = array => array.map(num => -num);

console.log(invert3([1,-2,3,-4,5, 0]));
