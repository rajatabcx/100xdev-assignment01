/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (!numbers.length) return undefined;

  let largest = Math.max();

  for (let number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

module.exports = findLargestElement;
