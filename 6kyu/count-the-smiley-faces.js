// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.



//My Solution

//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(face => /^[:;][-~]?[)D]$/.test(face)).length;
  }
  
  //Let's break down the regular expression /^[:;][-~]?[)D]$/:
  
  // ^ asserts the start of a line.
  // [:;] matches either : or ;.
  // [-~]? matches an optional - or ~.
  // [)D] matches either ) or D.
  // $ asserts the end of a line.
  // So, the regular expression matches strings that start with either : or ;, 
  //   followed by an optional - or ~, and ending with either ) or D.
  
  // The filter method creates a new array containing only the elements from 
  // arr that match this regular expression. Finally, .length
  // is used to return the count of valid smileys found in the input array.