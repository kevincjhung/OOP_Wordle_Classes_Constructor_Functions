function makeWordle(answer) {

  const wordle = {
    totalGuesses: 0,
    completed: false, // false until correctly guessed
    correctCharacters: [], // letters guessed, ARE in answer
    incorrectCharacters: [], // letters guessed, NOT in answer
    answerArr: answer.split(''),

    guess(word) { // accepts 5 letter string, compares to answer
      if(word.length !== 5) { 
        console.log('word is not 5 characters long')
        return 
      } 
      this.totalGuesses++; // increment # of guesses

      let guessedWordArr = word.split(''); // guessed word, split into [] of char
      
      // for(let charIndex in data.guessedWordArr){
      //   let theChar = guessedWordArr[charIndex]
      //   // if answerArr has current guessed char && char not in correctCharacters
        
      //   if( data.answerArr.includes(theChar) && ( !data.correctCharacters.includes(theChar)) ){
      //       data.correctCharacters.push(theChar)
      //   } 
      //   else if ( !data.answerArr.includes(theChar) && !data.incorrectCharacters.includes(theChar) ){
      //       data.incorrectCharacters.push(theChar)
      //   }
      
      for(char in guessedWordArr){
        let theChar = guessedWordArr[char]
        
        // if answerArr has current guessed char && char not in correctCharacters
        if( this.answerArr.includes(theChar) && (!this.correctCharacters.includes(theChar)) ){ 
          this.correctCharacters.push(theChar)
        } 
        // if char is not in answerArr && char not in incorrectCharacters[]
        else if( !this.answerArr.includes(theChar) && (!this.incorrectCharacters.includes(theChar))) {
          this.incorrectCharacters.push(theChar)
        }
      }

      // check if correct word has been guessed
      this.correctCharacters.sort()
      this.incorrectCharacters.sort()
      this.answerArr.sort()

      let answerJoined = this.answerArr.join('')
      let correctJoined = this.correctCharacters.join('')
      
      if(answerJoined === correctJoined){
        wordle.completed = true
      }
    } 
  }

  return wordle
}






module.exports = makeWordle
