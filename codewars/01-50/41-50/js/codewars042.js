/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
  let ns = 0;
  let ew = 0;

  if (walk.length === 10) {
    for (const i of walk) {
      i === 'n' ? ns++ : i === 's' ? ns-- : i === 'e' ? ew++ : ew--;
    }
  } else { return false; };

  return ns === 0 && ew === 0;
}
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

// CodeWars Solution

function isValidWalk2(walk) {
  const count = (val) => walk.filter((i) => i === val).length;
  // cuantas veces pasa el elemento (val) en el filtro ⬆️
  return walk.length === 10 && count('n') === count('s') && count('w') === count('e');
}

console.log(isValidWalk2(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk2(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk2(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
