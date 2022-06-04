/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Fundamentals
 */

const XO = (str) =>
  str.toUpperCase().split('').filter(i => i === 'X').length === str.toUpperCase().split('').filter(i => i === 'O').length;

console.log(XO('xxooox'));

// solution 2
function XO2(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

console.log(XO2('xxooox'));
