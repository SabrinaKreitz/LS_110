/*
Time: 33 minutes

Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.


A: Find all possible pairs in an array of numbers and return the pair that occurs first and has the smallest difference of all pairs. 

CREATE smallestDifference variable and set it to 0 
CREATE targetPair variable 
CREATE allPairs variable and set it to createAllPairs[inputArray];
ITERATE through allPairs > iterate through subarrays
  - Calculate difference of each subarrays
  - Make difference into a positive number
  IF difference is smaller than `smallestDifference` 
    - SET targetPair to current pair 
    - SET smallestDifference to current difference 
RETURN targetPair

[helperfunction] createAllPairs(array)
CREATE allPairs variable and set to empty array 
LOOP from idx1 = 0 until idx is smaller than length of array
  LOOP from idx2 = idx1+1 until idx is smaller than length of array + 1
    - CREATE subArray from inputArray[idx1] and inputArray[idx2]
    - PUSH subArray to allPairs
RETURN allPairs
*/

let p = console.log;

function closestNumbers (array) {
  let targetPair;
  let allPairs = createAllPairs(array);
  let smallestDifference = 0;

  allPairs.forEach(pair => {
    let difference = pair.reduce((a, b) => a - b)
    if (difference < 0) difference *= -1;
    if (smallestDifference === 0) smallestDifference = difference;
    if (difference < smallestDifference) {
      targetPair = pair;
      smallestDifference = difference;
    }
  })
  return targetPair;
}

function createAllPairs (array) {
  let allPairs = []; 
  for (let idx1 = 0; idx1 < array.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < array.length; idx2 ++) {
      allPairs.push([array[idx1], array[idx2]])
    }
  }
  return allPairs;
}

const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));