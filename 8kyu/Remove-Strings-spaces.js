//Write a function that removes the spaces from the string, then return the resultant string.

//Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

//My Solution 

function noSpace(x) {
    // google the function to replace spaces with no spaces 
    
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
    
    // input "spaced" then "no space" 2nd one is the replacement
    return x.replaceAll(' ', '');
  }