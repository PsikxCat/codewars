/*
Description:

Write a function that checks if a given string (case insensitive) is a palindrome.
*/

const isPalindrome = (x) =>
  x.toLowerCase() === x.split('').reverse().join('').toLowerCase();

console.log(isPalindrome('oso'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('Madam'));

// CodeWars Solution

function isPalindrome2(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join('');
}

console.log(isPalindrome2('oso'));
console.log(isPalindrome2('hello'));
console.log(isPalindrome2('Madam'));
