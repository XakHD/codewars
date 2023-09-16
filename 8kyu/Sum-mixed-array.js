// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My solution

 //convert strings to numbers
   //use reduce function   //array.prototype.reduce()
  // .reduce((previousValue,currentValue) => {/*...*/}) //w/ initial value
  //use unary + operator
  //sum  of  whole array
  
  sumMix = x => x.reduce((prev,curr) => +curr + prev, 0)
