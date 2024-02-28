// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//My Solution 
function getCount(str) {

    let vowelsCount = 0;
    
    for(let i = 0; i < str.length; i++) {
      if ('aeiou'.includes(str[i])){
        vowelsCount++
      }
    }
  
    return vowelsCount;
    }