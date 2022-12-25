/**
 * 
 * @param {*} answer 
 * @returns 
 */
function makeGuess(answer) {
  const data = {
    totalGuesses: 0,
    completed: false,
    correctCharacters: [],
    incorrectCharacters: [],
    answerArr: answer.split("")
  }

  function guess(word) { 
    if(word.length !== 5) {
      return data
    } 
    
    // increment # of guesses
    data.totalGuesses++; 
    
    // guessed word, split into [] of char
    let guessedWordArr = word.split(''); 

    for(let charIndex in guessedWordArr){
      let theChar = guessedWordArr[charIndex]
      // if answerArr has current guessed char && char not in correctCharacters
      
      if( data.answerArr.includes(theChar) && ( !data.correctCharacters.includes(theChar)) ){
          data.correctCharacters.push(theChar)
      } 
      else if ( !data.answerArr.includes(theChar) && !data.incorrectCharacters.includes(theChar) ){
          data.incorrectCharacters.push(theChar)
      }
    }
  
    
    // check if correct word has been guessed
    data.correctCharacters.sort()
    data.incorrectCharacters.sort()
    data.answerArr.sort()

    let answerJoined = data.answerArr.join('')
    let correctJoined = data.correctCharacters.join('')
    
    if(answerJoined === correctJoined){
      data.completed = true
    }

    return data 
  }

  return guess
}



module.exports = makeGuess
