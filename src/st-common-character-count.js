import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  s1 = s1.split('');
  s2 = s2.split('');

  let num = 0;

  return count(s1);

  function count(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (array[i] === s2[j]) {
          num++;
          array.splice(i, 1);
          s2.splice(j, 1);
          return helper(array);
        }
      }
    }
    return num;
  }



}
