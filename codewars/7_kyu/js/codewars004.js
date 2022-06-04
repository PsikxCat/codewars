/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.
 */

const updateLight = (crr) =>
  crr === 'green' ? 'yellow' : crr === 'yellow' ? 'red' : 'green';

console.log(updateLight('red'));

// other solution
const lights = ['green', 'yellow', 'red'];

function updateLight2(current) {
  if (typeof current !== 'string') { throw new TypeError(`${current} is not of type string`); };

  if (!lights.includes(current)) { throw new RangeError(`${current} can only be set to "red", "yellow" or "green"`); };

  const indexOfLight = lights.indexOf(current);

  return lights[(indexOfLight + 1) % (lights.length)];
}

console.log(updateLight2('red'));
