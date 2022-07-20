/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
    a little
    a lot
    passionately
    madly
    not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

const phrase = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all'
];

const howMuchILoveYou = (nbPetals) => phrase[(nbPetals - 1) % phrase.length];

console.log(howMuchILoveYou(1));
console.log(howMuchILoveYou(2));
console.log(howMuchILoveYou(5));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(9));

// CodeWars Solution

const howMuchILoveYou2 = n =>
  ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][n % 6];

console.log(howMuchILoveYou2(7));
console.log(howMuchILoveYou2(9));

// CodeWars Solution 2

function howMuchILoveYou3(nbPetals) {
  const phrase = {
    0: 'not at all',
    1: 'I love you',
    2: 'a little',
    3: 'a lot',
    4: 'passionately',
    5: 'madly'
  };
  return phrase[nbPetals % 6];
}

console.log(howMuchILoveYou3(7));
console.log(howMuchILoveYou3(9));

// CodeWars Solution 3

const howMuchILoveYou4 = function ($) {
  const arr = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'];
  let ind;
  if ($ > 5) ind = $ % 6;
  else ind = $;
  return arr[ind];
};

console.log(howMuchILoveYou4(7));
console.log(howMuchILoveYou4(9));
