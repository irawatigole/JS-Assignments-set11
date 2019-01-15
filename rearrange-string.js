// Given a string containing uppercase alphabets and integer digits (from 0 to 9), the task is to print the alphabets in the order followed by the sum of digits.

// Example:
// Input:
// AC2BEW3
// ACCBA10D2EW30

 

// Output:
// ABCEW5
// AABCCDEW6

// //write Your test cases here
//  test('re arrang the string according to statement',() => { 
//    expect(reArrange('AC2BEW3')).toBe('ABCEW5');
//  });
// //write Your test cases here
//  test('re arrang the string according to statement',() => { 
//    expect(reArrange('ACCBA10D2EW30')).toBe('AABCCDEW6');
//  });

 function reArrange(str){
   let sum = 0;  
let numArr = Array.from(str.toString()).map(Number);
let filterArr = numArr.filter(Boolean);
for (var i=0; i<filterArr.length; i++){
  sum +=filterArr[i]
}

  let newStr = str.replace(/[0-9]/g, '');
  let arr = newStr.split('');
  result = arr.sort();
  result.push(sum);
 return result.join('')
}
console.log(reArrange('AC2BEW3'));
console.log(reArrange('ACCBA10D2EW30'))

