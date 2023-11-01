// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My Solution

function abbrevName(name){

    // code away
  
  //Name to Function into Initials
  // Get Initials from name
  //Seperate first from last
  // Get first character--Get last character --look up string.split method
  //combine with period
  // Make Initials Uppercase --use toUpperCase()
  //retun the function
  
  
  
  const firstAndLast = name.split(' ');
 
  return (firstAndLast[0][0] + "." + firstAndLast[1][0]).toUpperCase();
}