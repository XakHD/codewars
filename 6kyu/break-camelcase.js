// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//my solution
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}

// This function works by using the replace method of the string, which replaces parts of the string that match a regular expression. The regular expression /([A-Z])/g matches any uppercase letter. The 'g' at the end of the regular expression makes it global, so it will match all occurrences in the string, not just the first one.

// The second argument to the replace method is a string that 
// will replace the matched part of the original string. 
// In this case, it's ' $1', which means a space followed 
// by the first (and only) capture group in the regular expression.
//  The capture group is the part of the regular expression in
//   parentheses, which is just the matched uppercase letter. 
//   So this will replace every uppercase letter with a space 
//   followed by that letter, effectively inserting a 
// space before every word that starts with an uppercase letter.