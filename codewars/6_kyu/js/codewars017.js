/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

  Numerical Score      	Letter Grade
90  <= score <= 100       	'A'
80  <= score <  90 	        'B'
70  <= score <  80        	'C'
60  <= score <  70 	        'D'
0   <= score <  60         	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/ 

function getGrade (...scores) {
  const average = scores.reduce((a, b) => a + b, 0) / scores.length
  return average <= 60 ? 'F' : average <= 70 ? 'D' : average <= 80 ? 'C' : average <= 90 ? 'B' : 'A'
}
console.log(getGrade(100,80,95));
console.log(getGrade(65,90,70));
console.log(getGrade(10,40,95));