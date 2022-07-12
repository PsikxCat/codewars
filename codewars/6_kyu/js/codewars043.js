/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = (arr) => arr.filter((val, i) => i % 2 === 0);

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));

// CodeWars Solution

function removeEveryOther2(arr) {
  arr.forEach((item, index) => {
    arr.splice(index + 1, 1);
  });
  return arr;
}

console.log(removeEveryOther2(['Hello', 'Goodbye', 'Hello Again']));
console.log(removeEveryOther2(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));
