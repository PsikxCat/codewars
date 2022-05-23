/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  let result = '';
  for(let i = 0; i < text.length; i++) {
    let letterCode = text.toUpperCase().charCodeAt(i);
    letterCode > 64 && letterCode < 91 ? result += (letterCode - 64) + ' ' : null;
  }
  return result
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
