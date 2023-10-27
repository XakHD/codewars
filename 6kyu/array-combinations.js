// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// describe("Basic tests", function(){
    // Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
    // Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
    // Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
    // Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
    // });

    //My Solution

     //Return the number of unique arrays that can be formed by picking ewactly one element from each subarray.

     //For example: solve([[1,2],[4], [5,6]]) = 4 because it results in only 4 possiblities. they are [1,4,5],[1,4,6],[2,4,5],[2,4,6]

     //make sure that you don't count duplicates; for example solve ([[1,2],[4,4], [5,6,6]]) = 4, since the extra outcomes are just duplicates

     //(solve([[1,2],[4],[5,6]]),4);
    // (solve([[1,2],[4,4],[5,6,6]]),4);
    // (solve([[1,2],[3,4],[5,6]]),8);
    //solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

    //arr -> sub arr 
    //uni arrs - find uni and multi together

    //function solve(arr){
        //map -> arr -> with dupes removed
        //[1,2],[4,4],[5,6,6],[1,2],[4],[5,6]
        //reduce -> product 2*1*2 = 4
        //return arr.map(sS => new Set(SS).size).reduce((a,c)=>a*c,1)

      
    //}
    const solve = arr => arr.reduce((a,c) => a * new Set(c).size,1)


    //const solve = arr => arr.map( x => [...new Set(x)].length ).reduce((a,c)=>a*c)
