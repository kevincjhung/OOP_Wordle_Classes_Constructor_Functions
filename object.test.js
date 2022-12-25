const makeWordle = require("./object")

function expectDefaultValues(wordle) {
  expect(wordle.totalGuesses).toBe(0)
  expect(wordle.completed).toBe(false)
  expect(wordle.correctCharacters).toEqual([])
  expect(wordle.incorrectCharacters).toEqual([])
}

describe("makeWordle(answer)", () => {
  let wordle
  beforeEach(() => {
    wordle = makeWordle("hello")
  })
  test("default values", () => {
    expectDefaultValues(wordle)
  })
})


describe("guess(word)", () => {
  
  let wordle
  beforeEach(() => {
    wordle = makeWordle("hello")
  })

  test("if a word is not 5 characters, nothing should happen", () => {
    wordle.guess("a")
    expectDefaultValues(wordle)
    wordle.guess("abcdefgh")
    expectDefaultValues(wordle)
  })

  test("increments total guesses", () => {
    wordle.guess("happy")
    expect(wordle.totalGuesses).toBe(1)
    wordle.guess("mount")
    expect(wordle.totalGuesses).toBe(2)
  })

  test("stores correctly guessed letters in correct array", () => {
    wordle.guess("happy")
    expect(wordle.correctCharacters).toEqual(expect.arrayContaining("h".split("")))
    wordle.guess("mount")
    expect(wordle.correctCharacters).toEqual(expect.arrayContaining("ho".split("")))
    expect(wordle.completed).toBe(false)
  })

  test("stores correctly guessed letters without duplicates", () => {
    wordle.guess("happy")
    expect(wordle.correctCharacters).toEqual(expect.arrayContaining("h".split("")))
    wordle.guess("hippy")
    expect(wordle.correctCharacters).toEqual(expect.arrayContaining("h".split("")))
    expect(wordle.completed).toBe(false)
  })

  test("stores incorrectly guessed letters in incorrect array", () => {
    wordle.guess("happy")
    expect(wordle.incorrectCharacters).toEqual(expect.arrayContaining("appy".split("")))
    wordle.guess("mount")
    expect(wordle.incorrectCharacters).toEqual(expect.arrayContaining("mtappyun".split("")))
    expect(wordle.completed).toBe(false)
  })

  test("stores incorrectly guessed letters without duplicates", () => {
    wordle.guess("happy")
    expect(wordle.incorrectCharacters).toEqual(expect.arrayContaining("appy".split("")))
    wordle.guess("hippy")
    expect(wordle.incorrectCharacters).toEqual(expect.arrayContaining("appy".split("")))
    expect(wordle.completed).toBe(false)
  })

  test("sets completed to true when correct word is guessed", () => {
    wordle.guess("hello")
    expect(new Set(wordle.correctCharacters)).toEqual(new Set("helo".split("")))
    expect(wordle.completed).toBe(true)
  })
})
