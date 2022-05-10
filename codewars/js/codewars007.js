// Implement a function which multiplies two numbers.

const multByTwo = (a, b) => a * b;

console.log(multByTwo(2,3));
console.log(multByTwo(2,4));


// solution 2
function multiply(a, b){
  if(typeof a == 'number' && typeof b == 'number')
    return a * b;  
}

console.log(multiply(3, 4));