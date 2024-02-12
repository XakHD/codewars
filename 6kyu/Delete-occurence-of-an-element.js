// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//My Solution
function deleteNth(arr,n){
    // ...
    //we create a new Map object named countMap. This Map will be used to 
    //keep track of the count of each element in the input array.
     const countMap = new Map();
    //We initialize an empty array named result,
    //which will store the final result after filtering.
    const result = [];
    //This line starts a loop 
    //that iterates over each element num in the input array arr
      for (const num of arr) {
    //we use the get method of the Map object countMap to retrieve the count 
        //of the current number num. If num is not
        //present in countMap, count is assigned 0 using the || operator.    
         const count = countMap.get(num) || 0;
  //      This if statement checks if the count of the current 
  //      number num is less than the maximum allowed count n
        if (count < n) {
  //         If the count of num is
  //         less than n, we push num to the result array.
            result.push(num);
         // We then update the count of num in the countMap by using the set method,
         //   incrementing the count by 1.
            countMap.set(num, count + 1);
          }
      }     
  //   we return the result array, which contains each number
  //   of the input array at most n times, without reordering.
      return result;
  }
  