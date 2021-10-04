// function repeater(str, options) {
//    let res = '';

//    let rT = options.repeatTimes || 1;
//    let sep = options.separator || '+';
//    let add = options.addition || '';
//    let arT = options.additionRepeatTimes || 1;
//    let addSep = options.additionSeparator  || '|';

//    let addAndAddSep = add + addSep; 
 
//     if(rT > 1) {
//        res = sep + res;
//     }
  
//     if(options.additionSeparator) {
//        res = addAndAddSep.repeat(arT-1)+ add + res;
//     }

//     res = str + res.repeat(options.repeatTimes-1) + (options.addition||'');
//     return res;
//  }


// console.log('==============================================')
// console.log(repeater('A', { 
//    repeatTimes: 4,
//    separator: 'B',
//    addition: '*',
//    additionRepeatTimes: 4,
//    additionSeparator: '0'
//  }))

// ==============================================================================

// let count = 1;

// function calculateDepth(arr) {

//    let array = arr;

//     for(let i = 0; i < array.length; i++) {
      
//       if(Array.isArray(array[i])) { 
//         ++count;
//         array = array.flat();
//         return calculateDepth(array);
//       }
//     }

//    return count;
//  }

//  console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]))
//  console.log(calculateDepth([1, 2, 3, [4, 5]]))
//  console.log(calculateDepth([1, 2, 3, 4, 5]))
//  console.log(calculateDepth([[[]]]))
// console.log(calculateDepth([1, 2, 3, 4, 5, [1]]))
// console.log(calculateDepth([1, 2, 3, [1], 4, 5, [1]]))
// console.log(calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]))


// function getCommonCharacterCount(s1, s2) {


// }
// console.log(getCommonCharacterCount('aabcc', 'adcaa'))


// ================================================================


//  * {
//  *   '.ru': 3,
//  *   '.ru.yandex': 3,
//  *   '.ru.yandex.code': 1,
//  *   '.ru.yandex.music': 1,
//  * }

// let domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
// ]
   
// function getDNSStats(domains) {
//   let matrix = domains.map(item => item.split('.'));
//   let obj = {};
//   let arr = [];
//   for(let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix[i].length; j++) {
//       obj[matrix[i][j]] = 1;
//     }
//   }
//   return matrix;
// }

// console.log(getDNSStats(domains))


// ===========================================================


// function renameFiles(names) {
//   let n = 1;
//   let arr =[];
//   let k = `(${n})`
//   for( let i = 1; i < names.length; i++) {
//     if(names.indexOf(names[i],0) < i && names.indexOf(names[i],0) > 0){
//       arr.push(k)
//     } else {
//       arr.push(names[i])
//     }
//   }
//   return arr;
// }

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))


// ================================================================


// function isMAC48Address(n) {
//   n = n.split('');
//   n = [n]
//   console.log(n)
//   let num = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

//   for(let i = 0; i < num.length; i++) {
//     console.log(num[i])
//     if(!n.includes(new RegExp(num[i],'g'))) {
//       return false;
//     } 
//     continue;
//   }
//   return true;
// }

// console.log(isMAC48Address('00-1B-63-84-45-E6'))
// console.log(isMAC48Address('Z1-1B-63-84-45-E6'))
// console.log(isMAC48Address('not a MAC-48 address'))
// console.log(isMAC48Address('FF-FF-FF-FF-FF-FF'))
// console.log(isMAC48Address('G0-00-00-00-00-00'))

// isMAC48Address('00-1B-63-84-45-E6'), true);
// isMAC48Address('Z1-1B-63-84-45-E6'), false);
// isMAC48Address('not a MAC-48 address'), false);
// isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
// isMAC48Address('G0-00-00-00-00-00'), false);


// =====================================================================
// matrix = [
//    [0, 0, 0],
//    [0, 0, 0],
//    [0, 0, 0]
// ]
matrix = [
   [true, false, false],
   [false, true, false],
   [false, false, false]
]
   // * The result should be following:
   // * [
   // *  [1, 2, 1],
   // *  [2, 1, 1],
   // *  [1, 1, 1]
   // * ]


// function minesweeper (matrix) {
   
//    let field = matrix;
//    matrix.map((el,in) => matrix[in].map((e,i) => e[i] = 0))



//    for(let i = 0; i < matrix.length; i++) {
//       for(let j = 0; j < matrix[i].length; j++) {
         
//       }
//    }
   
//    return field
  
// }

console.log(minesweeper (matrix))
 

 