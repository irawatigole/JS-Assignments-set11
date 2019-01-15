// Given two integers n and m. The problem is to find the number closest to n and divisible by m. If there are more than one such number, then output the one having maximum absolute value

// Example:

// Input:

// 2

// 13, 4

// -15, 6

// Output:

// ''

// 12

// -18

//write Your test cases here
// test('find the closest number as per given statement, if arguments error return empty string',() => { 
//     expect(closestNumber(2)).toBe('');
//   });
//  //write Your test cases here
//   test('find the closest number as per given statement',() => { 
//     expect(closestNumber(13,4)).toBe(12);
//   });
//  //write Your test cases here
//   test('find the closest number as per given statement',() => { 
//     expect(closestNumber(-15,6)).toBe(-18);
//   });


  function closestNumber(n,m){
 if (typeof m == 'undefined'){
   return '';
 }
   let q = Number.parseInt(n / m);
     let n1 = m * q;
     if ((n * m) > 0){
   n2 = m * (q + 1)
   } else {
   n2 = m * (q - 1)
  }
if (Math.abs(n-n1) < Math.abs(n-n2)){
   return n1
} else {
  return n2  
}
}
console.log(closestNumber(13,4));
console.log(closestNumber(-15,6));
console.log(closestNumber(2));