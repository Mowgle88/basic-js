import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = str.split('');
  let res = '';
  let sum = 1;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) {
      ++sum;
    } else {
      if(sum === 1) {
        res += str[i];
        sum = 1;
      } else {
        res += sum + str[i];
        sum = 1;
      }
    }
  }
  return res;
}
