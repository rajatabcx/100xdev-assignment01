/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const re = /[\W_]/g;

  const updatedStr = str.toLowerCase().replace(re, '');

  const strReverse = updatedStr
    .split('')
    .reverse()
    .join('')
    .toLowerCase()
    .split(' ')
    .join('');
  return updatedStr === strReverse;
}

module.exports = isPalindrome;
