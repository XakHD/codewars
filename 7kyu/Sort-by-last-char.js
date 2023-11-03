// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//My Solution

//function last(x){
//Change above to a const  arrow function
//}

//split by the spaces so everyword has its own element 
//use split method
//sort by the last character
//use the sort method
const last = x =>
//use sort arrow function sort((a, b) => {/*--*/ } )
//then use the charCodeAt() method to return integer
x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1) )

