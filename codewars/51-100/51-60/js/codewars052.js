/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

*/

const getAge = (inputString) => +inputString[0];

console.log(getAge('9 years old'));

// CodeWars Solution

function getAge2(inputString) {
  return inputString.match(/[0-9]/) * 1;
}

console.log(getAge2('9 years old'));

// CodeWars Solution 2

const getAge3 = parseInt;

console.log(getAge3('9 years old'));
