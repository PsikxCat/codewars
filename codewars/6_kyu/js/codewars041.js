/*
Given the triangle of consecutive odd numbers:

              1
          3     5
        7     9    11
    13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

const rowSumOddNumbers = (n) => Math.pow(n, 3);

console.log(rowSumOddNumbers(2));

// CodeWars Solution

function rowSumOddNumbers2(n) {
  const start = n * n - n + 1;
  let result = 0;

  for (let i = 0; i < n; i++) {
    result = result + (start + (i * 2));
  }

  return result;
}

console.log(rowSumOddNumbers2(2));
