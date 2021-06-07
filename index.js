
const optimization = (entry) => {
    const letters = /^[a-z]+$/;
    const operators = {
      '&': '&&',
      '|': '||',
      '~': '~'
    };
    
    const stack = [];
    
    [...entry || ''].forEach((letter) => {
        if (letters.test(letter)) {
          if (stack[stack.length - 1] === '~') {
              stack.pop()
              stack.push(false)
          } else {
              stack.push(true)
          }
        } else {
          stack.push(operators[letter] || letter); 
        }
    });
    
    //EVAL: no safe but for this case is the short way
    console.log(eval(stack.join('')))
  }
  
  
  console.clear()
  optimization('(a&b&c)|~a') 