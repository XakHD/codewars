// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.





//My Solution
areYouPlayingBanjo = name => name + (name.match(/^r/i) ? ' plays banjo' : ' does not play banjo')
  // Implement me


// use String.prototype match()
// user ternary operation
