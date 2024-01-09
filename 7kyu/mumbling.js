// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My Solution 
function accum(s) {
	// your code
  let result = '',
      array = s.toLowerCase().split('')
  for (let i = 0; i < array.length; i++)  {
    result += array[i].toUpperCase()
    for (let j = i; j > 0; j--) {
      result += array[i]
    }
    if (i < array.length - 1) {
      result += '-'
    }
  }
  return result
}

//My Solution #2 
const accum = s => 
 s.toLowerCase().split('').map((element,index) =>
                              element.toUpperCase() + element.repeat(index)).join('-')