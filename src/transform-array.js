import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let res = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === undefined) {
       continue;
    }
    if(arr[i] === '--discard-next') {
      continue;
    }
    if(arr[i-1] === '--discard-next') {
       continue;
    }
    if(arr[i] === '--discard-prev') {
       if(arr[i-2] === '--double-next') {
          res.pop();
          continue;
       }
       if(arr[i-2] === '--discard-next') {
          continue;
       }
       res.pop();
       continue;
    }
    if(arr[i] === '--double-next') {
      if(arr[i+1]) {
        res.push(arr[i+1]);
      }
       continue;
    }
    if(arr[i] === '--double-prev') {
      if(res.length === 0) { continue }
      if(arr[i-2] === '--discard-next') {
       continue;
    }
      res.push(arr[i-1]);
      continue;
    }
    res.push(arr[i]);
 }
 return res
}
