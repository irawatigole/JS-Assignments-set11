// Given an array of size n in ascending order and an integer b, traverse the array and if the element in array is b, double b and continue traversal. In the end return value of b.

// Example:

// Input:
// 1
// 5 2
// 1 2 3 4 8

// Output:

// []

// 4
// 16

// Explanation: The initial value of b is 2. Traversing from the first element, 2 is found in 2nd position, so doubling b we get b = 4 . 4 is found in 4th position so doubling b we get b = 8. 8 is found in 5th position, so doubling b we get b = 16.

// //write Your test cases here
// test('double the value if it found in array, if not return empty array',() => { 
//     expect(doubleTheValue([],1)).toEqual([]);
//   });
//  //write Your test cases here
//      var input = [1,2,3,4,8];
//   test('double the value if it found in array',() => { 
//     expect(doubleTheValue(input,2)).toBe(16);
//   });
//  //write Your test cases here
//      var input1 = [5,2]
//   test('double the value if it found in array',() => { 
//     expect(doubleTheValue(input1,2)).toBe(4);
//   });

  function doubleTheValue(a,b){
    if (a.length == 0){
      return a;
    }
 for (var i=0; i<a.length; i++){
   if (a[i] == b){
      result = a[i]*2;
      b = result;
   }
  }
   return result;
 }
console.log(doubleTheValue([1,2,3,4,8],2));
console.log(doubleTheValue([5,2],2));
console.log(doubleTheValue([],1))