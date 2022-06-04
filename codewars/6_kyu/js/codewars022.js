/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  const short = s.split(' ').sort((a, b) => a.length - b.length);
  return short[0].length;
}

console.log(findShort('Cuando miras largo tiempo hacia el abismo, el abismo también mira dentro de ti'));
