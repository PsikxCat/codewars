/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer
*/

const squareDigits = (num) => +(num + '').split('').map(x => x ** 2).join('');

console.log(squareDigits(91322));

function squareDigits2(num) {
  // eslint-disable-next-line space-before-function-paren
  return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}
console.log(squareDigits2(91322));
