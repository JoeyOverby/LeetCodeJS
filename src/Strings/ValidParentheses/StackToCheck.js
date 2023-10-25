/*
Runtime: 48ms
Beats 89.07%of users with JavaScript

Memory: 42.52MB
Beats 44.95%of users with JavaScript

*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create HashMap of left parens as keys, and their corresponding closing as values
    const parens = new Map();

    parens.set('(', ')');
    parens.set('{', '}');
    parens.set('[', ']');
  
    const rightParens = [...parens.values()]
  
    const stack = [];
  
    for( const paren of s) { 
  
  
      if(parens.has(paren)) {
        // It's a left paren, So push it onto the stack
        stack.push(paren);
  
      } else if(rightParens.includes(paren)){
        // It's a right paren, 
        // So then the next popped value (top of stack) must be it's matching left paren
  
        let poppedVal = stack.pop();
        if(parens.get(poppedVal) !== paren){
          // We didn't find a match, invalid input
          return false;
        }
      } else {
        // Error condition invalid input
        console.error(`Invalid input: '${paren}'`);
        return false;
      }
  
    }
  
    // If the stack is empty then we matched everything and the string is valid.
    return stack.length === 0 ? true : false;  
  
  };