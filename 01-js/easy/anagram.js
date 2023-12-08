/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const firstStr =
    str1.length > str2.length ? str1.toLowerCase() : str2.toLowerCase();
  const secondStr =
    str1.length > str2.length ? str2.toLowerCase() : str1.toLowerCase();

  const charArr = firstStr.split('').map((item) => item);

  for (let char of secondStr) {
    if (charArr.includes(char)) {
      charArr.splice(charArr.indexOf(char), 1);
    }
  }

  return !charArr.length;
}

module.exports = isAnagram;
