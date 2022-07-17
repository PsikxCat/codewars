/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
  const arr = [];

  for (let i = n; i > 0; i--) {
    arr.push(i);
  }

  return arr;
};

console.log(reverseSeq(10));
console.log(reverseSeq(5));

// CodeWars Solution

const reverseSeq3 = n => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  return arr.reverse();
};
console.log(reverseSeq3(10));
console.log(reverseSeq3(5));

// CodeWars Solution 2

const reverseSeq2 = n => Array(n).fill(0).map((val, i) => n - i);

console.log(reverseSeq2(10));
console.log(reverseSeq2(5));
