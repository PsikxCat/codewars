/* eslint-disable no-undef */
/**
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).
*/

function longestConsec(strarr, k) {
  // condicional de valores no validos
  if (strarr.length === 0 || k > strarr.length || k <= 0) return '';

  let longStr = '';

  for (let i = 0; i < strarr.length; i++) {
    // valor de la 'tajada' con los dos str a concatenar
    const newStr = strarr.slice(i, i + k);
    // si el lenght de la concatenacion actual es mayor al lenght de la anterior, almacena en variable
    if (newStr.join('').length > longStr.length) {
      longStr = newStr.join('');
    }
  }
  return longStr;
}
console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], k = 2));

// Codewars Solution
function longestConsec2(strarr, k) {
  return k <= 0 || k > strarr.length
    ? ''
    : strarr
      .map((value, index) => (
        strarr.slice(index, index + k).join('')))
      .reduce((longest, current) => current.length > longest.length ? current : longest);
} // destacar la organizacion
console.log(longestConsec2(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], k = 2));
