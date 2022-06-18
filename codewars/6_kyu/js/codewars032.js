/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

const solution = (str) => str.split('').map(i => i.charCodeAt() <= 90 ? (' ' + i) : i).join('');

console.log(solution('camelCasing'));
