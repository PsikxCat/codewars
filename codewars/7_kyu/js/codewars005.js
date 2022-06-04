/*
Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
*/

const strCount = (str, lt) => str.split('').filter(x => x === lt).length;

console.log(strCount('Hello', 'l'));

// solution 2
function strCount2(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) { count++; }
  }

  return count;
}

console.log(strCount2('Hello', 'l'));

// solution 3
const strCount3 = (str, letter) => str.split(letter).length - 1;
// estudiar metodo
console.log(strCount3('Hellllo', 'l'));
