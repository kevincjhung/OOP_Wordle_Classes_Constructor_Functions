class Wordle {
    totalGuesses = 0
    completed = false
    correctCharacters = []
    incorrectCharacters = []
    guessedWordArr
    word

    constructor(answer) {
        this.answer = answer
        this.answerArr = answer.split('')
    }

    guess(word) { // accepts 5 letter string, compares to answer
        if (word.length !== 5) {
            return
        }
        this.guessedWordArr = word.split('') // guessed word, into array
        this.totalGuesses++; // increment # of guesses

        for (let charIndex in this.guessedWordArr) {
            let theChar = this.guessedWordArr[charIndex]
            // if answerArr has current guessed char && char not in correctCharacters
            if (this.answerArr.includes(theChar) && (!this.correctCharacters.includes(theChar))) {
                this.correctCharacters.push(theChar)
            }
            else if (!this.answerArr.includes(theChar) && !this.incorrectCharacters.includes(theChar)) {
                this.incorrectCharacters.push(theChar)
            }

            // check if correct word has been guessed
            this.correctCharacters.sort()
            this.incorrectCharacters.sort()
            this.answerArr.sort()

            let answerJoined = this.answerArr.join('').trim()
            let correctJoined = this.correctCharacters.join('').trim()

            console.log({answerJoined, correctJoined})
            if (answerJoined === correctJoined) {
                this.completed = true
            }
        }
    }
}


module.exports = Wordle


const wordle = new Wordle("hello")
wordle.guess("hello")
