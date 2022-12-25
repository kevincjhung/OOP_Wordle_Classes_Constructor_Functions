const Wordle = require("./class")

test("all properties are private with getters", () => {
  // total guesses
    const wordle = new Wordle("hello")
    const answer = wordle.answer
    expect(wordle.totalGuesses).toBe(0)
    wordle.totalGuesses = 10
    expect(wordle.totalGuesses).toBe(0)

  // answer
    expect(wordle.answer).toBe(answer)
    wordle.answer = "something"
    expect(wordle.answer).toBe(answer)
  
  // correct characters is private
    expect(wordle.correctCharacters).toEqual([])
    wordle.correctCharacters = ["a"]
    expect(wordle.correctCharacters).toEqual([])
  
  // incorrect characters is private
    expect(wordle.incorrectCharacters).toEqual([])
    wordle.incorrectCharacters = ["a"]
    expect(wordle.incorrectCharacters).toEqual([])
  
  // completed is private
    expect(wordle.completed).toBe(false)
    wordle.completed = true
    expect(wordle.completed).toBe(false)
  
})

test("static random", () => {
  const words = ["robin","ultra","ulcer","pause","humor","frame","elder","skill","aloft","pleat","shard","moist","those","light","wrung","could","perky","mount","whack","sugar","knoll","crimp","wince","prick","robot","point","proxy","shire","solar","panic","tangy","abbey","drink","query","gorge","crank","slump","banal","tiger","siege","truss","boost","rebus"]
  
  const wordle = Wordle.random()
  expect(words).toContain(wordle.answer)
})