/*
Description:

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

const accum = (s) =>
  [...s].map((char, i) => (char.toUpperCase() + char.toLowerCase().repeat(i))).join('-');

console.log(accum('abcd'));
console.log(accum('RqaEzty'));

// Codewars Solution

const accum2 = s =>
  [...s.toUpperCase()].reduce((acc, crr, i) => acc + '-' + crr + crr.toLowerCase().repeat(i));

console.log(accum2('abcd'));
console.log(accum2('RqaEzty'));

// Codewars Solution 2

function accum3(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    let str = s[i].toUpperCase(); // Variable que agrupara el o los caracteres. Primer caracter upperCase

    for (let j = 0; j < i; j++) {
      str += s[i].toLowerCase(); // Cantidad i (desde 0 hasta j < i) de caracteres en lowerCase agregados a variable str
    }
    result.push(str);
  }
  return result.join('-');
}

console.log(accum3('abcd'));
console.log(accum3('RqaEzty'));
