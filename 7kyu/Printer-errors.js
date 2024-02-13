// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

//my Solution

function printerError(s) {
    // your code
  //this initializes a variable 'error_count' to 0. This variable
  //will be used to count the number of errors found in the string 'a'
  let error_count = 0
  //This like starts a 'for' loop that iterates over each character of the input
  //string 's' It initializes the loop vriable 'i' to 0, and the loop continues as long
  // as 'i' is less than the length of the string 'a'
  for (let i = 0; i < s.length; i++) {
    //checks if the character at the current indiex 'i' in the string 's' is outside
    // the range from 'a' to 'm'. It uses the comparison operators '<' and > to check 
    //if the characters Unicode value is less than 'a' or greater than 'm'
    if (s[i] < 'a' || s[i] > 'm') {
      // if the condition in the previous line is true(meaning the character is outside
      // the range a to m then this line increments the error_count variable by 1
      error_count++
    }
  }
  //returns the string representing the error rate of the printer. it concatenates
  // the error_count (numerator) with'/' and the length of the input string 's'
  //converting them to strings if necessary. This is done usingstrong concatenation
  //with a '+' operator
  return error_count + "/" + s.length;
}