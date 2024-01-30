// Complete the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//My Solution

function powersOfTwo(n){
    //We start with an empty array result.
       let result = [];
      
      // We use a for loop to iterate from 0 to n (inclusive).
      for(let i = 0; i <= n; i++) {
        //In each iteration, we calculate 2 raised to the power of 
        //i using 2 ** i and push this value into the result array.
      result.push(2 ** i);
       }
      //After the loop, we return the result array.
      return result;
    }