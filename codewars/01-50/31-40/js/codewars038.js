/**
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):

348597 => [7,9,5,8,4,3]
0 => [0]
*/

const digitize = (n) => Array.from((n + ''), Number).reverse();

console.log(digitize(348597));
console.log(digitize(0));

// CodeWars Solution

function digitize2(n) {
  return String(n).split('').map(Number).reverse();
}

console.log(digitize2(348597));
console.log(digitize2(0));
