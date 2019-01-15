// Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

// Example 1:

// exampleArray =               [[1, 0, 0, 0],                [0, 1, 0, 0],             [0, 0, 1, 0],                [0, 0, 0, 1]]

// diagonalSum(exampleArray) # => 4

// Example 2:

// exampleArray = [[1, 0, 0, 0, 0],                          [0, 1, 0, 0, 0],                          [0, 0, 1, 0, 0],                          [0, 0, 0, 1, 0],                          [0, 0, 0, 0, 1]]

// diagonalSum(exampleArray) # => 5


//write Your test cases here
// var input =[[1, 0, 0, 0, 0],[0, 1, 0, 0, 0],[0, 0, 1, 0, 0],[0, 0, 0, 1, 0],[0, 0, 0, 0, 1]]
//  test('find diagonal sum of an array',() => { 
//    expect(diagonalSum(input)).toBe(5);
//  });
// //write Your test cases here
// var input1 =[[1, 0, 0, 0],[0, 1, 0, 0],[0, 0, 1, 0],[0, 0, 0, 1]]
//  test('find diagonal sum of an array',() => { 
//    expect(diagonalSum(input1)).toBe(4);
//  });

 function sumUpDiagonals(arr) {
  
  var sum = 0;
 
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}

console.log(sumUpDiagonals([[1, 0, 0, 0, 0],[0, 1, 0, 0, 0],[0, 0, 1, 0, 0],[0, 0, 0, 1, 0],[0, 0, 0, 0, 1]]));
console.log(sumUpDiagonals([[1, 0, 0, 0],[0, 1, 0, 0],[0, 0, 1, 0],[0, 0, 0, 1]]))